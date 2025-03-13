import { DirectSecp256k1HdWallet } from '@cosmjs/proto-signing'
import RegionApi from "./region";
import OperatorApi from './operator';
import ManagerApi from './manager';
import { ADMIN_MNEMONIC, OPERATOR_MNEMONIC, MANAGER_MNEMONIC, SUPERIOR_MENMONIC } from './consts';
import { Secp256k1, sha256, Bip39, Slip10,Slip10Curve, EnglishMnemonic, stringToPath } from "@cosmjs/crypto";
import EdgenodeApi from './edgenode';
import WorkloadApi from './workload';
async function main() {
  const regionApi = new RegionApi(ADMIN_MNEMONIC);
  const operatorApi = new OperatorApi(OPERATOR_MNEMONIC);
  const managerApi = new ManagerApi(MANAGER_MNEMONIC);
  const edgenodeAdminApi = new EdgenodeApi(ADMIN_MNEMONIC);
  const edgenodeApi = new EdgenodeApi(SUPERIOR_MENMONIC);
  const workloadApi = new WorkloadApi(MANAGER_MNEMONIC);

  console.log("===Init Api Objects");
  await regionApi.initApi();
  await operatorApi.initApi();
  await managerApi.initApi();
  await edgenodeAdminApi.initApi();
  await edgenodeApi.initApi();
  await workloadApi.initApi();

  console.log("===setSuperior");
  await edgenodeAdminApi.createSuperior({signer: edgenodeAdminApi.account, account: edgenodeApi.account});

  console.log("===createRegion");
  await regionApi.createRegion({signer: regionApi.account, code: "US", name: "United State", description: "US Region"});

  await testManager(regionApi, operatorApi, managerApi);

  await testEdgenode(edgenodeApi);

  await testWorkload(workloadApi);
}

async function testManager(regionApi: RegionApi, operatorApi: OperatorApi, managerApi: ManagerApi) {

  console.log("===createOperator");
  await operatorApi.createOperator({operatorAccount: operatorApi.account, name:"Crust", description: "Crust Network", websiteUrl: "https://crust.network"});
  
  console.log("===registerManager");
  await managerApi.registerManager({managerAccount: managerApi.account, hostAddress:"127.0.0.1",managerPort:100,trackerPort:200,chainAPIPort:1337, chainRPCPort:26657});
  
  console.log("===bindOperatorManagerAccount");
  const managerSignature = await getManagerSignature(operatorApi.account, managerApi.wallet);
  await operatorApi.bindOperatorManagerAccount({operatorAccount: operatorApi.account, managerAccount: managerApi.account, managerSignature: managerSignature, forceUnbind: true});
  
  console.log("===setManagerRegion");
  await operatorApi.setManagerRegion({operatorAccount: operatorApi.account, regionCode:"US"});
  
  console.log("===activateManager");
  await operatorApi.activateManager({operatorAccount: operatorApi.account, license:"aaaaaa"});
  
  console.log("===goWorking");
  await managerApi.goWorking({managerAccount: managerApi.account});

  console.log("===Query all data");
  const allRegions = await regionApi.queryAllRegion();
  const allOperators = await operatorApi.queryAllOperator();
  const allManagers = await managerApi.queryAllManager();

  console.log("Regions:", allRegions);
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

  return signature.toFixedLength().slice(0, 64); // Should exclude the last recovery field in the signature
}

async function testEdgenode(edgenodeApi: EdgenodeApi) {

  console.log("===createUser");
  await edgenodeApi.createUser({signer:edgenodeApi.account, userID: "user1"});

  console.log("===registerNode");
  await edgenodeApi.registerNode({signer:edgenodeApi.account, nodeID: "node1", deviceType: "Box", regionCode: "US"});
  
  console.log("===bindAndActivateNode");
  await edgenodeApi.bindAndActivateNode({signer:edgenodeApi.account, nodeID: "node1", userID: "user1"});

  console.log("===Query all data");
  const allUsers = await edgenodeApi.queryAllUser();
  const allNodes = await edgenodeApi.queryAllNode();

  console.log("Users:", allUsers);
  console.log("Nodes:", allNodes);
}

async function testWorkload(workloadApi: WorkloadApi) {

  console.log("===createWorkload");
  await workloadApi.createWorkload({managerAccount: workloadApi.account, epoch: 1, nodeID: "node1", score: 100});

  console.log("===Query all data");
  const allWorkloads = await workloadApi.queryAllWorkload();
  console.log("Workloads:", allWorkloads);
} 

main().catch(console.error);