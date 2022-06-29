import { RESTDataSource } from "apollo-datasource-rest";

class ArtistsService extends RESTDataSource {
  constructor() {
    super();
    this.baseURL = "https://odyssey-lift-off-rest-api.herokuapp.com/";
  }

  getTracksForHome() {
    return this.get("tracks");
  }

  getAuthor(authorId: any) {
    return this.get(`author/${authorId}`);
  }

  getTrack(trackId: any) {
    return this.get(`track/${trackId}`);
  }

  getTrackModules(trackId: any) {
    return this.get(`track/${trackId}/modules`);
  }

  getModule(moduleId: any) {
    return this.get(`module/${moduleId}`);
  }

  incrementTrackViews(trackId: any) {
    return this.patch(`track/${trackId}/numberOfViews`);
  }
}

export const artistsService = new ArtistsService();
