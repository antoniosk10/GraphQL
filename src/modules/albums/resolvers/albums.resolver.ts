import { Pagination } from "../../types";
import { InputAlbum } from "../albums.types";

export const albumsResolver = {
  Query: {
    albums: (
      _: any,
      { pagination }: { pagination: Pagination },
      { dataSources }: any
    ) => dataSources.albumsService.getAlbums(pagination),
    album: (_: any, { id }: { id: string }, { dataSources }: any) =>
      dataSources.albumsService.getAlbum(id),
  },
  Mutation: {
    createAlbum: (
      _: any,
      { input }: { input: InputAlbum },
      { dataSources }: any
    ) => dataSources.albumsService.createAlbum(input),
    deleteAlbum: (_: any, { id }: any, { dataSources }: any) =>
      dataSources.albumsService.deleteAlbum(id),
    updateAlbum: (
      _: any,
      { id, input }: { id: string; input: InputAlbum },
      { dataSources }: any
    ) => dataSources.albumsService.updateAlbum(id, input),
  },
  Album: {
    id: ({ _id }: { _id: string }) => _id,
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
    tracks: (
      { tracksIds }: { tracksIds: Array<string> },
      _: any,
      { dataSources }: any
    ) => dataSources.tracksService.getTracksByIds(tracksIds),
    genres: (
      { genresIds }: { genresIds: Array<string> },
      _: any,
      { dataSources }: any
    ) => dataSources.genresService.getGenresByIds(genresIds),
  },
};
