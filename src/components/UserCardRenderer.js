import {UserCard} from "./UserCard";

export class UserCardRenderer {
  constructor(container) {
    this.container = container;
  }

  render(users) {
    this.container.innerHTML = '';
    users.forEach(user => {
      const card = new UserCard(user);
      this.container.appendChild(card.render());
    });
  }
}
