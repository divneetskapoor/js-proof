// SPDX-License-Identifier: MIT
pragma solidity 0.8.18;

contract divneetburnmint {

    // declaring the state variables
    // these are linked with the smart contract
    string public tokenName = "divneettoken ";
    string public tokenAbbr = "DVT";
    uint public totalSupply = 1313;

    // balance mapping
    mapping(address => uint) public balances;

    function mint(address addr, uint amount) external {
        balances[addr] += amount;
        totalSupply += amount;
    }

    function burn(address addr, uint amount) external {
        if(balances[addr]>=amount && totalSupply > amount){
            balances[addr] -= amount;
            totalSupply -= amount;
        }
    }
}
