import { UserCard } from './UserCard.js';

export class UserList {
  constructor(users) {
    this.users = users;
    this.filteredUsers = users;
    this.filterParams = {
      'name': 'Name',
      'username': 'Username',
      'email': 'Email',
      'phone': 'Phone',
      'website': 'Website',
      'company.name': 'Company Name',
      'address.city': 'Address'
    };
    this.activeFilterParam = null;
  }

  render() {
    const container = document.getElementById('user-list');
    container.innerHTML = '';
    this.filteredUsers.forEach(user => {
      const card = new UserCard(user);
      container.appendChild(card.render());
    });
  }

  filter(query) {
    this.filteredUsers = this.users.filter(user => {
      if (this.activeFilterParam) {
        const value = this.getNestedValue(user, this.activeFilterParam);
        return typeof value === 'string' && value.toLowerCase().includes(query.toLowerCase());
      } else {
        return Object.keys(this.filterParams).some(param => {
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

    const allButton = document.createElement('button');
    allButton.textContent = 'All';
    allButton.classList.add('filter-button');
    allButton.addEventListener('click', () => this.setActiveFilter(null));
    container.appendChild(allButton);
    
    Object.entries(this.filterParams).forEach(([param, label]) => {
      const button = document.createElement('button');
      button.textContent = label;
      button.classList.add('filter-button');
      button.addEventListener('click', () => this.setActiveFilter(param));
      container.appendChild(button);
    });

    this.updateActiveButtonStyle();
  }

  setActiveFilter(param) {
    this.activeFilterParam = param;
    this.updateActiveButtonStyle();
    const query = document.getElementById('filter-input').value;
    this.filter(query);
  }

  updateActiveButtonStyle() {
    const buttons = document.querySelectorAll('.filter-button');
    buttons.forEach(button => {
      const filterName = this.activeFilterParam
        ? this.filterParams[this.activeFilterParam]
        : 'All';
      if (button.textContent === filterName) {
        button.classList.add('active');
      } else {
        button.classList.remove('active');
      }
    });
  }
}
