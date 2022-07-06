import { Service } from "../../Service";

export const albumsService = new Service(process.env.ALBUMS_URL as string);
