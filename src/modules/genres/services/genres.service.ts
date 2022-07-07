import { Service } from "../../Service";

export const genresService = new Service(process.env.GENRES_URL as string);
