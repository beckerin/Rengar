// 841.586 ms on `spread` on 500 reqs/s
// 945.530 ms on `burst` on 500 reqs/s
const efficiently = async rengar => {
  console.time('efficiently')
  const { accountId } = await rengar.Summoner.by.name('Jeongsik Oh')
  const { matches } = await rengar.Matchlist.by
    .accountID(accountId)
    .query({ queue: 420 })
  const gameIds = matches.slice(0, 10).map(({ gameId }) => gameId)
  const requests = gameIds.map(rengar.Match.get)
  const results = await Promise.all(requests)
  console.log(results[0], results.length)
  console.timeEnd('efficiently')
}

// 1694.430 ms on `spread` and 500 reqs/s
// 1649.070 ms on `burst` on 500 reqs/s
const slowly = async rengar => {
  console.time('slowly')
  const { accountId } = await rengar.Summoner.by.name('Jeongsik Oh')
  const { matches } = await rengar.Matchlist.by
    .accountID(accountId)
    .query({ queue: 420 })
  const gameIds = matches.slice(0, 10).map(({ gameId }) => gameId)
  const results = []
  for (let i = 0; i < gameIds.length; ++i) {
    results.push(await rengar.Match.get(gameIds[i]))
  }
  console.log(results[0], results.length)
  console.timeEnd('slowly')
}

const main = async rengar => {
  await efficiently(rengar)
  await slowly(rengar)
}

module.exports = main
