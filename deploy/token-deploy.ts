import fs from "fs"
import { utils, Wallet } from "zksync-web3";
import * as ethers from "ethers";
import { HardhatRuntimeEnvironment } from "hardhat/types";
import { Deployer } from "@matterlabs/hardhat-zksync-deploy";

const PRIV_KEY = fs.readFileSync(".secret").toString()

// An example of a deploy script that will deploy and call a simple contract.
export default async function (hre: HardhatRuntimeEnvironment) {
  console.log(`Running deploy script for the TOKEN contract`);

  // Initialize the wallet.
  const wallet = new Wallet(PRIV_KEY);
  console.log("1");

  // Create deployer object and load the artifact of the contract we want to deploy.
  const deployer1 = new Deployer(hre, wallet);
  console.log("2");
  const artifact = await deployer1.loadArtifact("Token");
  console.log("3");
  const Contract = await deployer1.deploy(artifact);
  console.log("4");
  console.log("constructor args:" + Contract.interface.encodeDeploy());

  // Show the contract info.
  const contractAddress = Contract.address;
  console.log("5");
  console.log(`${artifact.contractName} was deployed to ${contractAddress}`);
  console.log("7");
  //Call the deployed contract.
  const ownerOfContract = await Contract.owner();
  console.log("Owner of the Contract :- ",ownerOfContract);
}