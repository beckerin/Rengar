// Check if code is same as what I specify in file!
const verify = theirCode => theirCode === 'chau'

const main = async rengar => {
  const { id: myID } = await rengar.Summoner.by.name('9 5 mcdonalds')
  const code = await rengar.ThirdPartyCode.by.summonerID(myID)
  console.log(verify(code))
}

module.exports = main
