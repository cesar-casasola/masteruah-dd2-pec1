module.exports = {
    contracts_build_directory: "../angular/src/assets/contracts",
    networks: {
          ganache: {
              host: "localhost",
              port: 7545,
              network_id: "5777",              
            }
          ,
          rinkeby: {
               host: "localhost", // Connect to geth on the specified
               port: 8545,
               from: "0xcf757ac9610b264aa967832c93a0e9ccc5f99d8e",
               network_id: 4,
               gas: 4612388, // Gas limit used for deploys      
          }
        }

};
