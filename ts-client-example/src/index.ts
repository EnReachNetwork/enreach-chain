import { DirectSecp256k1HdWallet } from '@cosmjs/proto-signing'
import RegionApi from "./region";
import OperatorApi from './operator';
import ManagerApi from './manager';
import { ADMIN_MNEMONIC, ALICE_MNEMONIC, BOB_MNEMONIC } from './consts';
import { MsgCreateRegion } from 'enreach-client-ts/lib/enreach.registry/module';

async function main() {
  const regionApi = new RegionApi(ADMIN_MNEMONIC);
  const operatorApi = new OperatorApi(ALICE_MNEMONIC);
  const managerApi = new ManagerApi(BOB_MNEMONIC);

  console.log("===Init Api Objects");
  await regionApi.initApi();
  await operatorApi.initApi();
  await managerApi.initApi();

  console.log("===createRegion");
  await regionApi.createRegion({signer: regionApi.account, code: "US", name: "United State", description: "US Region"});
  console.log("===createOperator");
  await operatorApi.createOperator({operatorAccount: operatorApi.account, name:"Crust", description: "Crust Network", websiteUrl: "https://crust.network"});
  console.log("===registerManager");
  await managerApi.registerManager({managerAccount: managerApi.account, hostAddress:"127.0.0.1",managerPort:100,trackerPort:200,chainAPIPort:1337, chainRPCPort:26657});
  console.log("===bindOperatorManagerAccount");
  await operatorApi.bindOperatorManagerAccount({operatorAccount: operatorApi.account, managerAccount: managerApi.account, managerSignature: Buffer.from("FakeSign"), forceUnbind: true});
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

main().catch(console.error);