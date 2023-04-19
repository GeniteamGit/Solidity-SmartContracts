const HDWalletProvider = require('@truffle/hdwallet-provider');
const fs = require('fs');
const mnemonic = fs.readFileSync(".secret").toString().trim();

module.exports = {
    // Uncommenting the defaults below
    // provides for an easier quick-start with Ganache.
    // You can also follow this format for other networks.
    // See details at: https://trufflesuite.com/docs/truffle/reference/configuration
    // on how to specify configuration options!
    //
    networks: {
        development: {
            host: "127.0.0.1",     // Localhost (default: none)
            port: 8545,            // Standard Ethereum port (default: none)
            network_id: "*",       // Any network (default: none)
            gas: 6721975,   // gas price for Ganache testnet
            gasPrice: 20000000000
        },
        rinkeby: {
            provider: () => new HDWalletProvider(mnemonic, `wss://rinkeby.infura.io/ws/v3/xxxxxxxxxxxxxxxxxxxxx`),
            network_id: 4,       // Rinkeby's id
            gas: 5500000,        // Rinkeby has a lower block limit than mainnet
            confirmations: 2,    // # of confs to wait between deployments. (default: 0)
            timeoutBlocks: 200,  // # of blocks before a deployment times out  (minimum/default: 50)
            skipDryRun: true     // Skip dry run before migrations? (default: false for public nets )
        },
        //  test: {
        //    host: "127.0.0.1",
        //    port: 7545,
        //    network_id: "*"
        //  }
        //},
        //
        // Truffle DB is currently disabled by default; to enable it, change enabled:
        // false to enabled: true. The default storage location can also be
        // overridden by specifying the adapter settings, as shown in the commented code below.
        //
        // NOTE: It is not possible to migrate your contracts to truffle DB and you should
        // make a backup of your artifacts to a safe location before enabling this feature.
        //
        // After you backed up your artifacts you can utilize db by running migrate as follows:
        // $ truffle migrate --reset --compile-all
        //
        // db: {
        // enabled: false,
        // host: "127.0.0.1",
        // adapter: {
        //   name: "sqlite",
        //   settings: {
        //     directory: ".db"
        //   }
        // }
    },
    compilers: {
        solc: {
            version: "0.8.8",    // Fetch exact version from solc-bin (default: truffle's version)
            // docker: true,        // Use "0.5.1" you've installed locally with docker (default: false)
            // settings: {          // See the solidity docs for advice about optimization and evmVersion
            optimizer: {
                enabled: true,
                runs: 200
            },
            //  evmVersion: "byzantium"
            // }
        }
    },
    plugins: ['truffle-plugin-verify'],
    api_keys: {
        etherscan: 'XXXXXXXXXXXXXXXXXXXXXXX'
    }
};
