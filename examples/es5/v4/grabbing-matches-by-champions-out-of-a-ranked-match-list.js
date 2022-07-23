// Out of a player's ranked matchlist, grabs every match where they played a certain champion.

function main(rengar) {
  const config = {
    query: 420,
    champion: 67,
    season: 7,
  }

  rengar.Summoner.by.name('Contractz').callback(function (error, summoner) {
    // Note that the grabbing of a matchlist is currently limited by pagination.
    // This API request only returns the first list.
    rengar.Matchlist.by
      .accountID(summoner.accountId)
      .region('na')
      .query(config)
      .callback(function (error, matchlist) {
        console.log(matchlist.totalGames, matchlist.matches.length)
      })
  })
}

module.exports = main
