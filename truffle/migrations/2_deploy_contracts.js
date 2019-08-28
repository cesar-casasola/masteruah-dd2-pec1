var RCC = artifacts.require("RCC.sol");
var RccDao = artifacts.require("RccDao.sol");

module.exports = function(deployer) { 
  deployer.deploy(RCC).then(function(){
    return deployer.deploy(RccDao,RCC.address); 
  })     
};
