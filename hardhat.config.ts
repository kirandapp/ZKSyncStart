// require("@matterlabs/hardhat-zksync-deploy");
// require("@matterlabs/hardhat-zksync-solc");

// module.exports = {
//   zksolc: {
//     version: "0.1.0",
//     compilerSource: "binary",
//     settings: {
//       optimizer: {
//         enabled: true,
//       },
//       experimental: {
//         dockerImage: "matterlabs/zksolc",
//       },
//     },
//   },
//   zkSyncDeploy: {
//     zkSyncNetwork: "https://zksync2-testnet.zksync.dev",
//     ethNetwork: "goerli", // Can also be the RPC URL of the network (e.g. `https://goerli.infura.io/v3/<API_KEY>`)
//   },
//   networks: {
//     hardhat: {
//       zksync: true,
//     },
//   },
//   solidity: {
//     version: "0.8.10",
//   },
// };
import "@matterlabs/hardhat-zksync-toolbox";

import "@matterlabs/hardhat-zksync-deploy";
import "@matterlabs/hardhat-zksync-solc";

module.exports = {
  zksolc: {
    version: "1.3.7",
    compilerSource: 'binary',
    settings: {
        isSystem: false, 
        optimizer: {
            enabled: true,
            mode: '3',
        },
        compilerPath: '',
        experimental: {},
    },
  },
  defaultNetwork: "zkTestnet",
  // networks: {
  //   goerli: {
  //     url: "https://goerli.infura.io/v3/3d7823916ffa4e96a260cd712e1a8806" // URL of the Ethereum Web3 RPC (optional)
  //   },
  //   zkTestnet: {
  //     url: "https://testnet.era.zksync.dev", // URL of the zkSync network RPC
  //     ethNetwork: "goerli", // URL of the Ethereum Web3 RPC, or the identifier of the network (e.g. `mainnet` or `goerli`)
  //     zksync: true
  //   }
  // },
  networks: {
    zkTestnet: {
      url: "https://zksync2-testnet.zksync.dev", // URL of the zkSync network RPC
      ethNetwork: "goerli", // Can also be the RPC URL of the Ethereum network (e.g. `https://goerli.infura.io/v3/<API_KEY>`)
      zksync: true,
    },
  },
  solidity: {
    version: "0.8.17",
  },
};