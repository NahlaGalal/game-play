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