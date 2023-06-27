// State types
export type Cords = {
  lat: number;
  lng: number;
};

export type Marker = Cords & {
  id?: number;
  address?: string;
};

export type ReadOnly = boolean;

export enum Locales {
  EN = "en",
  RU = "ru",
}

export type State = {
  markerList: Marker[];
  readOnly: ReadOnly;
  errorList: Error[];
  language: Locales;
};

// Map component types

export type Center = [number, number];

// Router types

export enum Routes {
  TASK_PATH = "/",
  MAP_PATH = "/map",
  MAP_MARKER_PATH = "/map/:marker?",
}

export type NavOption = {
  title: string;
  path: Routes;
};
