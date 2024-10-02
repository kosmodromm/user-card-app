export class UserCard {
  constructor(user) {
    this.user = user;
  }

  render() {
    const card = document.createElement('div');
    card.classList.add('user-card');
    this.setCardContent(card);
    return card;
  }

  setCardContent(card) {
    const title = document.createElement('h2');
    title.textContent = this.user.username;

    const details = [
      `Name: ${this.user.name}`,
      `Email: ${this.user.email}`,
      `Phone: ${this.user.phone}`,
      `Website: ${this.user.website}`,
      `Company Name: ${this.user.company.name}`,
      `City: ${this.user.address.city}`,
      `Street: ${this.user.address.street}`,
    ];

    details.forEach(detail => {
      const paragraph = document.createElement('p');
      paragraph.textContent = detail;
      card.appendChild(paragraph);
    });

    card.prepend(title);
  }
}
