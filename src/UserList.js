import { UserCard } from './UserCard.js';

export class UserList {
  constructor(users) {
    this.users = users;
    this.filteredUsers = users;
    this.filterParams = ['name', 'username', 'email', 'phone', 'website', 'company name', 'address city'];
  }

  render() {
    const container = document.getElementById('user-list');
    container.innerHTML = '';
    this.filteredUsers.forEach(user => {
      const card = new UserCard(user);
      container.appendChild(card.render());
    });
  }

  filter(query, param = null) {
    this.filteredUsers = this.users.filter(user => {
      if (param) {
        const value = this.getNestedValue(user, param);
        return typeof value === 'string' && value.toLowerCase().includes(query.toLowerCase());
      } else {
        return this.filterParams.some(param => {
          const value = this.getNestedValue(user, param);
          return typeof value === 'string' && value.toLowerCase().includes(query.toLowerCase());
        });
      }
    });
    this.render();
  }

  getNestedValue(obj, path) {
    return path.split('.').reduce((acc, part) => acc && acc[part], obj);
  }

  createFilterButtons() {
    const container = document.getElementById('filter-buttons');
    container.innerHTML = '';
    this.filterParams.forEach(param => {
      const button = document.createElement('button');
      button.textContent = param;
      button.addEventListener('click', () => {
        const query = document.getElementById('filter-input').value;
        this.filter(query, param);
      });
      container.appendChild(button);
    });
  }
}
