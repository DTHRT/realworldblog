export default class Api {
  #apiBase = "https://blog.kata.academy/api";

  async getPosts() {
    try {
      const response = await fetch(this.#apiBase + "/articles");
      if (!response.ok) {
        throw new Error(response.statusText);
      }

      return await response.json();
    } catch (e) {
      console.error(e);
    }
  }
}
