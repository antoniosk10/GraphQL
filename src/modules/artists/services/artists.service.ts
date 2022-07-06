import { Service } from "../../Service";

export const artistsService = new Service(process.env.ARTISTS_URL as string);
