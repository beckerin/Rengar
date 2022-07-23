import { expect, should, assert } from 'chai'

import TestUtils from '../../../TestUtils'
const { rengarInstance, defaultConfig } = TestUtils

const { rengar, REGIONS, METHOD_TYPES } = rengarInstance
import ChallengerEndpointV4 from '../../../../lib/Endpoints/LeagueEndpoint/ChallengerEndpointV4'
import mocks from '../../../mocks'

describe('ChallengerEndpointV4', function () {
  this.timeout(0)

  beforeEach(function () {
    this.Challenger = new ChallengerEndpointV4(defaultConfig)
  })

  describe('.list', function () {
    it('should have the correct payload #1', function () {
      const { payload } = this.Challenger.list('RANKED_SOLO_5x5')
      expect(payload).to.deep.equal({
        method: 'GET',
        serviceName: 'league',
        endpoint: 'challengerleagues/by-queue/RANKED_SOLO_5x5',
        query: [],
        region: '',
        isTournament: false,
        version: 4,
        apiURLPrefix: 'https://%s.api.riotgames.com',
      })
    })
  })
})
