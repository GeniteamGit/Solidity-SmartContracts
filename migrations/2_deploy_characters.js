const Characters = artifacts.require("Characters");

module.exports = async function (deployer, network) {
    deployer.then(async () => {
        await deployer.deploy(
            Characters,
            "SFW Characters", // name
            "SFWC", // symbol
        );
    });
};