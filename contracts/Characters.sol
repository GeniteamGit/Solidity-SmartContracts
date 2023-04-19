// SPDX-License-Identifier: MIT
pragma solidity ^0.8.8;

import "@openzeppelin/contracts/utils/Counters.sol";
import "@openzeppelin/contracts/access/Ownable.sol";
import "@openzeppelin/contracts/token/ERC721/extensions/ERC721URIStorage.sol";

contract Characters is ERC721URIStorage, Ownable {
    using Strings for uint256;
    using Counters for Counters.Counter;
    Counters.Counter private _tokenIds;

    constructor(
        string memory _name,
        string memory _symbol
    ) ERC721(_name, _symbol) {}

    function mint(string memory _tokenURI, string memory _secretKey) public returns (uint256){
        require(
            verifySecret(_secretKey),
            "Invalid secret key."
        );
        _tokenIds.increment();
        uint256 newItemId = _tokenIds.current();
        _safeMint(msg.sender, newItemId);
        _setTokenURI(newItemId, _tokenURI);

        return newItemId;
    }

    function verifySecret(string memory _secretKey) public view returns (bool) {
        bytes32 _hash = xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx;
        return (sha256(abi.encodePacked(_secretKey)) == _hash);
    }

    function tokenCount() public view virtual returns (uint256) {
        return _tokenIds.current();
    }
}