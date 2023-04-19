const Characters = artifacts.require("Characters");
const Coin = artifacts.require("Coin");
const Skins = artifacts.require("Skins");
const Marketplace = artifacts.require("Marketplace");

module.exports = async function (deployer, network) {
    await deployer.deploy(
        Marketplace,
        Coin.address,
        Characters.address,
        Skins.address,
    );

    // const marketplace = await Marketplace.deployed();

    // console.log(characters.address, coins.address, skins.address, marketplace.address);
    //
    // const m_coin = marketplace._currencyToken();
    // const m_characters = marketplace._currencyToken();
    // const m_skins = marketplace._currencyToken();
    //
    // console.log("after", m_characters, m_coin, m_skins);
};