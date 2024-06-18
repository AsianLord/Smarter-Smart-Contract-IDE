const erc223Skeleton = `
// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import "@openzeppelin/contracts/token/ERC223/ERC223.sol";

contract MyERC223Token is ERC223 {
    constructor(string memory name, string memory symbol, uint8 decimals, uint256 totalSupply) ERC223(name, symbol, decimals, totalSupply) {
        // Optional constructor logic
    }
}
`

module.exports = { erc223Skeleton };