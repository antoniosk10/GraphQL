import { Service } from "../../Service";

export const bandsService = new Service(process.env.BANDS_URL as string);
