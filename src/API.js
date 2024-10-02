export class API {
  constructor(baseUrl = 'https://jsonplaceholder.typicode.com') {
    this._baseUrl = baseUrl;
    this._endpoints = {
      users: `${this._baseUrl}/users`
    };
  }

  async _fetchData(url) {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    return await response.json();
  }

  async getUsers() {
    try {
      return await this._fetchData(this._endpoints.users);
    } catch (error) {
      console.error('Error fetching users:', error);
      throw error;
    }
  }
}

