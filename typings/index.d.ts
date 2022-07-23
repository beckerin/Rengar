import * as dtos from './dtos'
import * as ddragonDtos from './ddragon-dtos'

declare module 'rengar' {
    export function Rengar(key?: string): (config?: RengarConfig) => RengarClass

    class RengarClass {
        flushCache(cb?: callback<'OK'>): Promise<'OK'>

        public ChampionMastery: {
            get: (summonerID: string) => (championID: number) => RengarRequest<dtos.ChampionMasteryV4ChampionMasteryDTO>
            list: (summonerID: number) => RengarRequest<dtos.ChampionMasteryV4ChampionMasteryDTO[]>
            totalScore: (summonerID: number) => RengarRequest<number>
        }

        public Champion: {
            Rotation: {
                list: () => RengarRequest<dtos.ChampionV3ChampionInfo>
            }
        }

        public Challenger: {
            list: (queueName: queueName) => RengarRequest<dtos.LeagueV4LeagueListDTO>
        }

        public CurrentGame: {
            by: {
                summonerID: (summonerID: string) => RengarRequest<dtos.SpectatorV4CurrentGameInfo>
            }
        }

        public DDragon: {
            Champion: {
                get: (championName: string) => RengarDDragonRequest<ddragonDtos.DDragonChampionDTO>
                list: () => RengarDDragonRequest<ddragonDtos.DDragonChampionListDTO>
                listFull: () => RengarDDragonRequest<ddragonDtos.DDragonChampionDTO>
                getDataById: () => RengarDDragonRequest<ddragonDtos.DDragonChampionDTO>
                getDataByIdWithParentAsId: () => RengarDDragonRequest<ddragonDtos.DDragonChampionDTO>
                listDataById: () => RengarDDragonRequest<ddragonDtos.DDragonChampionListDTO>
                listDataByIdWithParentAsId: () => RengarDDragonRequest<ddragonDtos.DDragonChampionListDTO>
                listFullDataById: () => RengarDDragonRequest<ddragonDtos.DDragonChampionDTO>
                listFullDataByIdWithParentAsId: () => RengarDDragonRequest<ddragonDtos.DDragonChampionDTO>
            }
            Item: {
                list: () => RengarDDragonRequest<ddragonDtos.DDragonItemWrapperDTO>
            }
            Language: {
                list: () => RengarDDragonRequest<string[]>
            }
            LanguageString: {
                list: () => RengarDDragonRequest<ddragonDtos.DDragonLanguageStringDTO>
            }
            Map: {
                list: () => RengarDDragonRequest<ddragonDtos.DDragonMapDTO>
            }
            ProfileIcon: {
                list: () => RengarDDragonRequest<ddragonDtos.DDragonProfileIconDTO>
            }
            Realm: {
                list: (region: region) => RengarDDragonRequest<ddragonDtos.DDragonRealmsDTO>
            }
            RunesReforged: {
                list: () => RengarDDragonRequest<ddragonDtos.DDragonRunesReforgedDTO[]>
            }
            SummonerSpell: {
                list: () => RengarDDragonRequest<ddragonDtos.DDragonSummonerSpellDTO>
            }
            Version: {
                list: () => RengarDDragonRequest<string[]>
            }
        }

        public League: {
            by: {
                uuid: (leagueUUID: string) => RengarRequest<dtos.LeagueV4LeagueListDTO>
            }

            Entries: {
                bySummonerID: (encryptedSummonerID: string) => RengarRequest<dtos.LeagueV4LeagueEntryDTO[]>
                list: (queue: queueName, tier: string, division: string) => RengarRequest<dtos.LeagueV4LeagueEntryDTO[]>
            }
        }

        public Master: {
            list: (queueName: queueName) => RengarRequest<dtos.LeagueV4LeagueListDTO>
        }

        public Grandmaster: {
            list: (queueName: queueName) => RengarRequest<dtos.LeagueV4LeagueListDTO>
        }

        public Match: {
            get: (matchID: number) => RengarRequest<dtos.MatchV4MatchDTO>
            timeline: (matchID: number) => RengarRequest<dtos.MatchV4MatchTimelineDTO>

            Tournament: {
                listMatchIDs: (tournamentCode: string) => RengarRequest<number[]>
                get: (matchID: number, tournamentCode: string) => RengarRequest<dtos.MatchV4MatchDTO>
            }
        }

        public Matchlist: {
            by: {
                accountID: (accountID: string) => RengarRequest<dtos.MatchV4MatchlistDTO>
            }
            Recent: {
                by: {
                    accountID: (accountID: string) => RengarRequest<dtos.MatchV4MatchlistDTO>
                }
            }
        }

        public Status: {
            get: () => RengarRequest<dtos.LolStatusV3ShardStatus>
        }

        public Summoner: {
            by: {
                name: (name: string) => RengarRequest<dtos.SummonerV4SummonerDTO>
                id: (id: string) => RengarRequest<dtos.SummonerV4SummonerDTO>
                accountID: (accountID: string) => RengarRequest<dtos.SummonerV4SummonerDTO>
            }
        }

        public ThirdPartyCode: {
            by: {
                summonerID: (id: string) => RengarRequest<string>
            }
        }

        public TournamentStub: {
            create: (tournamentID: number, body?: dtos.TournamentStubV4TournamentCodeParameters) => RengarRequest<string[]>
            lobbyEvents: (tournamentCode: string) => RengarRequest<dtos.TournamentStubV4LobbyEventDTOWrapper>
            registerProviderData: (region: string, callbackURL: string) => RengarRequest<number>
            register: (providerID: number, name?: string) => RengarRequest<number>
        }

        public Tournament: {
            create: (tournamentID: number, body?: dtos.TournamentV4TournamentCodeParameters) => RengarRequest<string[]>
            update: (tournamentCode: string, body: dtos.TournamentV4TournamentCodeUpdateParameters) => RengarRequest<void>
            get: (tournamentCode: string) => RengarRequest<dtos.TournamentV4TournamentCodeDTO>
            lobbyEvents: (tournamentCode: string) => RengarRequest<dtos.TournamentV4LobbyEventDTOWrapper>
            registerProviderData: (region: string, callbackURL: string) => RengarRequest<number>
            register: (providerID: number, name?: string) => RengarRequest<number>
        }
    }
}

type RengarError = {
    statusCode: number
    url: string
    error: any
}

declare class RengarRequest<T> {
    region(region: region): RengarRequest<T>
    query(query: Object): RengarRequest<T>
    then(resolve: (data: T) => void, reject?: (err: RengarError) => void): RengarRequest<T>
    catch(callback: (err: RengarError) => void): void
    callback(callback: callback<T>): void
}

type locale =
    | 'en_US'
    | 'cs_CZ'
    | 'de_DE'
    | 'el_GR'
    | 'en_AU'
    | 'en_GB'
    | 'en_PH'
    | 'en_SG'
    | 'es_AR'
    | 'es_ES'
    | 'es_MX'
    | 'fr_FR'
    | 'hu_HU'
    | 'id_ID'
    | 'it_IT'
    | 'ja_JP'
    | 'ko_KR'
    | 'pl_PL'
    | 'pt_BR'
    | 'ro_RO'
    | 'ru_RU'
    | 'th_TH'
    | 'tr_TR'
    | 'vn_VN'
    | 'zh_CN'
    | 'zh_MY'
    | 'zh_TW'

declare class RengarDDragonRequest<T> {
    version(version: string): RengarDDragonRequest<T>
    locale(locale: locale): RengarDDragonRequest<T>
    region(region: region): RengarDDragonRequest<T>
    then(resolve: (data: T) => void, reject?: (err: RengarError) => void): RengarDDragonRequest<T>
    catch(callback: (err: RengarError) => void): void
    callback(callback: callback<T>): void
}

type callback<T> = (err: RengarError, data: T) => void

// a lot of these are temp and will be improved in later releases.
type serviceName = string
type methodName = string
type endpoint = string
interface RengarConfig {
    region?: region
    apiURLPrefix?: string
    debugOptions?: {
        isEnabled?: boolean
        showKey?: boolean
    }
    requestOptions?: {
        shouldRetry?: boolean
        numberOfRetriesBeforeAbort?: number
        delayBeforeRetry?: number
        burst?: boolean
        shouldExitOn403?: boolean
    }
    cacheOptions?: {
        cache: any
        timeToLives?: {
            useDefault?: boolean
            byMethod?: any
            byGroup?: any
        }
    }
}

type region = string
type queueName = string

declare class BasicJSCache {
    constructor()
}

declare class LRUCache {
    constructor(opts?: { max?: number; length?: (value: any, key: any) => number; dispose?: (key: any, value: any) => void })
}

declare class RedisCache {
    constructor(opts?: { host?: string; port?: number; keyPrefix?: string; password?: string })
}

declare enum REGIONS {
    BRAZIL = 'br',
    EUROPE = 'eune',
    EUROPE_WEST = 'euw',
    KOREA = 'kr',
    LATIN_AMERICA_NORTH = 'lan',
    LATIN_AMERICA_SOUTH = 'las',
    NORTH_AMERICA = 'na',
    OCEANIA = 'oce',
    RUSSIA = 'ru',
    TURKEY = 'tr',
    JAPAN = 'jp',
}

export namespace METHOD_NAMES {
    namespace CHAMPION_MASTERY {
        const GET_ALL_CHAMPION_MASTERIES = 'CHAMPION_MASTERY.GET_ALL_CHAMPION_MASTERIES'
        const GET_CHAMPION_MASTERY = 'CHAMPION_MASTERY.GET_CHAMPION_MASTERY'
        const GET_CHAMPION_MASTERY_SCORE = 'GET_CHAMPION_MASTERY_SCORE'

        // V4
        const GET_ALL_CHAMPION_MASTERIES_V4 = 'CHAMPION_MASTERY.GET_ALL_CHAMPION_MASTERIES_V4'
        const GET_CHAMPION_MASTERY_V4 = 'CHAMPION_MASTERY.GET_CHAMPION_MASTERY_V4'
        const GET_CHAMPION_MASTERY_SCORE_V4 = 'CHAMPION_MASTERY.GET_CHAMPION_MASTERY_SCORE_V4'
    }

    namespace CHAMPION {
        const GET_CHAMPIONS = 'CHAMPION.GET_CHAMPIONS'
        const GET_CHAMPION_BY_ID = 'CHAMPION.GET_CHAMPION_BY_ID'
    }

    namespace LEAGUE {
        const GET_CHALLENGER_LEAGUE = 'LEAGUE.GET_CHALLENGER_LEAGUE'
        const GET_ALL_LEAGUES_FOR_SUMMONER = 'LEAGUE.GET_ALL_LEAGUES_FOR_SUMMONER'
        const GET_LEAGUE_BY_ID = 'LEAGUE.GET_BY_ID'
        const GET_MASTER_LEAGUE = 'LEAGUE.GET_MASTER_LEAGUE'
        const GET_ALL_LEAGUE_POSITIONS_FOR_SUMMONER = 'LEAGUE.GET_ALL_LEAGUE_POSITIONS_FOR_SUMMONER'

        // V4
        const GET_CHALLENGER_LEAGUE_V4 = 'LEAGUE.GET_CHALLENGER_LEAGUE_V4'
        const GET_GRANDMASTER_LEAGUE_V4 = 'LEAGUE.GET_GRANDMASTER_LEAGUE_V4'
        const GET_LEAGUE_BY_ID_V4 = 'LEAGUE.GET_BY_ID_V4'
        const GET_MASTER_LEAGUE_V4 = 'LEAGUE.GET_MASTER_LEAGUE_V4'
        const GET_ALL_LEAGUE_POSITIONS_FOR_SUMMONER_V4 = 'LEAGUE.GET_ALL_LEAGUE_POSITIONS_FOR_SUMMONER_V4'
    }

    namespace LOL_STATUS {
        const GET_SHARD_DATA = 'LOL_STATUS.GET_SHARD_DATA'
    }

    namespace MATCH {
        const GET_MATCH = 'MATCH.GET_MATCH'
        const GET_MATCHLIST = 'MATCH.GET_MATCHLIST'
        const GET_RECENT_MATCHLIST = 'MATCH.GET_MATCHLIST'
        const GET_MATCH_TIMELINE = 'MATCH.GET_MATCH_TIMELINE'
        const GET_MATCH_BY_TOURNAMENT_CODE = 'MATCH.GET_MATCH_BY_TOURNAMENT_CODE'

        // V4
        const GET_MATCH_V4 = 'MATCH.GET_MATCH_V4'
        const GET_MATCHLIST_V4 = 'MATCH.GET_MATCHLIST_V4'
        const GET_MATCH_TIMELINE_V4 = 'MATCH.GET_MATCH_TIMELINE_V4'
        const GET_MATCH_IDS_BY_TOURNAMENT_CODE_V4 = 'MATCH.GET_MATCH_IDS_BY_TOURNAMENT_CODE_V4'
        const GET_MATCH_BY_TOURNAMENT_CODE_V4 = 'MATCH.GET_MATCH_BY_TOURNAMENT_CODE_V4'
    }

    namespace SPECTATOR {
        const GET_CURRENT_GAME_INFO_BY_SUMMONER = 'SPECTATOR.GET_CURRENT_GAME_INFO_BY_SUMMONER'
        const GET_FEATURED_GAMES = 'SPECTATOR.GET_FEATURED_GAMES'

        // V4
        const GET_CURRENT_GAME_INFO_BY_SUMMONER_V4 = 'SPECTATOR.GET_CURRENT_GAME_INFO_BY_SUMMONER_V4'
        const GET_FEATURED_GAMES_V4 = 'SPECTATOR.GET_FEATURED_GAMES_V4'
    }

    namespace SUMMONER {
        const GET_BY_ACCOUNT_ID = 'SUMMONER.GET_BY_ACCOUNT_ID'
        const GET_BY_SUMMONER_NAME = 'SUMMONER.GET_BY_SUMMONER_NAME'
        const GET_BY_SUMMONER_ID = 'SUMMONER.GET_BY_SUMMONER_ID'

        // V4
        const GET_BY_ACCOUNT_ID_V4 = 'SUMMONER.GET_BY_ACCOUNT_ID_V4'
        const GET_BY_SUMMONER_NAME_V4 = 'SUMMONER.GET_BY_SUMMONER_NAME_V4'
        const GET_BY_SUMMONER_ID_V4 = 'SUMMONER.GET_BY_SUMMONER_ID_V4'
        const GET_BY_PUUID_V4 = 'SUMMONER.GET_BY_PUUID_V4'
    }

    namespace THIRD_PARTY_CODE {
        const GET_BY_SUMMONER_ID = 'THIRD_PARTY_CODE.GET_BY_SUMMONER_ID'

        // V4
        const GET_BY_SUMMONER_ID_V4 = 'THIRD_PARTY_CODE.GET_BY_SUMMONER_ID_V4'
    }

    namespace TOURNAMENT_STUB {
        const CREATE_TOURNAMENT_CODE = 'TOURNAMENT_STUB.CREATE_TOURNAMENT_CODE'
        const REGISTER_TOURNAMENT = 'TOURNAMENT.STUB.REGISTER_TOURNAMENT'
        const REGISTER_PROVIDER_DATA = 'TOURNAMENT_STUB.REGISTER_PROVIDER_DATA'
        const GET_LOBBY_EVENTS_BY_CODE = 'TOURNAMENT_STUB.GET_LOBBY_EVENTS_BY_CODE'

        // V4
        const CREATE_TOURNAMENT_CODE_V4 = 'TOURNAMENT_STUB.CREATE_TOURNAMENT_CODE_V4'
        const REGISTER_TOURNAMENT_V4 = 'TOURNAMENT.STUB.REGISTER_TOURNAMENT_V4'
        const REGISTER_PROVIDER_DATA_V4 = 'TOURNAMENT_STUB.REGISTER_PROVIDER_DATA_V4'
        const GET_LOBBY_EVENTS_BY_CODE_V4 = 'TOURNAMENT_STUB.GET_LOBBY_EVENTS_BY_CODE_V4'
    }

    namespace TOURNAMENT {
        const CREATE_TOURNAMENT_CODE = 'TOURNAMENT.CREATE_TOURNAMENT_CODE'
        const UPDATE_TOURNAMENT = 'TOURNAMENT.UPDATE_TOURNAMENT'
        const GET_TOURNAMENT_CODE = 'TOURNAMENT.GET_TOURNAMENT.CODE'
        const GET_LOBBY_EVENTS_BY_CODE = 'TOURNAMENT.GET_LOBBY_EVENTS_BY_CODE'
        const REGISTER_PROVIDER_DATA = 'TOURNAMENT.REGISTER_PROVIDER_DATA'
        const REGISTER_TOURNAMENT = 'TOURNAMENT.REGISTER_TOURNAMENT'

        // V4
        const CREATE_TOURNAMENT_CODE_V4 = 'TOURNAMENT.CREATE_TOURNAMENT_CODE_V4'
        const UPDATE_TOURNAMENT_V4 = 'TOURNAMENT.UPDATE_TOURNAMENT_V4'
        const GET_TOURNAMENT_CODE_V4 = 'TOURNAMENT.GET_TOURNAMENT_CODE_V4'
        const GET_LOBBY_EVENTS_BY_CODE_V4 = 'TOURNAMENT.GET_LOBBY_EVENTS_BY_CODE_V4'
        const REGISTER_PROVIDER_DATA_V4 = 'TOURNAMENT.REGISTER_PROVIDER_DATA_V4'
        const REGISTER_TOURNAMENT_V4 = 'TOURNAMENT.REGISTER_TOURNAMENT_V4'
    }
}
