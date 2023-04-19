const Coin = artifacts.require("Coin");

module.exports = async function (deployer, network) {
    const decimals = 18;
    deployer.then(async () => {
        await deployer.deploy(
            Coin,
            "SFW Token", // name
            "SFWT", // symbol,
            decimals, // decimals
            1, // initial supply
            100, // cap
        );
    });
};