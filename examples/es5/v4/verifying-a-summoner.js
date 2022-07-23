// Check if code is same as what I specify in file!
function verify(theirCode) {
  return theirCode === 'chau'
}

function main(rengar) {
  rengar.Summoner.by.name('9 5 mcdonalds').callback(function (error, summoner) {
    rengar.ThirdPartyCode.by
      .summonerID(summoner.id)
      .callback(function (error, code) {
        console.log(verify(code))
      })
  })
}

module.exports = main
