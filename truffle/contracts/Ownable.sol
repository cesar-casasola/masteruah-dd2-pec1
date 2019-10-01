pragma solidity ^0.5.1;

contract Ownable {
    
    address owner;

    modifier onlyOwner {
        require(owner == msg.sender);
        _;
    }
}