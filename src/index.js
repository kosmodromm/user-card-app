import { API } from './API.js';
import { UserList } from './UserList.js';
import { debounce } from './utils.js';
import './styles.css';

async function init() {
  const api = new API();
  const users = await api.getUsers();
  const userList = new UserList(users);
  userList.render();
  userList.createFilterButtons();

  const filterInput = document.getElementById('filter-input');
  const debouncedFilter = debounce((query) => userList.filter(query), 500);

  filterInput.addEventListener('input', (e) => {
    debouncedFilter(e.target.value);
  });
}

init();
