import { getObjectsByIds } from "../../../utils/getObjectsByIds";

export const albumsResolver = {
  Query: {
    albums: (_: any, __: any, { dataSources }: any) =>
      dataSources.tracksService.getAlbums(),
    album: (_: any, { id }: { id: string }, { dataSources }: any) =>
      dataSources.tracksService.getAlbum(id),
  },
  Track: {
    bands: ({ bandsIds }: any, _: any, { dataSources }: any) => {
      if (bandsIds.length) {
        return getObjectsByIds(
          bandsIds,
          dataSources.bandsService.getBand.bind(dataSources.bandsService)
        );
      }
      return bandsIds;
    },
    artists: ({ artistsIds }: any, _: any, { dataSources }: any) => {
      if (artistsIds.length) {
        return getObjectsByIds(
          artistsIds,
          dataSources.artistsService.getArtist.bind(dataSources.artistsService)
        );
      }
      return artistsIds;
    },
    tracks: ({ tracksIds }: any, _: any, { dataSources }: any) => {
      if (tracksIds.length) {
        return getObjectsByIds(
          tracksIds,
          dataSources.tracksService.getTrack.bind(dataSources.tracksService)
        );
      }
      return tracksIds;
    },
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
