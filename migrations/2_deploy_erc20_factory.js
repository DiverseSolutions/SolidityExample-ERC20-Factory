var ERC20FactoryContract = artifacts.require("./ERC20Factory.sol");

module.exports = async function(deployer) {
  let contract = await deployer.deploy(ERC20FactoryContract);
  console.log(`Diverse ERC20-Factory Address - ${contract.address}`)
};
