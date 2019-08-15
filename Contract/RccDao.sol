pragma solidity ^0.5.1;

import "./RCC.sol";

contract RcDao {
    
    address owner;
    
    constructor() public {
        owner = msg.sender;
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
        
        
        Associated memory associated = _associated[_address]; 
        
        associated.id = block.timestamp;
        associated.name = name;
        associated.ref = ref;
        associated.minter = minter;
        associated.supply = supply;
        
        // Se añade el asociado a la tabla de asociados
        _associatedList.push(_address);
        
        // Se añade como Minter al nuevo asociado
        if (minter){
            RCC(_address).addMinter(_address);
        }
        
    }
    
    function disableAssociated(address _address) onlyOwner public returns (bool) {
        
        require(!_associated[_address].enabled, "Associated is already disabled.");
        _associated[_address].enabled = false;
        
        // Se elimina la propiedad de Minter al asociado
        if (_associated[_address].minter){
            RC(_address).renounceMinter();
        }
         
        return true;
    }
    
     function enabledAssociated(address _address) onlyOwner public returns (bool) {
        
        require(_associated[_address].enabled, "Associated is already enabled.");
        _associated[_address].enabled = true;
         
        return true;
    }
    
    function getAssociattedList() view public returns (address[] memory) {
        return _associatedList;
    }
    
    function askSupply(address _address, uint amount) public returns (bool) {
        if (_associated[_address].minter){
            RCC(_address).approve(msg.sender,amount);
        }
    }
    
}
