const erc777Skeleton = `
// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import "@openzeppelin/contracts/token/ERC777/ERC777.sol";

contract MyERC777Token is ERC777 {
    constructor(
        uint256 initialSupply,
        address[] memory defaultOperators,
        string memory name,
        string memory symbol
    ) ERC777(name, symbol, defaultOperators) {
        _mint(msg.sender, initialSupply, "", "");
    }
}
`
module.exports = { erc777Skelton };