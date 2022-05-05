//SPDX-License-Identifier: Unlicense
pragma solidity ^0.8.0;

import "hardhat/console.sol";

contract Greeter {
    string private greeting;
    event eventname(address addressname,uint value,string stringname);
    event push_transaction_contract_event(address addressname,string name,string addressfinal,string mobileno);
    event finalevent(address addressname,uint finalvalue);
    constructor(string memory _greeting) {
        console.log("Deploying a Greeter with greeting:", _greeting);
        greeting = _greeting;
    }
    function finalhost() public
    {
        emit eventname(msg.sender,2,'bala');
    }
    function push_transaction_contract(string memory namefinal,string memory addressfinal,string memory mobilenofinal) public 
    {
        emit push_transaction_contract_event(msg.sender,namefinal,addressfinal,mobilenofinal);
    }
    function setfinalfunction(uint finalvalue) public 
    {
         emit finalevent(msg.sender,finalvalue);
    }
    function setGreeting(string memory _greeting) public {
        console.log("Changing greeting from '%s' to '%s'", greeting, _greeting);
        greeting = _greeting;
    }
    function getaddressfinal() public pure returns(string memory finalvalue) 
    {
        return 'jkdfghsdjkhg';
    }
    
}
