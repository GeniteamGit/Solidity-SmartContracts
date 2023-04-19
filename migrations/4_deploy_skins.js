const Skins = artifacts.require("Skins");

module.exports = async function (deployer, network) {
    deployer.then(async () => {
        await deployer.deploy(
            Skins,
            "SFW Skins", // name
            "SFWS", // symbol
            "https://s3.amazonaws.com/geniteam.com/sfw-nfts-testing/", // base URI
        );
    });
};