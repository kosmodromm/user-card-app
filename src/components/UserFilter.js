export class UserFilter {
  constructor(users, filterParams) {
    this.users = users;
    this.filterParams = filterParams;
    this.activeFilterParam = null;
  }

  filter(query) {
    return this.users.filter(user => {
      if (this.activeFilterParam) {
        return this.matchesFilter(user, query, this.activeFilterParam);
      } else {
        return Object.keys(this.filterParams).some(param =>
          this.matchesFilter(user, query, param)
        );
      }
    });
  }

  setActiveFilter(param) {
    this.activeFilterParam = param;
  }

  matchesFilter(user, query, param) {
    const value = this.getNestedValue(user, param);
    return typeof value === 'string' && value.toLowerCase().includes(query.toLowerCase());
  }

  getNestedValue(obj, path) {
    return path.split('.').reduce((acc, part) => acc && acc[part], obj);
  }
}
