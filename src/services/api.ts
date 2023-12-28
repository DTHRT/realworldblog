import { ILogin, IRegister, IUser } from "./types";
export default class Api {
  #apiBase = "https://blog.kata.academy/api";

  async getPosts(offset: number = 0, limit: number = 5) {
    try {
      const response = await fetch(
        this.#apiBase + `/articles?limit=${limit}&offset=${offset}`,
      );
      if (!response.ok) {
        throw new Error(response.statusText);
      }

      return await response.json();
    } catch (e) {
      console.error(e);
    }
  }

  async getPost(slug: string = "") {
    try {
      const response = await fetch(this.#apiBase + `/articles/${slug}`);
      if (!response.ok) {
        throw new Error(response.statusText);
      }

      return await response.json();
    } catch (e) {
      console.error(e);
    }
  }

  async login(body: ILogin) {
    try {
      const response = await fetch(this.#apiBase + "/users/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ user: body }),
      });
      const data = await response.json();

      if (!response.ok) {
        throw data;
      }

      localStorage.setItem("user", JSON.stringify(data));
      return data;
    } catch (e: any) {
      return e;
    }
  }

  async register(body: IRegister) {
    try {
      const response = await fetch(this.#apiBase + "/users", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ user: body }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw data;
      }

      return data;
    } catch (e: any) {
      return e;
    }
  }

  async editProfile(body: IUser, token: string) {
    try {
      const response = await fetch(this.#apiBase + "/user", {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Token ${token}`,
        },
        body: JSON.stringify({ user: body }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw data;
      }

      return data;
    } catch (e: any) {
      return e;
    }
  }
}
