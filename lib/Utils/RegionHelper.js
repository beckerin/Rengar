import regions from 'Enums/regions'
import platformIDs from 'Enums/platform-ids'
import continents from 'Enums/continents'

const regionKeys = Object.keys(regions)
const continentKeys = Object.keys(continents)

const asPlatformID = region => platformIDs[regionKeys.find(eq(region))]
const asContinent = region => continentKeys.find(cv(region))

const isValidRegion = val => regionKeys.some(eq(val))

const RegionHelper = {
    asPlatformID,
    asContinent,
    isValidRegion,
}

const eq = v => k => regions[k] === v
const cv = v => k => continents[k].includes(v);

export default RegionHelper
