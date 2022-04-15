// https://eth-ropsten.alchemyapi.io/v2/j7dyqi8Se41oNw5axIBSBJoo7ZisaMke

require('@nomiclabs/hardhat-waffle')

module.exports = {
  solidity: '0.8.0',
  networks: {
    ropsten: {
      url : 'https://eth-ropsten.alchemyapi.io/v2/j7dyqi8Se41oNw5axIBSBJoo7ZisaMke',
      accounts: ['1ca72afa3d2806287901d72c712e2dee28d2f616381e0381be97e19d1489cfbb']
    }
  }
}