import { DirectSecp256k1HdWallet } from '@cosmjs/proto-signing'
import RegionApi from "./region";
import OperatorApi from './operator';
import ManagerApi from './manager';
import { ADMIN_MNEMONIC, OPERATOR_A_MNEMONIC, MANAGER_A_MNEMONIC, SUPERIOR_MENMONIC, CHAIN_WS_URL, CHAIN_PREFIX, MANAGER_B_MNEMONIC, MANAGER_C_MNEMONIC, OPERATOR_B_MNEMONIC, OPERATOR_C_MNEMONIC } from './consts';
import { Secp256k1, sha256, Bip39, Slip10,Slip10Curve, EnglishMnemonic, stringToPath } from "@cosmjs/crypto";
import EdgenodeApi from './edgenode';
import WorkloadApi from './workload';
import { Tendermint37Client } from "@cosmjs/tendermint-rpc";
import { ethers } from 'ethers';
import { Params } from "@cosmjs/tendermint-rpc/build/tendermint37/adaptor/requests";
import { BlockResultsRequest, Method } from '@cosmjs/tendermint-rpc/build/tendermint37/requests';
import { Event } from '@cosmjs/tendermint-rpc/build/tendermint37/responses';
import { JsonRpcSuccessResponse } from "@cosmjs/json-rpc";
import BankApi from './bank';

const bankAdminApi = new BankApi(ADMIN_MNEMONIC);
const regionAdminApi = new RegionApi(ADMIN_MNEMONIC);
const regionApi = new RegionApi(SUPERIOR_MENMONIC);
const operator_A_Api = new OperatorApi(OPERATOR_A_MNEMONIC);
const operator_B_Api = new OperatorApi(OPERATOR_B_MNEMONIC);
const operator_C_Api = new OperatorApi(OPERATOR_C_MNEMONIC);
const managerAdminApi = new ManagerApi(ADMIN_MNEMONIC);
const manager_A_Api = new ManagerApi(MANAGER_A_MNEMONIC);
const manager_B_Api = new ManagerApi(MANAGER_B_MNEMONIC);
const manager_C_Api = new ManagerApi(MANAGER_C_MNEMONIC);
const edgenodeAdminApi = new EdgenodeApi(ADMIN_MNEMONIC);
const edgenodeApi = new EdgenodeApi(SUPERIOR_MENMONIC);
const workload_A_Api = new WorkloadApi(MANAGER_A_MNEMONIC);
const workload_B_Api = new WorkloadApi(MANAGER_B_MNEMONIC);
const workload_C_Api = new WorkloadApi(MANAGER_C_MNEMONIC);
const workloadAdminApi = new WorkloadApi(ADMIN_MNEMONIC);
const workloadSuperiorApi = new WorkloadApi(SUPERIOR_MENMONIC);

async function main() {

  console.log("===Init Api Objects");
  await bankAdminApi.initApi();
  await regionAdminApi.initApi();
  await regionApi.initApi();
  await operator_A_Api.initApi();
  await operator_B_Api.initApi();
  await operator_C_Api.initApi();
  await managerAdminApi.initApi();
  await manager_A_Api.initApi();
  await manager_B_Api.initApi();
  await manager_C_Api.initApi();
  await edgenodeAdminApi.initApi();
  await edgenodeApi.initApi();
  await workload_A_Api.initApi();
  await workload_B_Api.initApi();
  await workload_C_Api.initApi();
  await workloadAdminApi.initApi();
  await workloadSuperiorApi.initApi();

  // Transfer tokens for gas fee
  await sendTokenForGasFee();

  // Listen and log events
  listenEvents();
  await regionAdminApi.createSuperior({signer: regionAdminApi.account, account: regionApi.account});
  // The superior we used in this example are the same, so use regionApi.account as the superior account of the manager module
  await managerAdminApi.createSuperior({signer: managerAdminApi.account, account: regionApi.account});
  await edgenodeAdminApi.createSuperior({signer: edgenodeAdminApi.account, account: edgenodeApi.account});
  await workloadAdminApi.createSuperior({signer: workloadAdminApi.account, account: workloadSuperiorApi.account});

  await regionApi.createRegion({signer: regionApi.account, code: "US", name: "United State", description: "US Region"});
  const allRegions = await regionApi.queryAllRegion();
  console.log("Regions:", allRegions);

  await testManager(operator_A_Api, manager_A_Api);
  await testManager(operator_B_Api, manager_B_Api);
  await testManager(operator_C_Api, manager_C_Api);

  await testEdgenode(edgenodeApi);

  await testWorkload();

  await testReputationPoint();

  await testCheatStatus();

  await testParams();
}

async function sendTokenForGasFee() {
  console.log("Send Tokens from Admin account to other accounts for gas fee");
  console.log(`Admin account: ${bankAdminApi.account}`);

  console.log(`Superior account: ${regionApi.account}`);
  await bankAdminApi.sendToken({fromAddress: bankAdminApi.account, toAddress: regionApi.account, amount: [{denom:"uekc", amount:"1000000000000"}]});
  console.log(`Operator A account: ${operator_A_Api.account}`);
  await bankAdminApi.sendToken({fromAddress: bankAdminApi.account, toAddress: operator_A_Api.account, amount: [{denom:"uekc", amount:"1000000000000"}]});
  console.log(`Operator B account: ${operator_B_Api.account}`);
  await bankAdminApi.sendToken({fromAddress: bankAdminApi.account, toAddress: operator_B_Api.account, amount: [{denom:"uekc", amount:"1000000000000"}]});
  console.log(`Operator C account: ${operator_C_Api.account}`);
  await bankAdminApi.sendToken({fromAddress: bankAdminApi.account, toAddress: operator_C_Api.account, amount: [{denom:"uekc", amount:"1000000000000"}]});
  console.log(`Manager A account: ${manager_A_Api.account}`);
  await bankAdminApi.sendToken({fromAddress: bankAdminApi.account, toAddress: manager_A_Api.account, amount: [{denom:"uekc", amount:"1000000000000"}]});
  console.log(`Manager B account: ${manager_B_Api.account}`);
  await bankAdminApi.sendToken({fromAddress: bankAdminApi.account, toAddress: manager_B_Api.account, amount: [{denom:"uekc", amount:"1000000000000"}]});
  console.log(`Manager C account: ${manager_C_Api.account}`);
  await bankAdminApi.sendToken({fromAddress: bankAdminApi.account, toAddress: manager_C_Api.account, amount: [{denom:"uekc", amount:"1000000000000"}]});
}
async function testManager(operatorApi: OperatorApi, managerApi: ManagerApi) {

  await operatorApi.createOperator({operatorAccount: operatorApi.account, name:"Crust", description: "Crust Network", websiteUrl: "https://crust.network"});
  
  const [evmAccount, sig] = await getEvmSignature(operatorApi.account);
  await operatorApi.bindOperatorEVMAccount({operatorAccount: operatorApi.account, evmAccount: evmAccount, evmSignature: ethers.utils.arrayify(sig)})

  await managerApi.registerManager({managerAccount: managerApi.account, hostAddress:"127.0.0.1",managerHTTPPort:100,managerWSPort:180,trackerPort:200,chainAPIPort:1337, chainRPCPort:26657});
  
  const managerSignature = await getManagerSignature(operatorApi.account, managerApi.wallet);
  await operatorApi.bindOperatorManagerAccount({operatorAccount: operatorApi.account, managerAccount: managerApi.account, managerSignature: managerSignature, forceUnbind: true});
  
  await operatorApi.setManagerRegion({operatorAccount: operatorApi.account, regionCode:"US"});
  
  const license = await getActivateLicense(operatorApi.account, managerApi.account);
  await operatorApi.activateManager({operatorAccount: operatorApi.account, license: license});
  
  await managerApi.goWorking({managerAccount: managerApi.account});

  console.log("===Query all data");
  const allOperators = await operatorApi.queryAllOperator();
  const allManagers = await managerApi.queryAllManager();

  console.log("Operators:", allOperators);
  console.log("Managers:", allManagers);
}

async function getEvmSignature(data: string) {

  const pair = ethers.Wallet.createRandom();
  const evmAccount = pair.address;
  
  const toSignedMessage = `${data}:${evmAccount}`;
  const sig = await pair.signMessage(toSignedMessage);

  return [evmAccount, sig];
}

async function getManagerSignature(operatorAccount: string, managerWallet: DirectSecp256k1HdWallet) {
  const accounts = await managerWallet.getAccounts();
  const managerAccount = accounts[0].address;
  
  const toSignedMessage = `${operatorAccount}:${managerAccount}`;
  const messageBytes = new TextEncoder().encode(toSignedMessage);
  const messageHash = sha256(messageBytes);

  const seed = await Bip39.mnemonicToSeed(new EnglishMnemonic(managerWallet.mnemonic));
  const slip10 = Slip10.derivePath(Slip10Curve.Secp256k1, seed, stringToPath("m/44'/118'/0'/0/0")); 
  const privateKey = slip10.privkey;

  const signature = await Secp256k1.createSignature(messageHash, privateKey);

  return signature.toFixedLength();
}

async function getActivateLicense(operatorAccount: string, managerAccount: string) {
  const superiorWallet = await DirectSecp256k1HdWallet.fromMnemonic(SUPERIOR_MENMONIC, { prefix: CHAIN_PREFIX });
  const superiorAccount = (await superiorWallet.getAccounts())[0].address;
  
  const toSignedMessage = `${superiorAccount}:${operatorAccount}:${managerAccount}`;
  const messageBytes = new TextEncoder().encode(toSignedMessage);
  const messageHash = sha256(messageBytes);

  const seed = await Bip39.mnemonicToSeed(new EnglishMnemonic(SUPERIOR_MENMONIC));
  const slip10 = Slip10.derivePath(Slip10Curve.Secp256k1, seed, stringToPath("m/44'/118'/0'/0/0")); 
  const privateKey = slip10.privkey;

  const signature = await Secp256k1.createSignature(messageHash, privateKey);
  const license = Buffer.from(signature.toFixedLength()).toString('base64');

  return license;
}

async function testEdgenode(edgenodeApi: EdgenodeApi) {
  const userID = "user1";
  const nodeID1 = "node1";
  const nodeID2 = "node2";
  await edgenodeApi.createUser({signer:edgenodeApi.account, userID: userID});

  const [evmAccount, sig] = await getEvmSignature(userID);
  await edgenodeApi.bindUserEVMAccount({signer:edgenodeApi.account, userID: userID, evmAccount: evmAccount, evmSignature: ethers.utils.arrayify(sig)});

  await edgenodeApi.registerNode({signer:edgenodeApi.account, nodeID: nodeID1, deviceType: "Box"});
  await edgenodeApi.bindAndActivateNode({signer:edgenodeApi.account, nodeID: nodeID1, userID: userID, nodeName: "My Home Box", regionCode: "US"});

  await edgenodeApi.registerNode({signer:edgenodeApi.account, nodeID: nodeID2, deviceType: "X86"});
  await edgenodeApi.bindAndActivateNode({signer:edgenodeApi.account, nodeID: nodeID2, userID: userID, nodeName: "My X86 Node", regionCode: "US"});

  await edgenodeApi.updateNodeTrafficTypeBatch({signer:edgenodeApi.account, trafficType: 1, nodeIDs: [nodeID1, nodeID2], skipNonExistNode: true});

  console.log("===Query all data");
  const allUsers = await edgenodeApi.queryAllUser();
  const allNodes = await edgenodeApi.queryAllNode();

  console.log("Users:", allUsers);
  console.log("Nodes:", allNodes);
}

async function testWorkload() {

  let currentEpoch = await workload_A_Api.getCurrentEpoch();
  while(currentEpoch < 2) {
    console.log(`Waiting for epoch_2 to be started...`);
    await sleep(3000);
    currentEpoch = await workload_A_Api.getCurrentEpoch();
  }
  const previsouEpoch = currentEpoch - 1;

  const workreports_A = {
    managerAccount: workload_A_Api.account,
    epoch: previsouEpoch,
    nodeScores: [
      {
        nodeID: "node1",
        score: 100,
      },
      {
        nodeID: "node2",
        score: 200,
      },
    ],
  };
  const workreports_B = {
    managerAccount: workload_B_Api.account,
    epoch: previsouEpoch,
    nodeScores: [
      {
        nodeID: "node1",
        score: 150,
      },
      {
        nodeID: "node2",
        score: 250,
      },
    ],
  };
  const workreports_C = {
    managerAccount: workload_C_Api.account,
    epoch: previsouEpoch,
    nodeScores: [
      {
        nodeID: "node1",
        score: 200,
      },
      {
        nodeID: "node2",
        score: 300,
      },
    ],
  };

  await workload_A_Api.submitWorkreports(workreports_A);
  await workload_B_Api.submitWorkreports(workreports_B);
  await workload_C_Api.submitWorkreports(workreports_C);

  console.log("===Query all data");
  const allWorkreports_A = await workload_A_Api.queryAllWorkreporthByEpoch(previsouEpoch);
  console.log("Workreports:", JSON.stringify(allWorkreports_A, (key, value) => typeof value === 'bigint' ? value.toString() : value, 2));
} 


async function testReputationPoint() {

  let currentEra = await workload_A_Api.getCurrentEra();
  while(currentEra < 2) {
    console.log(`Waiting for era_2 to be started...`);
    await sleep(3000);
    currentEra = await workload_A_Api.getCurrentEra();
  }
  const previsouEra = currentEra - 1;

  const reputationPointChangeData_A = {
    managerAccount: workload_A_Api.account,
    era: previsouEra,
    nodePoints: [
      {
        nodeID: "node1",
        deltaPoint: 1,
      },
      {
        nodeID: "node2",
        deltaPoint: -1,
      },
    ],
  };
  const reputationPointChangeData_B = {
    managerAccount: workload_B_Api.account,
    era: previsouEra,
    nodePoints: [
      {
        nodeID: "node1",
        deltaPoint: 2,
      },
      {
        nodeID: "node2",
        deltaPoint: -2,
      },
    ],
  };
  const reputationPointChangeData_C = {
    managerAccount: workload_C_Api.account,
    era: previsouEra,
    nodePoints: [
      {
        nodeID: "node1",
        deltaPoint: 3,
      },
      {
        nodeID: "node2",
        deltaPoint: -3,
      },
    ],
  };
  
  await workload_A_Api.submitReputationPointChangeData(reputationPointChangeData_A);
  await workload_B_Api.submitReputationPointChangeData(reputationPointChangeData_B);
  await workload_C_Api.submitReputationPointChangeData(reputationPointChangeData_C);

  console.log("===Query all data");
  const allReputationPointChangeDatas = await workload_A_Api.queryAllReputationChangeDataByEra(previsouEra);
  console.log("Reputation Point Change Data:", jsonify(allReputationPointChangeDatas));
} 

async function testCheatStatus() {

  let currentEra = await workload_A_Api.getCurrentEra();
  while(currentEra < 2) {
    console.log(`Waiting for era_2 to be started...`);
    await sleep(3000);
    currentEra = await workload_A_Api.getCurrentEra();
  }
  const previsouEra = currentEra - 1;

  const cheatStatusCR_A = {
    managerAccount: workload_A_Api.account,
    era: previsouEra,
    nodeDatas: [
      {
        nodeID: "node1",
        cheatStatus: "Suspicious",
      },
      {
        nodeID: "node2",
        cheatStatus: "Normal",
      },
    ],
  };
  const cheatStatusCR_B = {
    managerAccount: workload_B_Api.account,
    era: previsouEra,
    nodeDatas: [
      {
        nodeID: "node1",
        cheatStatus: "Suspicious",
      },
      {
        nodeID: "node2",
        cheatStatus: "Suspicious",
      },
    ],
  };
  const cheatStatusCR_C = {
    managerAccount: workload_C_Api.account,
    era: previsouEra,
    nodeDatas: [
      {
        nodeID: "node1",
        cheatStatus: "Normal",
      },
      {
        nodeID: "node2",
        cheatStatus: "Blacklist",
      },
    ],
  };
  
  await workload_A_Api.submitCheatStatusCR(cheatStatusCR_A);
  await workload_B_Api.submitCheatStatusCR(cheatStatusCR_B);
  await workload_C_Api.submitCheatStatusCR(cheatStatusCR_C);

  console.log("===Query all data");
  const cheatStatusCRData = await workload_A_Api.queryAllCheatStatusCRDataByEra(Number(previsouEra));
  console.log(`Cheat Status CR Data of era-${previsouEra}:`, jsonify(cheatStatusCRData));
} 

async function testParams() {

  const oldParams = await workload_A_Api.queryParams();

  await workloadSuperiorApi.updateParam({
    signer: workloadSuperiorApi.account,
    paramKey: "EpochLength",
    paramValue: "15",
  })

  const newParams = await workload_A_Api.queryParams();

  console.log("===testParams()");
  console.log(`Old Params:`, jsonify(oldParams));
  console.log(`New Params:`, jsonify(newParams));
}

async function listenEvents() {

  const tmClient = await Tendermint37Client.connect(CHAIN_WS_URL);

  const subscriptionBlockHeader = tmClient.subscribeNewBlockHeader();
  subscriptionBlockHeader.subscribe({
      next: async (blockHeaderEvent) => {

        const blockHeight = blockHeaderEvent.height;
        const events = await getFinalizeBlockEvents(tmClient, blockHeight);
        events.forEach(async (event) => {
          if (event.type === "EventEpochStart") {
            const epoch = event.attributes.find(attr => attr.key === "epoch")?.value;
            console.log(`!!!Epoch '${epoch}' start at block '${blockHeight}': ${event.attributes.map(item => `'${item.key}':'${item.value}'`).join(', ')}`);
          } else if (event.type === "EventEpochEnd") {
            const epoch = event.attributes.find(attr => attr.key === "epoch")?.value;
            console.log(`!!!Epoch '${epoch}' end at block '${blockHeight}': ${event.attributes.map(item => `'${item.key}':'${item.value}'`).join(', ')}`);
          } else if (event.type === "EventEraStart") {
            const era = event.attributes.find(attr => attr.key === "era")?.value;
            console.log(`###Era '${era}' start at block '${blockHeight}': ${event.attributes.map(item => `'${item.key}':'${item.value}'`).join(', ')}`);
          } else if (event.type === "EventEraEnd") {
            const era = event.attributes.find(attr => attr.key === "era")?.value;
            console.log(`###Era '${era}' end at block '${blockHeight}': ${event.attributes.map(item => `'${item.key}':'${item.value}'`).join(', ')}`);
          } else if (event.type === "EventEpochWorkloadProcessStarted") {
            const epoch = event.attributes.find(attr => attr.key === "epoch")?.value;
            console.log(`!!!Epoch workload process started: ${event.attributes.map(item => `'${item.key}':'${item.value}'`).join(', ')}`);
          } else if (event.type === "EventEpochWorkloadProcessEnded") {
            const epoch = event.attributes.find(attr => attr.key === "epoch")?.value;
            const totalNodesCount = Number(event.attributes.find(attr => attr.key === "totalNodesCount")?.value);
            console.log(`!!!Epoch workload process ended: ${event.attributes.map(item => `'${item.key}':'${item.value}'`).join(', ')}`);

            if (totalNodesCount > 0) {
              // query all workload by epoch and print them out
              console.log("===Query all workload data");
              const nodeWorkloads = await workload_A_Api.queryAllNodeWorkloadByEpoch(Number(epoch));
              console.log(`Node Workloads of epoch-${epoch}:`, jsonify(nodeWorkloads));

              const managerWorkloads = await workload_A_Api.queryAllManagerWRWorkloadByEpoch(Number(epoch));
              console.log(`Manager Workreport Workloads of epoch-${epoch}:`, jsonify(managerWorkloads));

              const allEpochProcessDatas = await workload_A_Api.queryAllEpochProcessData();
              console.log(`All Epoch Process Datas:`, jsonify(allEpochProcessDatas));
            }
          } else if (event.type === "EventEraReputationPointProcessStarted") {
            const era = event.attributes.find(attr => attr.key === "era")?.value;
            console.log(`###Era reputation point process started: ${event.attributes.map(item => `'${item.key}':'${item.value}'`).join(', ')}`);
          } else if (event.type === "EventEraReputationPointProcessEnded") {
            const era = event.attributes.find(attr => attr.key === "era")?.value;
            const totalNodesCount = Number(event.attributes.find(attr => attr.key === "totalNodesCount")?.value);
            console.log(`###Era reputation point process ended: ${event.attributes.map(item => `'${item.key}':'${item.value}'`).join(', ')}`);

            if (totalNodesCount > 0) {
              // query all reputation point by era and print them out
              console.log("===Query all reputation point data");
              const reputationDeltaPoints = await workload_A_Api.queryAllReputationDeltaPointByEra(Number(era));
              console.log(`Reputation Delta Points of era-${era}:`, jsonify(reputationDeltaPoints));

              const reputationPointsOfNodes = await edgenodeApi.queryAllNode();
              console.log(`Reputation Points of era-${era}:`, jsonify(reputationPointsOfNodes));

              const managerWorkloads = await workload_A_Api.queryAllManagerRPWorkloadByEra(Number(era));
              console.log(`Manager Reputation Point Workloads of era-${era}:`, jsonify(managerWorkloads));

              const allEraProcessDatas = await workload_A_Api.queryAllEraProcessData();
              console.log(`All Era Process Datas:`, jsonify(allEraProcessDatas));
            }
          } else if (event.type === "EventEraCheatStatusProcessStarted") {
            const era = event.attributes.find(attr => attr.key === "era")?.value;
            console.log(`###Era cheat status process started: ${event.attributes.map(item => `'${item.key}':'${item.value}'`).join(', ')}`);
          } else if (event.type === "EventEraCheatStatusProcessEnded") {
            const era = event.attributes.find(attr => attr.key === "era")?.value;
            const totalNodesCount = Number(event.attributes.find(attr => attr.key === "totalNodesCount")?.value);
            console.log(`###Era cheat status process ended: ${event.attributes.map(item => `'${item.key}':'${item.value}'`).join(', ')}`);

            if (totalNodesCount > 0) {
              // query all cheat status by era and print them out
              console.log("===Query all cheat status data");
              const cheatStatusOfNodes = await edgenodeApi.queryAllNode();
              console.log(`Cheat Status of era-${era}:`, jsonify(cheatStatusOfNodes));

              const managerWorkloads = await workload_A_Api.queryAllManagerCSWorkloadByEra(Number(era));
              console.log(`Manager Cheat Status Workloads of era-${era}:`, jsonify(managerWorkloads));

              const allEraCheatStatusProcessDatas = await workload_A_Api.queryAllEraCheatStatusProcessData();
              console.log(`All Era Cheata Status Process Datas:`, jsonify(allEraCheatStatusProcessDatas));
            }
          }
        });
      },
  });

  const subscriptionTx = tmClient.subscribeTx();
  subscriptionTx.subscribe({
      next: (txResponse) => {
          txResponse.result.events.forEach((event) => {
              if (event.type === 'message') {
                  const action = event.attributes.find((attr) => attr.key === "action")?.value;

                  console.log("===", action!);
              } else if (event.type != "tx") {
                const module = event.attributes.find((attr) => attr.key === "module")?.value;
                console.log(`[Event] ${module}.${event.type} - ${event.attributes.map(item => `'${item.key}':'${item.value}'`).join(', ')}`);
              }
          });
      },
      error: (err) => console.error("Subsription Failed:", err),
      complete: () => console.log("Subscription Complete"),
  });
}

async function getFinalizeBlockEvents(tmClient:Tendermint37Client, height: number): Promise<Event[]> {

  // The latest @cosmjs/tendermint-rpc (v0.33.1) is not compatible with cometbft v0.38
  // which has removed begin_block_events and end_block_events, and replaced them with finalize_block_events
  // there is a pull request to fix this issue https://github.com/cosmos/cosmjs/pull/1612
  // but no one merge this...
  // so we have to hack here and do the decode manually
  const query: BlockResultsRequest = {
    method: Method.BlockResults,
    params: { height },
  };
  const req = Params.encodeBlockResults(query);
  const resp = await (tmClient as any).client.execute(req);

  const events = (resp as JsonRpcSuccessResponse).result.finalize_block_events
  if (events !== undefined && Array.isArray(events)) {

    const decodedEvents = events.map((event) =>{
      return {
        type: event.type,
        attributes: (event.attributes && Array.isArray(event.attributes)) 
            ? event.attributes.map((attribute: any) => {return {key:attribute.key, value: attribute.value ?? ""}}) 
            : [],
      };
    });

    return decodedEvents as Event[];
  }

  return [];
}

function jsonify(obj: any) {
  return JSON.stringify(obj, (key, value) => typeof value === 'bigint' ? value.toString() : value, 2);
}
function sleep(ms: number) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

main().catch(console.error);