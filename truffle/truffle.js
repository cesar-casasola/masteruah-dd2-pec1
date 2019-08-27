module.exports = {
    networks: {
          ganache: {
              host: "localhost",
              port: 7545,
              network_id: "5777" // Match any network id
            }
          },
          rinkeby: {
               host: "localhost", // Connect to geth on the specified
               port: 8545,
               from: "0xcc96735af99781e494bcbef3d90825b6fecb7327",
               network_id: 4               
          }

};
