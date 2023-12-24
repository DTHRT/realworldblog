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
}
