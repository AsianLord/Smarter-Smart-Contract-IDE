const erc621Skeleton = `
// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import "@openzeppelin/contracts/token/ERC621/ERC621.sol";

contract MyERC621Token is ERC621 {
    constructor(string memory name, string memory symbol, uint256 initialSupply) ERC621(name, symbol, initialSupply) {
        // Optional constructor logic
    }
}
`

module.exports = { erc621Skeleton };