require('@nomiclabs/hardhat-waffle');

/**
 * @type import('hardhat/config').HardhatUserConfig
 */
module.exports = {
	solidity: '0.8.0',
	networks: {
		rinkeby: {
			url: 'https://eth-rinkeby.alchemyapi.io/v2/-rwtjcknwdX8SmpXJMmBBNvpOTqKbeFV',
			accounts: [
				'7cda29ae3d1725d26ab61f699518e8d8160cc2bcb7701e83ba697523f2b8aa26',
			],
		},
	},
};
