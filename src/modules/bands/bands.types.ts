export type InputBand = {
  name: String;
  origin?: String;
  members?: Array<string>;
  website?: String;
  genres?: Array<string>;
};

export type Members = {
  artist: string;
  instrument?: string;
  years?: Array<string>;
}[];
