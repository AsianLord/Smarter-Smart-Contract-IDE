# Smarter Smart Contract IDE

## Setup Instructions

1. Clone the Smarter Smart Contract IDE onto your local machine:
    ```sh
    git clone "https://github.com/AsianLord/Smarter-Smart-Contract-IDE.git"
    ```

2. Navigate to the Smarter Smart Contract directory and then link the plugins to yarn by entering into the terminal:
    ```sh
    yarn link
    ```

3. Make sure Node.js is installed. Check with the command:
    ```sh
    node -v
    ```

4. If yarn isn't already installed, execute the command in the terminal:
    ```sh
    npm install -g yarn
    ```

5. Navigate to your chosen project directory.

6. If your directory isn't a Hardhat project already, add Hardhat with the commands:
    ```sh
    yarn add hardhat
    yarn hardhat
    ```

7. Then, using the arrow keys, choose either a JavaScript project or an empty project.

8. Make a `contracts` folder relative to the root of the project directory:
    ```sh
    mkdir contracts
    ```
    This will house all the contracts you generate from the Smarter Smart Contract IDE.

9. Install Solhint with the command:
    ```sh
    yarn add solhint
    ```

10. Link the Smarter Smart Contract IDE with the command:
    ```sh
    yarn link "smarter-smart-contract-ide"
    ```

Now you're ready to use the Smarter Smart Contract IDE!

## Using the IDE

### Commands

To generate an ERC-20 token skeleton contract:
```sh
yarn hardhat generate-erc20 --name ExampleName --symbol ExampleSymbol
```

To generate a DAO skeleton contract:
```sh
yarn hardhat generate-erc721 --name ExampleName --symbol ExampleSymbol
```

To generate an ERC-20 token skeleton contract:
```sh
yarn hardhat generate-dao --name ExampleName
```

To run an audit on a specific smart contract:
```sh
yarn hardhat audit --file contracts/ExampleFileName.sol
```
