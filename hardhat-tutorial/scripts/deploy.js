async function main() {
  const whitelistContractFactory = await hre.ethers.getContractFactory(
    "Whitelist"
  );
  const whitelist = await whitelistContractFactory.deploy(8);
  await whitelist.deployed();

  console.log(whitelist.address);
}

main()
  .then(() => {
    process.exit(0);
  })
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
