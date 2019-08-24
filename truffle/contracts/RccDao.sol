pragma solidity ^0.5.1;

import "./RCC.sol";

contract RccDao {
    
    address owner;
    RCC rcc;
    
    constructor(address rcc_address) public {
        owner = msg.sender;
        rcc = RCC(rcc_address);        
    }
    
    modifier onlyOwner {
        require(owner == msg.sender);
        _;
    }
    
    struct Associated {
        uint id;
        string name;
        bool enabled;
        string ref ;
        bool supply;
        bool minter;
    }
    
 
    // Cada Asociado tiene su dirección con la que opera sobre la DAO
    mapping (address => Associated) _associated;

    
    // Necesario para obtener la lista completa de asociados.
    address[] internal _associatedList;
    
    function newAssociated(address _address, string memory name, string memory ref, bool minter, bool supply) onlyOwner public {
    
        // Primero hay que comprobar que el assoiciado ya existe
        
        
        Associated storage associated = _associated[_address]; 
        
        associated.id = block.timestamp;
        associated.name = name;
        associated.ref = ref;
        associated.minter = minter;
        associated.supply = supply;
        
        // Se añade el asociado a la tabla de asociados
        _associatedList.push(_address);
        
        // Se añade como Minter al nuevo asociado
        if (minter){
            rcc.addMinter(_address);            
        }
        
    }
    
 
    function disableAssociated(address _address) onlyOwner public returns (bool) {
        
        require(!_associated[_address].enabled, "Associated is already disabled.");
        _associated[_address].enabled = false;
        
        // Se elimina la propiedad de Minter al asociado
        if (_associated[_address].minter){
            rcc.renounceMinter();
        }
         
        return true;
    }
    
     function enabledAssociated(address _address) onlyOwner public returns (bool) {
        
        require(_associated[_address].enabled, "Associated is already enabled.");
        _associated[_address].enabled = true;
         
        return true;
    }
    
    function getAssociatedList() view public returns (address[] memory) {
        return _associatedList;
    }
    
    function getAssociated(address _address ) view public returns (uint id, string memory name, bool enabled, string memory ref, bool supply, bool minter) {
        require(!_associated[_address].enabled, "Associated is already disabled.");
        return (_associated[_address].id, _associated[_address].name, _associated[_address].enabled, _associated[_address].ref, _associated[_address].supply, _associated[_address].minter);
    }
    
    
    function askSupply(address _address, uint amount) public returns (bool) {
        if (_associated[_address].minter){
            rcc.approve(msg.sender,amount);
        }
    }
    
}