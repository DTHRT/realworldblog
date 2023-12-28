export interface IRegister {
  username: string;
  email: string;
  password: string;
}

export interface ILogin {
  email: string;
  password: string;
}

export interface IUser {
  email: string;
  username: string;
  image: string;
  password: string;
}
