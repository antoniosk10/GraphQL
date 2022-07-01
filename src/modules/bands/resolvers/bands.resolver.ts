import { getObjectsByIds } from "../../../utils/getObjectsByIds";

export const bandsResolver = {
  Query: {
    bands: (_: any, __: any, { dataSources }: any) =>
      dataSources.bandsService.getBands(),
    band: (_: any, { id }: { id: string }, { dataSources }: any) =>
      dataSources.bandsService.getBand(id),
  },
  Band: {
    genres: ({ genresIds }: any, _: any, { dataSources }: any) => {
      if (genresIds.length) {
        return getObjectsByIds(
          genresIds,
          dataSources.genresService.getGenre.bind(dataSources.genresService)
        );
      }
      return genresIds;
    },
  },
};
