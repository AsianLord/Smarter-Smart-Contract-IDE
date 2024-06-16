const erc721xSkeleton = `
// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import "@openzeppelin/contracts/token/ERC721/extensions/ERC721Enumerable.sol";
import "@openzeppelin/contracts/access/Ownable.sol";

contract MyERC721xToken is ERC721Enumerable, Ownable {
    constructor(string memory name, string memory symbol) ERC721(name, symbol) {
        // Optional constructor logic
    }
}
`
module.exports = { erc721xSkeleton };