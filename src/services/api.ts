export default class Api {
  #apiBase = "https://blog.kata.academy/api";

  async getPosts() {
    try {
      const response = await fetch(this.#apiBase + "/articles?limit=5");
      if (!response.ok) {
        throw new Error(response.statusText);
      }

      return await response.json();
    } catch (e) {
      console.error(e);
    }
  }
}
