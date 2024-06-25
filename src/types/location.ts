export interface IPlanet {
  created: string;
  dimension: string;
  id: number;
  name: string;
  residents: string[]; // Массив ссылок на жителей, предполагается, что это строки
  type: string;
  url: string;
}

export interface IEpisode {
  air_date: string;
  characters: string[];
  created: string;
  episode: string;
  id: number;
  name: string;
  url: string;
}

export interface ICharacter {
  created: string;
  episode: string[];
  gender: string;
  id: number;
  image: string;
  location: {
    name: string;
    url: string;
  };
  name: string;
  origin: {
    name: string;
    url: string;
  };
  species: string;
  status: string;
  type: string;
  url: string;
}


export interface IPageInfoLocations {
  count: number;
  next: string | null;
  pages: number;
  prev: string | null;
}

export interface ILocationsData {
  info: IPageInfoLocations;
  results: IPlanet[];
}

export interface IEpisodesData {
  info: IPageInfoLocations;
  results: IEpisode[];
}

export interface ICharactersData {
  info: IPageInfoLocations;
  results: ICharacter[];
}
