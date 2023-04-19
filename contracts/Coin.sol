// SPDX-License-Identifier: MIT
pragma solidity ^0.8.8;

import "@openzeppelin/contracts/token/ERC20/ERC20.sol";
import "@openzeppelin/contracts/access/Ownable.sol";
import "./utils/SafeMath.sol";

contract Coin is ERC20, Ownable {
    using SafeMath for uint256;

    string private NAME;
    string private SYMBOL;
    // as per ERC20, default DECIMALS is 18
    uint8 private DECIMALS = 18;

    event Burned(address addr, uint256 amount);

    constructor(
        string memory _name,
        string memory _symbol,
        uint8 _decimals,
        uint256 _initialSupply
    )
    ERC20(_name, _symbol)
    {
        NAME = _name;
        SYMBOL = _symbol;
        DECIMALS = _decimals;
        _mint(msg.sender, _initialSupply * 10 ** DECIMALS);
    }

    function mint(uint256 amount) external onlyOwner {
        _mint(msg.sender, amount);
    }

    function decimals() public view virtual override returns (uint8) {
        return DECIMALS;
    }
}
