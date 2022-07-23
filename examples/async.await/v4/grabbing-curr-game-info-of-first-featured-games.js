// Calls the featured games endpoint and then
// calls the current game endpoint on the first game's, first participant's id.

const main = async rengar => {
  const { gameList } = await rengar.FeaturedGames.list()
  if (gameList.length > 0) {
    const { summonerName: firstPlayer } = gameList[0].participants[0]
    const { id } = await rengar.Summoner.by.name(firstPlayer)
    const currentGameInfo = await rengar.CurrentGame.by.summonerID(id)
    console.log(currentGameInfo)
  }
}

module.exports = main
