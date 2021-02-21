export interface ISignup {
  fName: string;
  lName: string;
  email: string;
  password: string;
  cPassword?: string;
  userImage?: Blob;
}

export interface ILogin {
  email: string;
  password: string;
}

export interface ICredentials {
  name: string;
  token: string;
  image: string;
  success: string;
  errors: string;
}

export interface IGames {
  mobileGames: {
    id: number;
    name: string;
    color: string;
    rating: number;
    image: string;
  }[];
  pcGames: {
    id: number;
    name: string;
    color: string;
    rating: number;
    image: string;
  }[];
  mostDownloadedGames: {
    id: number;
    name: string;
    color: string;
    rating: number;
    image: string;
  }[];
  suggestions: {
    id: number;
    name: string;
    color: string;
    rating: number;
    image: string;
  }[];
}

export interface IGamesAPI {
  games: IGames;
  categories: {
    id: number;
    name: string;
    image: string;
  }[];
  errors: string;
}