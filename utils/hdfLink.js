const github = function() {
  return 'https://github.com/' + process.env.githubUsername
}

const exploreBlock = function(blockNumber) {
  return process.env.explorerBaseUrl + '/block/' + blockNumber
}

const exploreTx = function(txHash) {
  return process.env.explorerBaseUrl + '/tx/' + txHash
}

const exploreAddress = function(address) {
  return process.env.explorerBaseUrl + '/address/' + address
}

const exploreToken = function(address) {
  return process.env.explorerBaseUrl + '/token/' + address
}

const exploreToken4address = function(address, token = process.env.tokenAddress) {
  return process.env.explorerBaseUrl + '/token/' + token + '?a=' + address
}

const pancakeSwapTo = function(outputCurrency = process.env.tokenAddress) {
  return process.env.pancakeBaseUrl + '/#/swap?outputCurrency=' + outputCurrency
}

export default {
  github: github,

  exploreBlock: exploreBlock,
  exploreTx: exploreTx,
  exploreAddress: exploreAddress,
  exploreToken: exploreToken,
  exploreToken4address: exploreToken4address,

  pancakeSwapTo: pancakeSwapTo
}
