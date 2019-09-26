module.exports = {
    contracts_build_directory: "../angular/src/assets/contracts_ganache",
    networks: {
          ganache: {
              host: "localhost",
              port: 7545,
              network_id: "5777", 
              from: "0xb253e4fCe8122904072a7EcB464030A0C141D064",            
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
