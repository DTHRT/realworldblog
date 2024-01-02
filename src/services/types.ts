export interface IRegister {
  username: string
  email: string
  password: string
}

export interface ILogin {
  email: string
  password: string
}

export interface IUser {
  email: string
  username: string
  image: string
  password: string
}

export interface IPost {
  title: string
  description: string
  tagList: string[]
}

export interface IAuthor {
  username: string
  image: string
  following: boolean
}

export interface IArticle {
  slug: string
  title: string
  description: string
  createdAt: string
  updatedAt: string
  tagList: string[]
  favorited: boolean
  favoritesCount: number
  author: IAuthor
}
