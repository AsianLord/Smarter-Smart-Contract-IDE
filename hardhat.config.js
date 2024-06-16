/** @type import('hardhat/config').HardhatUserConfig */
require("@nomiclabs/hardhat-waffle");
require("./src/index");
require("./src/erc20");
require("./src/audit");
require("./src/generateCode")

module.exports = {
  solidity: "0.8.4",
  networks: {
    hardhat: {},
  },
  solidityCoverage: {
    // Options for solidity-coverage
    path: 'coverage',
    defaultBrowser: false,
    istanbulFolder: 'coverage',
    skipFiles: ['test', 'Migrations.sol'],
  },
};
