import { artistsResolver } from "./artists/resolvers/artists.resolver";
import { bandsResolver } from "./bands/resolvers/bands.resolver";
import { genresResolver } from "./genres/resolvers/genres.resolver";
import { tracksResolver } from "./tracks/resolvers/tracks.resolver";
import { albumsResolver } from "./albums/resolvers/albums.resolver";
import { userResolver } from "./user/resolvers/user.resolver";
import { favoritesResolver } from "./favorites/resolvers/favorites.resolver";

export default [
  artistsResolver,
  bandsResolver,
  genresResolver,
  tracksResolver,
  albumsResolver,
  userResolver,
  favoritesResolver,
];
