const main = async rengar => {
  const providerID = await rengar.TournamentStub.registerProviderData(
    'na',
    'https://localhost/cb',
  )
  const tournamentID = await rengar.TournamentStub.register(providerID, 'kappa')
  const codes = await rengar.TournamentStub.create(tournamentID, {
    mapType: 'SUMMONERS_RIFT',
    metadata: 'Kappa',
    pickType: 'TOURNAMENT_DRAFT',
    spectatorType: 'NONE',
    teamSize: 5,
  }).query({ count: 5 })

  console.log(codes)
}

module.exports = main
