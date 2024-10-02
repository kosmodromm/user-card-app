import { UserCardRenderer } from './UserCardRenderer.js';
import { UserFilter } from './UserFilter.js';

export class UserList {
  constructor(users) {
    this.filteredUsers = users;
    this.filterParams = {
      'username': 'Username',
      'name': 'Name',
      'email': 'Email',
      'phone': 'Phone',
      'website': 'Website',
      'company.name': 'Company Name',
      'address.city': 'City',
      'address.street': 'Street'
    };

    this.userFilter = new UserFilter(users, this.filterParams);
    this.userCardRenderer = new UserCardRenderer(document.getElementById('user-list'));

    this.createFilterButtons();
    this.render();
  }

  render() {
    this.userCardRenderer.render(this.filteredUsers);
  }

  filter(query) {
    this.filteredUsers = this.userFilter.filter(query);
    this.render();
  }

  createFilterButtons() {
    const container = document.getElementById('filter-buttons');
    container.innerHTML = '';

    const allButton = this.createButton('All', () => this.setActiveFilter(null));
    container.appendChild(allButton);

    Object.entries(this.filterParams).forEach(([param, label]) => {
      const button = this.createButton(label, () => this.setActiveFilter(param));
      container.appendChild(button);
    });

    this.updateActiveButtonStyle();
  }

  createButton(label, onClick) {
    const button = document.createElement('button');
    button.textContent = label;
    button.classList.add('filter-button');
    button.addEventListener('click', onClick);
    return button;
  }

  setActiveFilter(param) {
    this.userFilter.setActiveFilter(param);
    this.updateActiveButtonStyle();
    const query = document.getElementById('filter-input').value;
    this.filter(query);
  }

  updateActiveButtonStyle() {
    const buttons = document.querySelectorAll('.filter-button');
    buttons.forEach(button => {
      const filterName = this.userFilter.activeFilterParam
        ? this.filterParams[this.userFilter.activeFilterParam]
        : 'All';
      button.classList.toggle('active', button.textContent === filterName);
    });
  }
}
