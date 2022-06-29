export const resolvers = {
  Query: {
    // returns an array of Tracks that will be used to populate the homepage grid of our web client
    tracksForHome: (_: any, __: any, { dataSources }: any) => {
      return dataSources.artistsService.getTracksForHome();
    },

    // get a single track by ID, for the track page
    track: (_: any, { id }: any, { dataSources }: any) => {
      return dataSources.artistsService.getTrack(id);
    },

    // get a single module by ID, for the module detail page
    module: (_: any, { id }: any, { dataSources }: any) => {
      return dataSources.artistsService.getModule(id);
    },
  },
  Mutation: {
    // increments a track's numberOfViews property
    incrementTrackViews: async (_: any, { id }: any, { dataSources }: any) => {
      try {
        const track = await dataSources.artistsService.incrementTrackViews(id);
        return {
          code: 200,
          success: true,
          message: `Successfully incremented number of views for track ${id}`,
          track,
        };
      } catch (err: any) {
        return {
          code: err.extensions.response.status,
          success: false,
          message: err.extensions.response.body,
          track: null,
        };
      }
    },
  },
  Track: {
    author: ({ authorId }: any, _: any, { dataSources }: any) => {
      return dataSources.artistsService.getAuthor(authorId);
    },

    modules: ({ id }: any, _: any, { dataSources }: any) => {
      return dataSources.artistsService.getTrackModules(id);
    },
  },
};
