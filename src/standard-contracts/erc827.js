const erc827Skeleton = `
// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import "@openzeppelin/contracts/token/ERC827/ERC827.sol";

contract MyERC827Token is ERC827 {
    constructor(string memory name, string memory symbol, uint8 decimals, uint256 initialSupply) ERC827(name, symbol, decimals, initialSupply) {
        // Optional constructor logic
    }
}
`

module.exports = { erc827Skeleton };