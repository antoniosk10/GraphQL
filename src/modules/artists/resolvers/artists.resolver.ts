import { getObjectsByIds } from "../../../utils/getObjectsByIds";

export const artistsResolver = {
  Query: {
    artists: (_: any, __: any, { dataSources }: any) =>
      dataSources.artistsService.getArtists(),
    artist: (_: any, { id }: { id: string }, { dataSources }: any) =>
      dataSources.artistsService.getArtist(id),
  },

  Artist: {
    bands: ({ bandsIds }: any, _: any, { dataSources }: any) => {
      if (bandsIds.length) {
        return getObjectsByIds(
          bandsIds,
          dataSources.bandsService.getBand.bind(dataSources.bandsService)
        );
      }
      return bandsIds;
    },
  },
};
