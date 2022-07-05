export const artistsResolver = {
  Query: {
    artists: (_: any, __: any, { dataSources }: any) =>
      dataSources.artistsService.getArtists(),
    artist: (_: any, { id }: { id: string }, { dataSources }: any) =>
      dataSources.artistsService.getArtist(id),
  },

  Artist: {
    bands: (
      { bandsIds }: { bandsIds: Array<string> },
      _: any,
      { dataSources }: any
    ) => dataSources.bandsService.getBandsByIds(bandsIds),
  },
};
