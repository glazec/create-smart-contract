# Create Smart Contract

![downloads](https://img.shields.io/npm/dt/create-smart-contract)

![create-smart-contract](https://socialify.git.ci/glazec/create-smart-contract/image?description=1&descriptionEditable=Set%20up%20ethereum%20smart%20contract%20development%20environment%20with%20one%20command.&font=Inter&forks=1&language=1&owner=1&pattern=Floating%20Cogs&stargazers=1&theme=Light)

## Quick start

```bash
npx create-smart-contract my-contract
```

## What is included?

This scaffold installs and configures some useful frameworks and packages.

## Included frameworks and its plugins

- [truffle](https://www.npmjs.com/package/truffle)
  - [@truffle/hdwallet-provider](https://www.npmjs.com/package/@truffle/hdwallet-provider)
  - [eth-gas-reporter](https://www.npmjs.com/package/eth-gas-reporter)
  - [solidity-coverage](https://www.npmjs.com/package/solidity-coverage)
  - [truffle-assertions](https://www.npmjs.com/package/truffle-assertions)
- [hardhat](https://www.npmjs.com/package/hardhat)
  - [ @nomiclabs/hardhat-ethers](https://www.npmjs.com/package/@nomiclabs/hardhat-ethers)
  - [@nomiclabs/hardhat-truffle5](https://www.npmjs.com/package/@nomiclabs/hardhat-ethers)
  - [@nomiclabs/hardhat-waffle](https://www.npmjs.com/package/@nomiclabs/hardhat-waffle)
  - [@nomiclabs/hardhat-web3](https://www.npmjs.com/package/@nomiclabs/hardhat-web3)

## Included packages

- [ethers](https://www.npmjs.com/package/ethers)
- [@openzeppelin/contracts](https://www.npmjs.com/package/@openzeppelin/contracts)
- [chai](https://www.npmjs.com/package/chai)
- [solidity-docgen](https://www.npmjs.com/package/solidity-docgen)
- [mocha](https://www.npmjs.com/package/mocha)
- [prettier](https://www.npmjs.com/package/prettier)
- [prettier-plugin-solidity](https://www.npmjs.com/package/prettier-plugin-solidity)
- [solc](https://www.npmjs.com/package/solc)
- [web3](https://www.npmjs.com/package/web3)
- [ethereum-waffle](https://www.npmjs.com/package/ethereum-waffle)

## Configuration file

- .gitignore
- .prettierrc
- hardhat.config.js
- slither.config.json
- solcover.js
- truffle-config.js

## npm scripts

- `npm run test`: Run tests under `/test` folder.
- `npm run doc`: Generate docs based on [doxygen](https://docs.soliditylang.org/en/v0.8.0/natspec-format.html).
- `npm run coverage`: Generate code coverage configured by `.solcover.js`
- `npm run analyze` Static analyze smart contracts configured by `slither.config.json`._Notice:You need install [Slither](https://github.com/crytic/slither#how-to-install) by yourself_
