// SPDX-License-Identifier: MIT
pragma solidity ^0.8.8;

import "@openzeppelin/contracts/access/Ownable.sol";
import "@openzeppelin/contracts/utils/Strings.sol";
import "@openzeppelin/contracts/token/ERC1155/ERC1155.sol";

contract Skins is ERC1155, Ownable {
    using Strings for uint256;

    string public name;
    string public symbol;
    string private baseURI;

    mapping(uint256 => bool) public validSkinTypes;

    constructor(
        string memory _name,
        string memory _symbol,
        string memory _baseURI
    ) ERC1155(_baseURI) {
        name = _name;
        symbol = _symbol;
        baseURI = _baseURI;
        validSkinTypes[0] = true;
        validSkinTypes[1] = true;
        validSkinTypes[2] = true;
    }

    function mintBatch(uint256[] memory ids, uint256[] memory amounts) external onlyOwner {
        _mintBatch(owner(), ids, amounts, "");
    }

    function addSkinType(uint256 skinId) external onlyOwner {
        require(
            !validSkinTypes[skinId],
            "Skin type already exists"
        );
        validSkinTypes[skinId] = true;
    }

    function uri(uint256 typeId) public view override returns (string memory) {
        require(
            validSkinTypes[typeId],
            "URI requested for invalid serum type"
        );
        return bytes(baseURI).length > 0 ? string(abi.encodePacked(baseURI, typeId.toString(), ".json")) : baseURI;
    }
}
