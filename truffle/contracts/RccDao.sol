pragma solidity ^0.5.1;

import "./RCC.sol";
import "./Pausable.sol";

// Contrato de gestión de la moneda de Reciclaje: ReCycling Coin: RCC
contract RccDao is Pausable{
    
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
    
    // Contrato de tipo RCC
    RCC rcc;

    // Contador para el control de los eventos de apetición y probación de la criptomoneda
    uint eventId;
    
    // En el contructor se proporciona el acceso al contrato de RCC que mantiene las cuentas de usuarios de RCC a través de la clase abstracta ERC20 de OpenZeppeling
    constructor(address rcc_address) public {
        eventId = 0;
        owner = msg.sender;
        rcc = RCC(rcc_address);
    }

    // Estructura con la información de cada cuenta asociada
    struct Associated {
        string name;
        bool enable;
        string ref ;
        bool minter;
    }
 
    // Cada Asociado tiene su dirección con la que opera sobre el contrato
    mapping (address => Associated) _associated;

    
    // Lista completa de asociados.
    address[] internal _associatedList;

    // Método para dar de alta una cuenta asociada. Solo el propietario del contrato podrá invocarlo
    function newAssociated(address _address, string memory name, string memory ref, bool minter) onlyOwner whenNotPaused public {

        // Primero hay que comprobar que el assoiciado ya existe
        require(!_associated[_address].enable, "Associated already exist.");
        //if(_associated[_address].enable == true) revert();

        //Creamos un nuevo asociado
        Associated storage associated = _associated[_address];
        associated.name = name;
        associated.ref = ref;
        associated.minter = minter;
        associated.enable = true;

        // Se añade el asociado a la tabla de asociados
        _associatedList.push(_address);

        // Se añade como Minter al nuevo asociado
        if (minter){
            rcc.addMinter(_address);
        }
    }

    //Método para desactivar una cuenta de Asociado. El Propietario del contrato es el único que puede activar o desactivar
    function disableAssociated(address _address) onlyOwner whenNotPaused public returns (bool) {

        require(_associated[_address].enable, "Associated is already disabled.");
        _associated[_address].enable = false;

        return true;
    }
    // Método para volver a activar una cuenta de Asociado. El Propietario del contrato es el único que puede activar o desactivar
    function enableAssociated(address _address) onlyOwner whenNotPaused public returns (bool) {

        require(!_associated[_address].enable, "Associated is already enabled.");
        _associated[_address].enable = true;

        return true;
    }

    // Método de lectura de la lista de cuentas asociadas
    function getAssociatedList() view public returns (address[] memory) {
        return _associatedList;
    }
    
    // Método para obtener la información de una cuenta asociada.
    function getAssociated(address _address ) view public returns (string memory name, bool enable, string memory ref, bool minter) {
        //require(!_associated[_address].enable, "Associated is already disabled.");
        return (_associated[_address].name, _associated[_address].enable, _associated[_address].ref, _associated[_address].minter);
    }
    
    // Método de petición de una cantidad de moneda RCC. Solo podrá pedirse a las Cuentas Asociadas de tipo minter
    function ask(address _address, uint amount, string memory message ) public whenNotPaused returns (bool) {

        if (_associated[_address].minter && _associated[_address].enable){
            eventId = eventId + 1;
            emit Ask(eventId, msg.sender, _address, amount, message);
            return true;
        }
        else{
            return false;
        }
    }

    // Método para controlar si una petición de moneda RCC se ha llevado a cabo.
    function approve(uint id, address _address, uint amount, string memory message ) public whenNotPaused returns (bool) {
        if (_associated[msg.sender].minter && _associated[msg.sender].enable){
            rcc.approve(_address, amount);
            emit Approve(id, _address, msg.sender, amount, message);
            return true;
        }
        else{
            return false;
        }
    }

}