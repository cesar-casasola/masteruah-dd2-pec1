pragma solidity ^0.5.1;

import "https://github.com/OpenZeppelin/openzeppelin-contracts/blob/master/contracts/token/ERC20/ERC20.sol";
import "https://github.com/OpenZeppelin/openzeppelin-contracts/blob/master/contracts/token/ERC20/ERC20Mintable.sol";

contract RCC is ERC20, ERC20Mintable  {

	string public name = "Recycling Coin";
	string public symbol = "RCC";
	uint8 public decimals = 1;
	uint public INITIAL_SUPPLY = 1000000;

	constructor() public {
	  _mint(msg.sender, INITIAL_SUPPLY);
	}
}
