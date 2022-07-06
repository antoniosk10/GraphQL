import { InputArtist } from "../artists.types";

export const artistsResolver = {
  Query: {
    artists: (_: any, __: any, { dataSources }: any) =>
      dataSources.artistsService.getItems(),
    artist: (_: any, { id }: { id: string }, { dataSources }: any) =>
      dataSources.artistsService.getItem(id),
  },

  Mutation: {
    createArtist: (
      _: any,
      { input }: { input: InputArtist },
      { dataSources }: any
    ) => dataSources.artistsService.createItem(input),
    deleteArtist: (_: any, { id }: { id: string }, { dataSources }: any) =>
      dataSources.artistsService.deleteItem(id),
    updateArtist: (
      _: any,
      { id, input }: { id: string; input: InputArtist },
      { dataSources }: any
    ) => dataSources.artistsService.updateItem(id, input),
  },

  Artist: {
    id: ({ _id }: { _id: string }) => _id,
    bands: (
      { bandsIds }: { bandsIds: Array<string> },
      _: any,
      { dataSources }: any
    ) => dataSources.bandsService.getItemsByIds(bandsIds),
  },
};
