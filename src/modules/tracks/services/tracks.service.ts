import { Service } from "../../Service";

export const tracksService = new Service(process.env.TRACKS_URL as string);
