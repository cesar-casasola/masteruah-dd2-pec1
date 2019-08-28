pragma solidity ^0.5.1;

import "./RCC.sol";

// Contrato de gestión de la moneda de Reciclaje: ReCycling Coin: RCC
contract RccDao {

    // Evento para llevar a cabo una petición de RCC a las cuentas asociadas.
    event Ask(
        uint indexed  id,
        address indexed  ask_address,
        address indexed  associatted_address,
        uint amount,
        string message
    );

    // Evento para llevar el control de las peticiones aprovadas por parte de las cuentas asociadas.
    event Approve(
        uint indexed  id,
        address indexed  ask_address,
        address indexed  associatted_address,
        uint amount,
        string message
    );

    address owner;

    // Contrato de tipo RCC
    RCC rcc;
    
    // En el contructor se proporciona el acceso al contrato de RCC que mantiene las cuentas de usuarios de RCC a través de la clase abstracta ERC20 de OpenZeppeling
    constructor(address rcc_address) public {
        owner = msg.sender;
        rcc = RCC(rcc_address);             
    }

    
    
    modifier onlyOwner {
        require(owner == msg.sender);
        _;
    }
    
    // Estructura con la información de cada cuenta asociada
    struct Associated {
        string name;
        bool enabled;
        string ref ;    
        bool minter;
    }    
    
 
    // Cada Asociado tiene su dirección con la que opera sobre el contrato
    mapping (address => Associated) _associated;

    
    // Lista completa de asociados.
    address[] internal _associatedList;
        

    // Método para dar de alta una cuenta asociada. Solo el propietario del contrato podrá invocarlo
    function newAssociated(address _address, string memory name, string memory ref, bool minter) onlyOwner public {
    
        // Primero hay que comprobar que el assoiciado ya existe
        if(_associated[_address].enabled) revert(); 
        
        
        //Creamos un nuevo asociado
        Associated storage associated = _associated[_address];                 
        associated.name = name;
        associated.ref = ref;
        associated.minter = minter;        
        
        // Se añade el asociado a la tabla de asociados
        _associatedList.push(_address);
        
        // Se añade como Minter al nuevo asociado
        if (minter){
            rcc.addMinter(_address);            
        }
        
    }
    
    //Método para desactivar una cuenta de Asociado. El Propietario del contrato es el único que puede activar o desactivar
    function disableAssociated(address _address) onlyOwner public returns (bool) {
        
        require(!_associated[_address].enabled, "Associated is already disabled.");
        _associated[_address].enabled = false;
        
        // Se elimina la propiedad de Minter al asociado
        if (_associated[_address].minter){
            rcc.renounceMinter();
        }
         
        return true;
    }
    // Método para volver a activar una cuenta de Asociado. El Propietario del contrato es el único que puede activar o desactivar
    function enabledAssociated(address _address) onlyOwner public returns (bool) {
        
        require(_associated[_address].enabled, "Associated is already enabled.");
        _associated[_address].enabled = true;
         
        return true;
    }
    
    // Método de lectura de la lista de cuentas asociadas
    function getAssociatedList() view public returns (address[] memory) {
        return _associatedList;
    }
    
    // Método para obtener la información de una cuenta asociada.
    function getAssociated(address _address ) view public returns (string memory name, bool enabled, string memory ref, bool minter) {
        require(!_associated[_address].enabled, "Associated is already disabled.");
        return (_associated[_address].name, _associated[_address].enabled, _associated[_address].ref, _associated[_address].minter);
    }
    
    // Método de petición de una cantidad de moneda RCC. Solo podrá pedirse a las Cuentas Asociadas de tipo minter
    function ask(uint id, address _address, uint amount, string memory message ) public returns (bool) {        
        if (_associated[_address].minter && _associated[_address].enabled){
            emit Ask(id, msg.sender, _address, amount, message);
        }
    }

    // Método para controlar si una petición de moneda RCC se ha llevado a cabo.
    function approve(uint id, address _address, uint amount, string memory message ) public returns (bool) {
        if (_associated[_address].minter && _associated[_address].enabled){         
            rcc.approve(_address, amount);
            emit Approve(id, msg.sender, _address, amount, message);
        }
    }
    
}