export class UserCard {
  constructor(user) {
    this.user = user;
  }

  render() {
    const card = document.createElement('div');
    card.classList.add('user-card');
    card.innerHTML = `
            <h2>${this.user.name}</h2>
            <p>Username: ${this.user.username}</p>
            <p>Email: ${this.user.email}</p>
            <p>Phone: ${this.user.phone}</p>
            <p>Website: ${this.user.website}</p>
            <p>Company: ${this.user.company.name}</p>
            <p>Address: ${this.user.address.street}, ${this.user.address.city}</p>
        `;
    return card;
  }
}
