pragma solidity ^0.5.1;


// Contrato de gestión de la moneda de Reciclaje: ReCycling Coin: RCC
contract TestRCC {

    // Evento para llevar a cabo una petición de RCC a las cuentas asociadas.
    event Ask(
        uint indexed id,
        address indexed  ask_address,
        address indexed  associatted_address,
        uint amount,
        string message
    );

    
    address owner;
   
    
    // En el contructor se proporciona el acceso al contrato de RCC que mantiene las cuentas de usuarios de RCC a través de la clase abstracta ERC20 de OpenZeppeling
    constructor() public {
        owner = msg.sender;       
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
        

    function getOwner() view public returns (address){
        return owner;
    }
            
    // Método de petición de una cantidad de moneda RCC. Solo podrá pedirse a las Cuentas Asociadas de tipo minter
    function ask(uint id, address _address, uint amount, string memory message) public returns (bool) {               
        emit Ask(id, msg.sender, _address, amount, message);     
        return true;
    }
    
}