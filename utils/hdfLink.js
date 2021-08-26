const github = function() {
  return 'https://github.com/' + process.env.githubUsername
}

const githubToRepo = function(repoName) {
  return 'https://github.com/' + process.env.githubUsername + '/' + repoName
}

const githubToWiki = function(repoName, path) {
  return 'https://github.com/' + process.env.githubUsername + '/' + repoName + '/wiki/' + path
}


const twitter = function(username=process.env.twitterUsername) {
  return 'https://twitter.com/' + username
}

const telegram = function(username=process.env.telegramUsername) {
  return 'https://t.me/' + username
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

const exploreToken = function(tokenAddress = process.env.tokenAddress) {
  return process.env.explorerBaseUrl + '/token/' + tokenAddress
}

const exploreTokenHolders = function(tokenAddress = process.env.tokenAddress) {
  return process.env.explorerBaseUrl + '/token/' + tokenAddress + '#balances'
}

const exploreToken4address = function(address, token = process.env.tokenAddress) {
  return process.env.explorerBaseUrl + '/token/' + token + '?a=' + address
}

const pancakeSwapTo = function(outputCurrency = process.env.tokenAddress) {
  return process.env.pancakeBaseUrl + '/#/swap?outputCurrency=' + outputCurrency
}


export default {
  github: github,
  githubToRepo: githubToRepo,
  githubToWiki: githubToWiki,
  twitter: twitter,
  telegram: telegram,

  exploreBlock: exploreBlock,
  exploreTx: exploreTx,
  exploreAddress: exploreAddress,
  exploreToken: exploreToken,
  exploreTokenHolders: exploreTokenHolders,
  exploreToken4address: exploreToken4address,

  pancakeSwapTo: pancakeSwapTo
}
