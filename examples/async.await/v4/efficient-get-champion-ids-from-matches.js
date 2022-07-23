const getChampionIdFromMatch = (match, accountId) => {
  for (let i in match.participantIdentities) {
    if (
      match.participantIdentities[i].player.currentAccountId === accountId
    ) {
      return match.participants[parseInt(i)].championId
    }
  }
}

const main = async rengar => {
  const { accountId } = await rengar.Summoner.by.name('Contractz')
  const rankGameIds = (await rengar.Matchlist.by
    .accountID(accountId)
    .query({ queue: 420 })).matches.map(el => el.gameId)
  const championIds = await Promise.all(
    rankGameIds.map(async gameId => {
      const matchDetail = await rengar.Match.get(gameId).region('na')
      return getChampionIdFromMatch(matchDetail, accountId)
    }),
  )
  console.log(championIds, championIds.length)
}

module.exports = main
