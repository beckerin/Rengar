/**
 * This object contains single Champion Mastery information for player and champion combination.
 */
export interface ChampionMasteryV4ChampionMasteryDTO {
  /**
   * Is chest granted for this champion or not in current season.
   */
  chestGranted?: boolean
  /**
   * Champion level for specified player and champion combination.
   */
  championLevel?: number // int32
  /**
   * Total number of champion points for this player and champion combination - they are used to determine championLevel.
   */
  championPoints?: number // int32
  /**
   * Champion ID for this entry.
   */
  championId?: number // int64
  /**
   * Number of points needed to achieve next level. Zero if player reached maximum champion level for this champion.
   */
  championPointsUntilNextLevel?: number // int64
  /**
   * Last time this champion was played by this player - in Unix milliseconds time format.
   */
  lastPlayTime?: number // int64
  /**
   * The token earned for this champion to levelup.
   */
  tokensEarned?: number // int32
  /**
   * Number of points earned since current level has been achieved.
   */
  championPointsSinceLastLevel?: number // int64
  /**
   * Summoner ID for this entry. (Encrypted)
   */
  summonerId?: string
}
export interface ChampionV3ChampionInfo {
  freeChampionIdsForNewPlayers?: number /* int32 */[]
  freeChampionIds?: number /* int32 */[]
  maxNewPlayerLevel?: number // int32
}
export interface Error {
  status?: {
    status_code?: number
    message?: string
  }
}
export interface LeagueExpV4LeagueEntryDTO {
  queueType?: string
  summonerName?: string
  hotStreak?: boolean
  miniSeries?: LeagueExpV4MiniSeriesDTO
  /**
   * Winning team on Summoners Rift. First placement in Teamfight Tactics.
   */
  wins?: number // int32
  veteran?: boolean
  /**
   * Losing team on Summoners Rift. Second through eighth placement in Teamfight Tactics.
   */
  losses?: number // int32
  rank?: string
  leagueId?: string
  inactive?: boolean
  freshBlood?: boolean
  tier?: string
  /**
   * Player's summonerId (Encrypted)
   */
  summonerId?: string
  leaguePoints?: number // int32
}
export interface LeagueExpV4MiniSeriesDTO {
  progress?: string
  losses?: number // int32
  target?: number // int32
  wins?: number // int32
}
export interface LeagueV4LeagueEntryDTO {
  queueType?: string
  summonerName?: string
  hotStreak?: boolean
  miniSeries?: LeagueV4MiniSeriesDTO
  /**
   * Winning team on Summoners Rift. First placement in Teamfight Tactics.
   */
  wins?: number // int32
  veteran?: boolean
  /**
   * Losing team on Summoners Rift. Second through eighth placement in Teamfight Tactics.
   */
  losses?: number // int32
  rank?: string
  leagueId?: string
  inactive?: boolean
  freshBlood?: boolean
  tier?: string
  /**
   * Player's summonerId (Encrypted)
   */
  summonerId?: string
  leaguePoints?: number // int32
}
export interface LeagueV4LeagueItemDTO {
  summonerName?: string
  hotStreak?: boolean
  miniSeries?: LeagueV4MiniSeriesDTO
  /**
   * Winning team on Summoners Rift. First placement in Teamfight Tactics.
   */
  wins?: number // int32
  veteran?: boolean
  /**
   * Losing team on Summoners Rift. Second through eighth placement in Teamfight Tactics.
   */
  losses?: number // int32
  freshBlood?: boolean
  inactive?: boolean
  rank?: string
  /**
   * Player's summonerId (Encrypted)
   */
  summonerId?: string
  leaguePoints?: number // int32
}
export interface LeagueV4LeagueListDTO {
  leagueId?: string
  tier?: string
  entries?: LeagueV4LeagueItemDTO[]
  queue?: string
  name?: string
}
export interface LeagueV4MiniSeriesDTO {
  progress?: string
  losses?: number // int32
  target?: number // int32
  wins?: number // int32
}
export interface LolStatusV3Incident {
  active?: boolean
  created_at?: string
  id?: number // int64
  updates?: LolStatusV3Message[]
}
export interface LolStatusV3Message {
  severity?: string
  author?: string
  created_at?: string
  translations?: LolStatusV3Translation[]
  updated_at?: string
  content?: string
  id?: string
}
export interface LolStatusV3Service {
  status?: string
  incidents?: LolStatusV3Incident[]
  name?: string
  slug?: string
}
export interface LolStatusV3ShardStatus {
  name?: string
  region_tag?: string
  hostname?: string
  services?: LolStatusV3Service[]
  slug?: string
  locales?: string[]
}
export interface LolStatusV3Translation {
  locale?: string
  content?: string
  heading?: string
}
//#region MatchV5
export interface MatchV5ListDTO {
  gameList?: string[]
}
export interface MatchV5TimelineDTO {
  // TODO: matchTimeline?: MatchTimelineDTO
}
export interface MatchV5DTO {
  /**
   * Please refer to the Game Constants documentation.
   */
  metadataDTO?: MatchV5MetadataDTO
  /**
   * Please refer to the Game Constants documentation.
   */
  info?: MatchV5InfoDTO
}
export interface MatchV5InfoDTO {
  /**
   * Unix timestamp for when the game is created on the game server (i.e., the loading screen).
   */
  gameCreation?: number
  /**
   * Prior to patch 11.20, this field returns the game length in milliseconds calculated from gameEndTimestamp - gameStartTimestamp. Post patch 11.20, this field returns the max timePlayed of any participant in the game in seconds, which makes the behavior of this field consistent with that of match-v4. The best way to handling the change in this field is to treat the value as milliseconds if the gameEndTimestamp field isn't in the response and to treat the value as seconds if gameEndTimestamp is in the response.
   */
  gameDuration?: number
  /**
   * 
  Unix timestamp for when match ends on the game server. This timestamp can occasionally be significantly longer than when the match "ends". The most reliable way of determining the timestamp for the end of the match would be to add the max time played of any participant to the gameStartTimestamp. This field was added to match-v5 in patch 11.20 on Oct 5th, 2021.
   */
  gameEndTimestamp?: number
  gameId?: number
  /**
   * Refer to the Game Constants documentation.
   */
  gameMode?: string
  gameName?: string
  /**
   * Unix timestamp for when match starts on the game server.
   */
  gameStartTimestamp?: number
  gameType?: string
  /**
   * The first two parts can be used to determine the patch a game was played on.
   */
  gameVersion?: string
  /**
   * Refer to the Game Constants documentation.
   */
  mapId?: number
  participants?: MatchV5ParticipantDTO[]
  /**
   * Platform where the match was played.
   */
  platformId?: string
  /**
   * Refer to the Game Constants documentation.
   */
  queueId?: number
  teams?: MatchV5TeamDTO[]
  /**
   * Tournament code used to generate the match. This field was added to match-v5 in patch 11.13 on June 23rd, 2021.
   */
  tournamentCode?: string

}
export interface MatchV5MetadataDTO {
  /**
   * Match data version.
   */
  dataVersion?: string
  /**
   * Match id.
   */
  matchId?: string
  /**
   * A list of participant PUUIDs.
   */
  participants: string[]
}
export interface MatchV5ParticipantDTO {
  assists?: number
  baronKills?: number
  bountyLevel?: number
  champExperience?: number
  champLevel?: number
  /**
   * Prior to patch 11.4, on Feb 18th, 2021, this field returned invalid championIds. We recommend determining the champion based on the championName field for matches played prior to patch 11.4.
   */
  championId?: number
  championName?: string
  /**
   * 	This field is currently only utilized for Kayn's transformations. (Legal values: 0 - None, 1 - Slayer, 2 - Assassin)
   */
  championTransform?: number
  consumablesPurchased?: number
  damageDealtToBuildings?: number
  damageDealtToObjectives?: number
  damageDealtToTurrets?: number
  damageSelfMitigated?: number
  deaths?: number
  detectorWardsPlaced?: number
  doubleKills?: number
  dragonKills?: number
  firstBloodAssist?: boolean
  firstBloodKill?: boolean
  firstTowerAssist?: boolean
  firstTowerKill?: boolean
  gameEndedInEarlySurrender?: boolean
  gameEndedInSurrender?: boolean
  goldEarned?: number
  goldSpent?: number
  /**
   * Both individualPosition and teamPosition are computed by the game server and are different versions of the most likely position played by a player. The individualPosition is the best guess for which position the player actually played in isolation of anything else. The teamPosition is the best guess for which position the player actually played if we add the constraint that each team must have one top player, one jungle, one middle, etc. Generally the recommendation is to use the teamPosition field over the individualPosition field.
   */
  individualPosition?: string
  inhibitorKills?: number
  inhibitorTakedowns?: number
  inhibitorsLost?: number
  item0?: number
  item1?: number
  item2?: number
  item3?: number
  item4?: number
  item5?: number
  item6?: number
  itemsPurchased?: number
  killingSprees?: number
  kills?: number
  lane?: string
  largestCriticalStrike?: number
  largestKillingSpree?: number
  largestMultiKill?: number
  longestTimeSpentLiving?: number
  magicDamageDealt?: number
  magicDamageDealtToChampions?: number
  magicDamageTaken?: number
  neutralMinionsKilled?: number
  nexusKills?: number
  nexusTakedowns?: number
  nexusLost?: number
  objectivesStolen?: number
  objectivesStolenAssists?: number
  participantId?: number
  pentaKills?: number
  perks?: MatchV5PerksDTO
  physicalDamageDealt?: number
  physicalDamageDealtToChampions?: number
  physicalDamageTaken?: number
  profileIcon?: number
  puuid?: string
  quadraKills?: number
  riotIdName?: string
  riotIdTagline?: string
  role?: string
  sightWardsBoughtInGame?: number
  spell1Casts?: number
  spell2Casts?: number
  spell3Casts?: number
  spell4Casts?: number
  summoner1Casts?: number
  summoner1Id?: number
  summoner2Casts?: number
  summoner2Id?: number
  summonerId?: string
  summonerLevel?: number
  summonerName?: string
  teamEarlySurrendered?: boolean
  teamId?: number
  /**
   * Both individualPosition and teamPosition are computed by the game server and are different versions of the most likely position played by a player. The individualPosition is the best guess for which position the player actually played in isolation of anything else. The teamPosition is the best guess for which position the player actually played if we add the constraint that each team must have one top player, one jungle, one middle, etc. Generally the recommendation is to use the teamPosition field over the individualPosition field.
   */
  teamPosition?: string
  timeCCingOthers?: number
  timePlayed?: number
  totalDamageDealt?: number
  totalDamageDealtToChampions?: number
  totalDamageShieldedOnTeammates?: number
  totalDamageTaken?: number
  totalHeal?: number
  totalHealsOnTeammates?: number
  totalMinionsKilled?: number
  totalTimeCCDealt?: number
  totalTimeSpentDead?: number
  totalUnitsHealed?: number
  tripleKills?: number
  trueDamageDealt?: number
  trueDamageDealtToChampions?: number
  trueDamageTaken?: number
  turretKills?: number
  turretTakedowns?: number
  turretsLost?: number
  unrealKills?: number
  visionScore?: number
  visionWardsBoughtInGame?: number
  wardsKilled?: number
  wardsPlaced?: number
  win?: boolean
}
export interface MatchV5PerksDTO {
  statPerks?: MatchV5PerkStatsDTO
  styles?: MatchV5PerkStyleDTO[]
}
export interface MatchV5PerkStatsDTO {
  defense?: number
  flex?: number
  offense?: number
}
export interface MatchV5PerkStyleDTO {
  description?: string
  selections?: MatchV5PerkStyleSelectionDTO[]
  style?: number
}
export interface MatchV5PerkStyleSelectionDTO {
  perk?: number
  var1?: number
  var2?: number
  var3?: number
}

export interface MatchV5TeamDTO {
  bans?: MatchV5BanDTO[]
  objectives?: MatchV5ObjectivesDTO
  teamId?: number
  win?: boolean
}

export interface MatchV5BanDTO {
  championId?: number
  pickTurn?: number
}

export interface MatchV5ObjectivesDTO {
  baron?: MatchV5ObjectiveDTO
  champion?: MatchV5ObjectiveDTO
  dragon?: MatchV5ObjectiveDTO
  inhibitor?: MatchV5ObjectiveDTO
  riftHerald?: MatchV5ObjectiveDTO
  tower?: MatchV5ObjectiveDTO
}

export interface MatchV5ObjectiveDTO {
  first?: boolean
  kills?: number
}

//#endregion

export interface SpectatorV4BannedChampion {
  /**
   * The turn during which the champion was banned
   */
  pickTurn?: number // int32
  /**
   * The ID of the banned champion
   */
  championId?: number // int64
  /**
   * The ID of the team that banned the champion
   */
  teamId?: number // int64
}
export interface SpectatorV4CurrentGameInfo {
  /**
   * The ID of the game
   */
  gameId?: number // int64
  /**
   * The game start time represented in epoch milliseconds
   */
  gameStartTime?: number // int64
  /**
   * The ID of the platform on which the game is being played
   */
  platformId?: string
  /**
   * The game mode
   */
  gameMode?: string
  /**
   * The ID of the map
   */
  mapId?: number // int64
  /**
   * The game type
   */
  gameType?: string
  /**
   * Banned champion information
   */
  bannedChampions?: SpectatorV4BannedChampion[]
  /**
   * The observer information
   */
  observers?: SpectatorV4Observer
  /**
   * The participant information
   */
  participants?: SpectatorV4CurrentGameParticipant[]
  /**
   * The amount of time in seconds that has passed since the game started
   */
  gameLength?: number // int64
  /**
   * The queue type (queue types are documented on the Game Constants page)
   */
  gameQueueConfigId?: number // int64
}
export interface SpectatorV4CurrentGameParticipant {
  /**
   * The ID of the profile icon used by this participant
   */
  profileIconId?: number // int64
  /**
   * The ID of the champion played by this participant
   */
  championId?: number // int64
  /**
   * The summoner name of this participant
   */
  summonerName?: string
  /**
   * List of Game Customizations
   */
  gameCustomizationObjects?: SpectatorV4GameCustomizationObject[]
  /**
   * Flag indicating whether or not this participant is a bot
   */
  bot?: boolean
  /**
   * Perks/Runes Reforged Information
   */
  perks?: SpectatorV4Perks
  /**
   * The ID of the second summoner spell used by this participant
   */
  spell2Id?: number // int64
  /**
   * The team ID of this participant, indicating the participant's team
   */
  teamId?: number // int64
  /**
   * The ID of the first summoner spell used by this participant
   */
  spell1Id?: number // int64
  /**
   * The encrypted summoner ID of this participant
   */
  summonerId?: string
}
export interface SpectatorV4FeaturedGameInfo {
  /**
   * The ID of the game
   */
  gameId?: number // int64
  /**
   * The game start time represented in epoch milliseconds
   */
  gameStartTime?: number // int64
  /**
   * The ID of the platform on which the game is being played
   */
  platformId?: string
  /**
   * The game mode
   *              (Legal values:  CLASSIC,  ODIN,  ARAM,  TUTORIAL,  ONEFORALL,  ASCENSION,  FIRSTBLOOD,  KINGPORO)
   */
  gameMode?: 'CLASSIC' | 'ODIN' | 'ARAM' | 'TUTORIAL' | 'ONEFORALL' | 'ASCENSION' | 'FIRSTBLOOD' | 'KINGPORO'
  /**
   * The ID of the map
   */
  mapId?: number // int64
  /**
   * The game type
   *              (Legal values:  CUSTOM_GAME,  MATCHED_GAME,  TUTORIAL_GAME)
   */
  gameType?: 'CUSTOM_GAME' | 'MATCHED_GAME' | 'TUTORIAL_GAME'
  /**
   * Banned champion information
   */
  bannedChampions?: SpectatorV4BannedChampion[]
  /**
   * The observer information
   */
  observers?: SpectatorV4Observer
  /**
   * The participant information
   */
  participants?: SpectatorV4Participant[]
  /**
   * The amount of time in seconds that has passed since the game started
   */
  gameLength?: number // int64
  /**
   * The queue type (queue types are documented on the Game Constants page)
   */
  gameQueueConfigId?: number // int64
}
export interface SpectatorV4FeaturedGames {
  /**
   * The suggested interval to wait before requesting FeaturedGames again
   */
  clientRefreshInterval?: number // int64
  /**
   * The list of featured games
   */
  gameList?: SpectatorV4FeaturedGameInfo[]
}
export interface SpectatorV4GameCustomizationObject {
  /**
   * Category identifier for Game Customization
   */
  category?: string
  /**
   * Game Customization content
   */
  content?: string
}
export interface SpectatorV4Observer {
  /**
   * Key used to decrypt the spectator grid game data for playback
   */
  encryptionKey?: string
}
export interface SpectatorV4Participant {
  /**
   * The ID of the profile icon used by this participant
   */
  profileIconId?: number // int64
  /**
   * The ID of the champion played by this participant
   */
  championId?: number // int64
  /**
   * The summoner name of this participant
   */
  summonerName?: string
  /**
   * Flag indicating whether or not this participant is a bot
   */
  bot?: boolean
  /**
   * The ID of the second summoner spell used by this participant
   */
  spell2Id?: number // int64
  /**
   * The team ID of this participant, indicating the participant's team
   */
  teamId?: number // int64
  /**
   * The ID of the first summoner spell used by this participant
   */
  spell1Id?: number // int64
}
export interface SpectatorV4Perks {
  /**
   * Primary runes path
   */
  perkStyle?: number // int64
  /**
   * IDs of the perks/runes assigned.
   */
  perkIds?: number /* int64 */[]
  /**
   * Secondary runes path
   */
  perkSubStyle?: number // int64
}
/**
 * represents a summoner
 */
export interface SummonerV4SummonerDTO {
  /**
   * ID of the summoner icon associated with the summoner.
   */
  profileIconId?: number // int32
  /**
   * Summoner name.
   */
  name?: string
  /**
   * Encrypted PUUID. Exact length of 78 characters.
   */
  puuid?: string
  /**
   * Summoner level associated with the summoner.
   */
  summonerLevel?: number // int64
  /**
   * Date summoner was last modified specified as epoch milliseconds. The following events will update this timestamp: profile icon change, playing the tutorial or advanced tutorial, finishing a game, summoner name change
   */
  revisionDate?: number // int64
  /**
   * Encrypted summoner ID. Max length 63 characters.
   */
  id?: string
  /**
   * Encrypted account ID. Max length 56 characters.
   */
  accountId?: string
}
export interface TournamentStubV4LobbyEventDTO {
  /**
   * The type of event that was triggered
   */
  eventType?: string
  /**
   * The summonerId that triggered the event (Encrypted)
   */
  summonerId?: string
  /**
   * Timestamp from the event
   */
  timestamp?: string
}
export interface TournamentStubV4LobbyEventDTOWrapper {
  eventList?: TournamentStubV4LobbyEventDTO[]
}
export interface TournamentStubV4ProviderRegistrationParameters {
  /**
   * The provider's callback URL to which tournament game results in this region should be posted. The URL must be well-formed, use the http or https protocol, and use the default port for the protocol (http URLs must use port 80, https URLs must use port 443).
   */
  url: string
  /**
   * The region in which the provider will be running tournaments.
   *              (Legal values:  BR,  EUNE,  EUW,  JP,  LAN,  LAS,  NA,  OCE,  PBE,  RU,  TR)
   */
  region: 'BR' | 'EUNE' | 'EUW' | 'JP' | 'LAN' | 'LAS' | 'NA' | 'OCE' | 'PBE' | 'RU' | 'TR'
}
export interface TournamentStubV4TournamentCodeParameters {
  /**
   * The spectator type of the game.
   *              (Legal values:  NONE,  LOBBYONLY,  ALL)
   */
  spectatorType: 'NONE' | 'LOBBYONLY' | 'ALL'
  /**
   * The team size of the game. Valid values are 1-5.
   */
  teamSize: number // int32
  /**
   * The pick type of the game.
   *              (Legal values:  BLIND_PICK,  DRAFT_MODE,  ALL_RANDOM,  TOURNAMENT_DRAFT)
   */
  pickType: 'BLIND_PICK' | 'DRAFT_MODE' | 'ALL_RANDOM' | 'TOURNAMENT_DRAFT'
  /**
   * Optional list of encrypted summonerIds in order to validate the players eligible to join the lobby. NOTE: We currently do not enforce participants at the team level, but rather the aggregate of teamOne and teamTwo. We may add the ability to enforce at the team level in the future.
   */
  allowedSummonerIds?: string[]
  /**
   * The map type of the game.
   *              (Legal values:  SUMMONERS_RIFT,  TWISTED_TREELINE,  HOWLING_ABYSS)
   */
  mapType: 'SUMMONERS_RIFT' | 'TWISTED_TREELINE' | 'HOWLING_ABYSS'
  /**
   * Optional string that may contain any data in any format, if specified at all. Used to denote any custom information about the game.
   */
  metadata?: string
}
export interface TournamentStubV4TournamentRegistrationParameters {
  /**
   * The provider ID to specify the regional registered provider data to associate this tournament.
   */
  providerId: number // int32
  /**
   * The optional name of the tournament.
   */
  name?: string
}
export interface TournamentV4LobbyEventDTO {
  /**
   * Timestamp from the event
   */
  timestamp?: string
  /**
   * The summonerId that triggered the event (Encrypted)
   */
  summonerId?: string
  /**
   * The type of event that was triggered
   */
  eventType?: string
}
export interface TournamentV4LobbyEventDTOWrapper {
  eventList?: TournamentV4LobbyEventDTO[]
}
export interface TournamentV4ProviderRegistrationParameters {
  /**
   * The provider's callback URL to which tournament game results in this region should be posted. The URL must be well-formed, use the http or https protocol, and use the default port for the protocol (http URLs must use port 80, https URLs must use port 443).
   */
  url: string
  /**
   * The region in which the provider will be running tournaments.
   *              (Legal values:  BR,  EUNE,  EUW,  JP,  LAN,  LAS,  NA,  OCE,  PBE,  RU,  TR)
   */
  region: 'BR' | 'EUNE' | 'EUW' | 'JP' | 'LAN' | 'LAS' | 'NA' | 'OCE' | 'PBE' | 'RU' | 'TR'
}
export interface TournamentV4TournamentCodeDTO {
  /**
   * The game map for the tournament code game
   */
  map?: string
  /**
   * The tournament code.
   */
  code?: string
  /**
   * The spectator mode for the tournament code game.
   */
  spectators?: string
  /**
   * The tournament code's region.
   *              (Legal values:  BR,  EUNE,  EUW,  JP,  LAN,  LAS,  NA,  OCE,  PBE,  RU,  TR)
   */
  region?: 'BR' | 'EUNE' | 'EUW' | 'JP' | 'LAN' | 'LAS' | 'NA' | 'OCE' | 'PBE' | 'RU' | 'TR'
  /**
   * The provider's ID.
   */
  providerId?: number // int32
  /**
   * The team size for the tournament code game.
   */
  teamSize?: number // int32
  /**
   * The summonerIds of the participants (Encrypted)
   */
  participants?: string[]
  /**
   * The pick mode for tournament code game.
   */
  pickType?: string
  /**
   * The tournament's ID.
   */
  tournamentId?: number // int32
  /**
   * The lobby name for the tournament code game.
   */
  lobbyName?: string
  /**
   * The password for the tournament code game.
   */
  password?: string
  /**
   * The tournament code's ID.
   */
  id?: number // int32
  /**
   * The metadata for tournament code.
   */
  metaData?: string
}
export interface TournamentV4TournamentCodeParameters {
  /**
   * The spectator type of the game.
   *              (Legal values:  NONE,  LOBBYONLY,  ALL)
   */
  spectatorType: 'NONE' | 'LOBBYONLY' | 'ALL'
  /**
   * The team size of the game. Valid values are 1-5.
   */
  teamSize: number // int32
  /**
   * The pick type of the game.
   *              (Legal values:  BLIND_PICK,  DRAFT_MODE,  ALL_RANDOM,  TOURNAMENT_DRAFT)
   */
  pickType: 'BLIND_PICK' | 'DRAFT_MODE' | 'ALL_RANDOM' | 'TOURNAMENT_DRAFT'
  /**
   * Optional list of encrypted summonerIds in order to validate the players eligible to join the lobby. NOTE: We currently do not enforce participants at the team level, but rather the aggregate of teamOne and teamTwo. We may add the ability to enforce at the team level in the future.
   */
  allowedSummonerIds?: string[]
  /**
   * The map type of the game.
   *              (Legal values:  SUMMONERS_RIFT,  TWISTED_TREELINE,  HOWLING_ABYSS)
   */
  mapType: 'SUMMONERS_RIFT' | 'TWISTED_TREELINE' | 'HOWLING_ABYSS'
  /**
   * Optional string that may contain any data in any format, if specified at all. Used to denote any custom information about the game.
   */
  metadata?: string
}
export interface TournamentV4TournamentCodeUpdateParameters {
  /**
   * The spectator type
   *              (Legal values:  NONE,  LOBBYONLY,  ALL)
   */
  spectatorType: 'NONE' | 'LOBBYONLY' | 'ALL'
  /**
   * The pick type
   *              (Legal values:  BLIND_PICK,  DRAFT_MODE,  ALL_RANDOM,  TOURNAMENT_DRAFT)
   */
  pickType: 'BLIND_PICK' | 'DRAFT_MODE' | 'ALL_RANDOM' | 'TOURNAMENT_DRAFT'
  /**
   * Optional list of encrypted summonerIds in order to validate the players eligible to join the lobby. NOTE: We currently do not enforce participants at the team level, but rather the aggregate of teamOne and teamTwo. We may add the ability to enforce at the team level in the future.
   */
  allowedSummonerIds?: string[]
  /**
   * The map type
   *              (Legal values:  SUMMONERS_RIFT,  TWISTED_TREELINE,  HOWLING_ABYSS)
   */
  mapType: 'SUMMONERS_RIFT' | 'TWISTED_TREELINE' | 'HOWLING_ABYSS'
}
export interface TournamentV4TournamentRegistrationParameters {
  /**
   * The provider ID to specify the regional registered provider data to associate this tournament.
   */
  providerId: number // int32
  /**
   * The optional name of the tournament.
   */
  name?: string
}
