pragma solidity ^0.5.1;

import "openzeppelin-solidity/contracts/token/ERC20/ERC20.sol";
import "openzeppelin-solidity/contracts/token/ERC20/ERC20Mintable.sol";

contract RCC is ERC20, ERC20Mintable  {

	string public name = "Recycling Coin";
	string public symbol = "RCC";
	uint8 public decimals = 4;
	uint public INITIAL_SUPPLY = 1000000;

	// Variable necesaria para proporcionar al contrato llamante la propiedad de Minter. Solo así podrá llamarse al método AddMinter desde el contrato RccDao 
	bool _activate;
	address owner;

	 modifier onlyOwner {
        require(owner == msg.sender);
        _;
    }
	constructor() public {
	  _mint(msg.sender, INITIAL_SUPPLY);
	  _activate = false;
	  owner = msg.sender;
	}

	// Método para añadir como Minter a la dirección llamante solo una vez
	function activate(address _address) onlyOwner public {
        if (!_activate){
            addMinter(_address);
            _activate = true;
        }
    }

	// Método para comprobar si está activada la propiedad de Minter sobbre el contrato. Evita una llamada activate con coste de gas.
	function isActivate() view public returns (bool) {
         return _activate;
    }


}