import {
  Rengar,
  REGIONS,
  METHOD_NAMES,
  BasicJSCache,
  LRUCache,
  RedisCache,
} from './'

/*
const redisCache = new RedisCache({
    host: 'localhost',
    port: 5000,
    keyPrefix: 'rengar',
});
*/

const myCache = new LRUCache({ max: 5 })

const rengar = Rengar()({
  region: 'na',
  debugOptions: {
    isEnabled: true,
    showKey: false,
  },
  requestOptions: {
    shouldRetry: true,
    numberOfRetriesBeforeAbort: 3,
    delayBeforeRetry: 1000,
  },
  cacheOptions: {
    cache: new BasicJSCache(),
  },
})

import run from './examples/async.await/v4/get-last-10-ranked-matches-efficiently'

const main = async () => {
  console.log(await rengar.Summoner.by.name('Contractz'))
  await rengar.League.Entries.list('RANKED_SOLO_5x5', 'DIAMOND', 'I')
}

main()
