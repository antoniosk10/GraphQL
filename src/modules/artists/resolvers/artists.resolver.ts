export const ArtistsResolver = {
  Query: {
    artists: (_: any, __: any, { dataSources }: any) =>
      dataSources.artistsService.getArtists(),
    artist: (_: any, { id }: { id: string }, { dataSources }: any) =>
      dataSources.artistsService.getArtist(id),
  },

  Artist: {
    bands: ({ bandsIds }: any, _: any, { dataSources }: any) => {
      if (bandsIds.length) {
        return Promise.allSettled(
          bandsIds.map((id: string) => dataSources.bandsService.getBand(id))
        ).then((res) =>
          (res as PromiseFulfilledResult<any>[]).map((item) => ({
            ...item.value,
            id: item.value._id,
          }))
        );
      }
      return bandsIds;
    },
  },
};
