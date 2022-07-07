import { Pagination } from "../../types";
import { InputTrack } from "../tracks.types";

export const tracksResolver = {
  Query: {
    tracks: (
      _: any,
      { pagination }: { pagination: Pagination },
      { dataSources }: any
    ) => dataSources.tracksService.getItems(pagination),
    track: (_: any, { id }: { id: string }, { dataSources }: any) =>
      dataSources.tracksService.getItem(id),
  },

  Mutation: {
    createTrack: (
      _: any,
      { input }: { input: InputTrack },
      { dataSources }: any
    ) => dataSources.tracksService.createItem(input),
    deleteTrack: (_: any, { id }: { id: string }, { dataSources }: any) =>
      dataSources.tracksService.deleteItem(id),
    updateTrack: (
      _: any,
      { id, input }: { id: string; input: InputTrack },
      { dataSources }: any
    ) => dataSources.tracksService.updateItem(id, input),
  },

  Track: {
    id: ({ _id }: { _id: string }) => _id,
    bands: (
      { bandsIds }: { bandsIds: Array<string> },
      _: any,
      { dataSources }: any
    ) => dataSources.bandsService.getItemsByIds(bandsIds),
    artists: (
      { artistsIds }: { artistsIds: Array<string> },
      _: any,
      { dataSources }: any
    ) => dataSources.artistsService.getItemsByIds(artistsIds),
    genres: (
      { genresIds }: { genresIds: Array<string> },
      _: any,
      { dataSources }: any
    ) => dataSources.genresService.getItemsByIds(genresIds),
    album: ({ albumId }: any, _: any, { dataSources }: any) => {
      dataSources.albumsService.getItem(albumId);
    },
  },
};
