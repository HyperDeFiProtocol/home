const home = function(mode = '') {
  if (mode) {
    return 'https://' + mode + '.' + process.env.baseDomain + '/'
  }

  return 'https://' + process.env.baseDomain + '/'
}

const github = function() {
  return 'https://github.com/' + process.env.githubUsername
}

const githubToRepo = function(repoName) {
  return 'https://github.com/' + process.env.githubUsername + '/' + repoName
}

const githubToForum = function(repoName = 'home') {
  return 'https://github.com/' + process.env.githubUsername + '/' + repoName + '/' + 'discussions'
}

const githubToWiki = function(repoName, path) {
  return 'https://github.com/' + process.env.githubUsername + '/' + repoName + '/wiki/' + path
}

const discord = function(code=process.env.discordInvite) {
  return 'https://discord.gg/' + code
}

const reddit = function(username=process.env.redditUsername) {
  return 'https://www.reddit.com/' + username
}

const medium = function(username=process.env.mediumUsername) {
  return 'https://medium.com/@' + username
}

const twitter = function(username=process.env.twitterUsername) {
  return 'https://twitter.com/' + username
}

const telegram = function(username=process.env.telegramUsername) {
  return 'https://t.me/' + username
}

const clubHouseRoom = function(room=process.env.clubHouseRoom) {
  return 'https://www.clubhouse.com/join/' + room
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
  return process.env.pancakeBaseUrl + '/swap?outputCurrency=' + outputCurrency
}


export default {
  home: home,

  github: github,
  githubToRepo: githubToRepo,
  githubToForum: githubToForum,
  githubToWiki: githubToWiki,
  twitter: twitter,
  discord: discord,
  reddit: reddit,
  medium: medium,
  telegram: telegram,
  clubHouseRoom: clubHouseRoom,

  exploreBlock: exploreBlock,
  exploreTx: exploreTx,
  exploreAddress: exploreAddress,
  exploreToken: exploreToken,
  exploreTokenHolders: exploreTokenHolders,
  exploreToken4address: exploreToken4address,

  pancakeSwapTo: pancakeSwapTo
}
