const Coin = artifacts.require("Coin");

module.exports = async function (deployer, network) {
    const decimals = 18;
    deployer.then(async () => {
        await deployer.deploy(
            Coin,
            "Some Token", // name
            "SOT", // symbol,
            decimals, // decimals
            1, // initial supply
            100, // cap
        );
    });
};