export interface IPlanet {
  created: string;
  dimension: string;
  id: number;
  name: string;
  residents: string[]; // Массив ссылок на жителей, предполагается, что это строки
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
