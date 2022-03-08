require('dotenv').config()

const path = require("path");
const HDWalletProvider = require('@truffle/hdwallet-provider');


module.exports = {
  // See <http://truffleframework.com/docs/advanced/configuration>
  // to customize your Truffle configuration!
  compilers:{
    solc:{
      version: '0.8.12'
    },
  },
  api_keys: {
    polygonscan: process.env.POLYGON_SCAN_API_KEY,
  },
  plugins: ['truffle-plugin-verify'],
  contracts_build_directory: path.join(__dirname, "client/src/contracts"),
  networks: {
    dashboard: {
      port: 24012,
    },
    mumbai: {
      provider: () => new HDWalletProvider(process.env.ACCOUNT_MNEMONIC, `https://rpc-mumbai.maticvigil.com`),
      network_id: 80001,
      confirmations: 2,
      timeoutBlocks: 200,
      skipDryRun: true
    },
    develop: {
      port: 8545,
      host: '127.0.0.1',
      network_id: '*'
    }
  }
};
