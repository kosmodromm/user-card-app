export class API {
  static USERS_ENDPOINT  = 'https://jsonplaceholder.typicode.com/users';

  static async getUsers() {
    try {
      const response = await fetch(this.USERS_ENDPOINT);
      return await response.json();
    } catch (error) {
      console.error('Error fetching users:', error);
      return [];
    }
  }
}
