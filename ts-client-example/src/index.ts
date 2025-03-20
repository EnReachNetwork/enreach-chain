import { DirectSecp256k1HdWallet } from '@cosmjs/proto-signing'
import RegionApi from "./region";
import OperatorApi from './operator';
import ManagerApi from './manager';
import { ADMIN_MNEMONIC, OPERATOR_MNEMONIC, MANAGER_MNEMONIC, SUPERIOR_MENMONIC, CHAIN_WS_URL, CHAIN_PREFIX } from './consts';
import { Secp256k1, sha256, Bip39, Slip10,Slip10Curve, EnglishMnemonic, stringToPath } from "@cosmjs/crypto";
import EdgenodeApi from './edgenode';
import WorkloadApi from './workload';
import { Tendermint37Client } from "@cosmjs/tendermint-rpc";
async function main() {
  const regionAdminApi = new RegionApi(ADMIN_MNEMONIC);
  const regionApi = new RegionApi(SUPERIOR_MENMONIC);
  const operatorApi = new OperatorApi(OPERATOR_MNEMONIC);
  const managerAdminApi = new ManagerApi(ADMIN_MNEMONIC);
  const managerApi = new ManagerApi(MANAGER_MNEMONIC);
  const edgenodeAdminApi = new EdgenodeApi(ADMIN_MNEMONIC);
  const edgenodeApi = new EdgenodeApi(SUPERIOR_MENMONIC);
  const workloadApi = new WorkloadApi(MANAGER_MNEMONIC);

  console.log("===Init Api Objects");
  await regionAdminApi.initApi();
  await regionApi.initApi();
  await operatorApi.initApi();
  await managerAdminApi.initApi();
  await managerApi.initApi();
  await edgenodeAdminApi.initApi();
  await edgenodeApi.initApi();
  await workloadApi.initApi();

  // Listen and log events
  listenEvents();
  await regionAdminApi.createSuperior({signer: regionAdminApi.account, account: regionApi.account});
  // The superior we used in this example are the same, so use regionApi.account as the superior account of the manager module
  await managerAdminApi.createSuperior({signer: managerAdminApi.account, account: regionApi.account});
  await edgenodeAdminApi.createSuperior({signer: edgenodeAdminApi.account, account: edgenodeApi.account});

  await regionApi.createRegion({signer: regionApi.account, code: "US", name: "United State", description: "US Region"});
  //console.log("Create Region Result:", JSON.stringify(result, (key, value) => typeof value === 'bigint' ? value.toString() : value, 2));
  const allRegions = await regionApi.queryAllRegion();
  console.log("Regions:", allRegions);

  await testManager(regionApi, operatorApi, managerApi);

  await testEdgenode(edgenodeApi);

  await testWorkload(workloadApi);
}

async function testManager(regionApi: RegionApi, operatorApi: OperatorApi, managerApi: ManagerApi) {

  await operatorApi.createOperator({operatorAccount: operatorApi.account, name:"Crust", description: "Crust Network", websiteUrl: "https://crust.network"});
  
  await managerApi.registerManager({managerAccount: managerApi.account, hostAddress:"127.0.0.1",managerPort:100,trackerPort:200,chainAPIPort:1337, chainRPCPort:26657});
  
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

  await edgenodeApi.createUser({signer:edgenodeApi.account, userID: "user1"});

  await edgenodeApi.registerNode({signer:edgenodeApi.account, nodeID: "node1", deviceType: "Box"});
  
  await edgenodeApi.bindAndActivateNode({signer:edgenodeApi.account, nodeID: "node1", userID: "user1", nodeName: "My Home Node", regionCode: "US"});

  console.log("===Query all data");
  const allUsers = await edgenodeApi.queryAllUser();
  const allNodes = await edgenodeApi.queryAllNode();

  console.log("Users:", allUsers);
  console.log("Nodes:", allNodes);
}

async function testWorkload(workloadApi: WorkloadApi) {

  await workloadApi.createWorkload({managerAccount: workloadApi.account, epoch: 1, nodeID: "node1", score: 100});

  console.log("===Query all data");
  const allWorkloads = await workloadApi.queryAllWorkload();
  console.log("Workloads:", allWorkloads);
} 

async function listenEvents() {
  const tmClient = await Tendermint37Client.connect(CHAIN_WS_URL);

  const query = `tm.event='Tx'`;
  const subscription = tmClient.subscribeTx(query);
  const decoder = new TextDecoder();

  subscription.subscribe({
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

main().catch(console.error);