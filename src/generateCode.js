const axios = require('axios');
const fs = require('fs');
const path = require('path');
require('dotenv').config({ path: path.resolve(__dirname, '../.env') });

async function callHuggingFaceApi(prompt) {
  const apiKey = process.env.HUGGINGFACE_API_KEY;

  if (!apiKey) {
    console.error('API key is not defined. Check your .env file.');
    return;
  }

  try {
    const response = await axios.post(
      'https://api-inference.huggingface.co/models/EleutherAI/gpt-neo-2.7B',
      {
        inputs: prompt,
      },
      {
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${apiKey}`,
        },
      }
    );

    const generatedText = response.data[0].generated_text.trim();
    return generatedText;
  } catch (error) {
    console.error('Error calling Hugging Face API:', error.message);
    return;
  }
}

async function generateSmartContract(type) {
  const prompts = {
    erc20: `Generate a complete ERC-20 token contract in Solidity, including the SPDX license identifier and necessary imports.
    Example:
    // SPDX-License-Identifier: MIT
    pragma solidity ^0.8.0;

    import "@openzeppelin/contracts/token/ERC20/ERC20.sol";

    contract MyToken is ERC20 {
        constructor(string memory name, string memory symbol, uint256 initialSupply) ERC20(name, symbol) {
            _mint(msg.sender, initialSupply);
        }
    }`
  };

  const prompt = prompts[type];
  if (!prompt) {
    console.error('Unsupported contract type.');
    return;
  }

  const contractCode = await callHuggingFaceApi(prompt);

  if (contractCode) {
    // Determine the project's contracts/ directory
    const contractsDir = path.join(process.cwd(), 'contracts');
    // Check the contracts directory exists
    if (!fs.existsSync(contractsDir)) {
      fs.mkdirSync(contractsDir);
    }

    const filePath = path.join(contractsDir, `${type.toUpperCase()}.sol`);

    try {
      // Write only the contract code to the file
      fs.writeFileSync(filePath, contractCode);
      console.log(`Generated ${type.toUpperCase()} Smart Contract and saved to ${filePath}`);
    } catch (error) {
      console.error('Error writing smart contract file:', error.message);
    }
  } else {
    console.error('Failed to generate smart contract code.');
  }
}

module.exports = {
  generateSmartContract,
};
