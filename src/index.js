const { task } = require("hardhat/config");
const { writeFileSync } = require("fs");
const { erc20Skeleton } = require("./erc20");
const { erc721Skeleton } = require("./erc721");
const { runSolhint } = require("./audit");
const { generateSmartContract } = require('./generateCode');

// console.log('erc20Skeleton:', erc20Skeleton); // Added this line for debugging

task("generate-erc20", "Generates an ERC-20 skeleton contract")
  .addParam("name", "The name of the ERC-20 token")
  .addParam("symbol", "The symbol of the ERC-20 token")
  .addParam("initialsupply", "The initial supply of the ERC-20 token")
  .setAction(async (taskArgs) => {
    console.log(taskArgs); // Log all received task arguments
    const { name, symbol, initialsupply } = taskArgs;
    console.log(name, symbol, initialsupply); // Log individual parameters

    // Check if erc20Skeleton is defined
    if (!erc20Skeleton) {
      throw new Error("erc20Skeleton is not defined");
    }

    const initialSupplyString = initialsupply.toString(); // Ensure it's a string
    const contractContent = erc20Skeleton
      .replace(/MyToken/g, name)
      .replace('"MyToken"', `"${name}"`)
      .replace('"MYT"', `"${symbol}"`)
      .replace("1000000", initialSupplyString);

    writeFileSync(`./contracts/${name}.sol`, contractContent);
    console.log(`ERC-20 contract ${name}.sol has been generated successfully!`);
  });

task("generate-erc721", "Generates an ERC-721 skeleton contract")
  .addParam("name", "The name of the ERC-721 token")
  .addParam("symbol", "The symbol of the ERC-721 token")
  .setAction(async (taskArgs) => {
    console.log(taskArgs); // Log all received task arguments
    const { name, symbol } = taskArgs;
    console.log(name, symbol); // Log individual parameters

    // Check if erc20Skeleton is defined
    if (!erc721Skeleton) {
      throw new Error("erc721Skeleton is not defined");
    }

    const contractContent = erc721Skeleton
      .replace(/MyToken/g, name)
      .replace('name', `${name}`)
      .replace('symbol', `${symbol}`)

    writeFileSync(`./contracts/${name}.sol`, contractContent);
    console.log(`ERC-721 contract ${name}.sol has been generated successfully!`);
  });

task("audit", "Performs a security audit on smart contracts")
  .addOptionalParam("file", "The contract file to audit", "contracts/*.sol")
  .setAction(async ({ file }, hre) => {
    console.log(`Running Solhint on ${file}...`);
    try {
      const result = await runSolhint(file);
      console.log(result);
    } catch (error) {
      console.error(`Error running Solhint: ${error.message}`);
    }
  });

task('generate-contract', 'Generates a smart contract skeleton using generative AI')
  .addParam('type', 'The type of smart contract to generate')
  .setAction(async ({ type }) => {
    await generateSmartContract(type);
  });

task("coverage", "Runs solidity-coverage")
  .setAction(async (_, hre) => {
    try {
      await hre.run("clean"); // Clean up artifacts
      await hre.run("compile");
      await hre.run("solidity-coverage");
    } catch (error) {
      console.error(`Error running coverage: ${error.message}`);
      process.exit(1);
    }
  });


module.exports = {};
