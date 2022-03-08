// SPDX-License-Identifier: MIT
pragma solidity ^0.8.12;

import "./ERC20.sol";

contract ERC20Factory {
  address public owner;

  constructor(){
    owner = msg.sender;
  }

  function createToken(string memory _name, string memory _symbol,uint _supply) public returns(address){
    ERC20 newToken = new ERC20(_name,_symbol,_supply);

    return address(newToken);
  }

}
