const NFT = artifacts.require("MarketplaceNFT");
const Marketplace = artifacts.require("Marketplace");

contract("Marketplace", accounts => {
    const secretKey = "xxxxxxxxxxxxx", nftJSON = "xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx";
    let nft, marketplace;

    beforeEach(async () => {
        // runs before all tests in this file regardless where this line is defined.
        nft = await NFT.deployed();
        marketplace = await Marketplace.deployed();
    });

    it("should fail with invalid secret key", async () => {
        let errorMessage = "";
        try {
            // create/mint nft
            await nft.mint(
                nftJSON,
                "randomInvalidSecretKey"
            );
        } catch (e) {
            errorMessage = e.reason;
        }
        assert.equal(
            errorMessage,
            "Invalid secret key.",
            "Error occurred"
        );
    });
    it("should mint 1 NFT", async () => {
        let nftBalance = 0;
        try {
            // create/mint nft
            await nft.mint(nftJSON, secretKey);
            // balance of account
            nftBalance = await nft.balanceOf(accounts[0]);
        } catch (e) {
            console.log('Error', e);
        }

        assert.equal(
            nftBalance.toString(),
            "1",
            "Error occurred"
        );
    });
    it("should mint and sell 1 NFT", async () => {
        let nftBalance = 0;
        try {
            // create/mint nft
            await nft.mint(nftJSON, secretKey);
            // set approval to marketplace for all assets of the user
            await nft.setApprovalForAll(Marketplace.address, true);
            // list for sale on marketplace
            await marketplace.makeListing(nft.address, 1, web3.utils.toWei("1", "ether"));

            // buy from account 1
            await marketplace.fillListing(1, {from: accounts[1], value: web3.utils.toWei("1", "ether")});

            // account 1 should have 1 nft in their wallet
            nftBalance = await nft.balanceOf(accounts[1], {from: accounts[1]});
        } catch (e) {
            console.log('Error', e);
        }

        assert.equal(
            nftBalance.toString(),
            "1",
            "Error occurred"
        );
    });

});