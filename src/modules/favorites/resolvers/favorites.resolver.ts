import { InputBand } from "../bands.types";

export const bandsResolver = {
  // Query: {
  //   favourites: (_: any, __: any, { dataSources }: any) =>
  //     dataSources.bandsService.getBands(),
  // },

  Mutation: {
    createBand: (
      _: any,
      { input }: { input: InputBand },
      { dataSources }: any
    ) => dataSources.bandsService.createItem(input),
    deleteBand: (_: any, { id }: { id: string }, { dataSources }: any) =>
      dataSources.bandsService.deleteItem(id),
    updateBand: (
      _: any,
      { id, input }: { id: string; input: InputBand },
      { dataSources }: any
    ) => dataSources.bandsService.updateItem(id, input),
  },

  Band: {
    id: ({ _id }: { _id: string }) => _id,
    genres: (
      { genresIds }: { genresIds: Array<string> },
      _: any,
      { dataSources }: any
    ) => dataSources.genresService.getGenresByIds(genresIds),
  },
};
