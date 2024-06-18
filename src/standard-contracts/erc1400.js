const erc1400Skelton = `
// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import "@openzeppelin/contracts/token/ERC1400/ERC1400.sol";

contract MyERC1400Token is ERC1400 {
    constructor(
        string memory name,
        string memory symbol,
        uint256 granularity,
        address[] memory controllers
    ) ERC1400(name, symbol, granularity, controllers) {
        // Optional constructor logic
    }
}
`

module.exports = { erc1400Skelton };