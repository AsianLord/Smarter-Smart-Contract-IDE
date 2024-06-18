const erc1155Skeleton = `
// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import "@openzeppelin/contracts/token/ERC1155/ERC1155.sol";

contract MyERC1155Token is ERC1155 {
    constructor(string memory uri) ERC1155(uri) {
        // Optional constructor logic
    }
}
`
module.exports = { erc1155Skeleton };