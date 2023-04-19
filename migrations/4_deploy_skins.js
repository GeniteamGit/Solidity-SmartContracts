const Skins = artifacts.require("Skins");

module.exports = async function (deployer, network) {
    deployer.then(async () => {
        await deployer.deploy(
            Skins,
            "Testing Token", // name
            "SOT", // symbol
            "#", // base URI
        );
    });
};