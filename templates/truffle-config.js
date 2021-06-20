const HDWalletProvider = require("@truffle/hdwallet-provider");
const Web3 = require("web3");

module.exports = {
    // Uncommenting the defaults below
    // provides for an easier quick-start with Ganache.
    // You can also follow this format for other networks;
    // see <http://truffleframework.com/docs/advanced/configuration>
    // for more details on how to specify configuration options!
    //
    networks: {
        development: {
            host: "127.0.0.1",
            port: 8545,
            network_id: "*",
        },
        kovan: {
            provider: () => new HDWalletProvider(``, `https://kovan.infura.io/v3/`),
            network_id: 42,       // Ropsten's id
            gas: 5500000,        // Ropsten has a lower block limit than mainnet
            confirmations: 2,    // # of confs to wait between deployments. (default: 0)
            timeoutBlocks: 200,  // # of blocks before a deployment times out  (minimum/default: 50)
            skipDryRun: true     // Skip dry run before migrations? (default: false for public nets )
        },
    },
    compilers: {
        solc: {
            version: "0.8.5", // ex:  "0.4.20". (Default: Truffle's installed solc)
            settings: {
                optimizer: {
                    enabled: false,
                    runs: 200
                }
            }
        },
    },
    plugins: ["solidity-coverage"],
    mocha: {
        reporter: 'eth-gas-reporter',
        reporterOptions: { excludeContracts: ['Migrations'] }
    },
    //
};
