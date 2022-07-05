export const tracksResolver = {
  Query: {
    tracks: (_: any, __: any, { dataSources }: any) =>
      dataSources.tracksService.getTracks(),
    track: (_: any, { id }: { id: string }, { dataSources }: any) =>
      dataSources.tracksService.getTrack(id),
  },
  Track: {
    bands: (
      { bandsIds }: { bandsIds: Array<string> },
      _: any,
      { dataSources }: any
    ) => dataSources.bandsService.getBandsByIds(bandsIds),
    artists: (
      { artistsIds }: { artistsIds: Array<string> },
      _: any,
      { dataSources }: any
    ) => dataSources.artistsService.getArtistsByIds(artistsIds),

    genres: (
      { genresIds }: { genresIds: Array<string> },
      _: any,
      { dataSources }: any
    ) => dataSources.genresService.getGenresByIds(genresIds),
    album: ({ albumId }: any, _: any, { dataSources }: any) => {
      dataSources.albumsService.getAlbum(albumId);
    },
  },
};
