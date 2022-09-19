"use strict"

class UserStorage {
    static #users = {
    id: ["lodi", "sang"],
    password: ["1234", "123123"],
    name: ["김상우", "상우"]
  };

  static getUsers(...fields) {
    const users = this.#users;
    const newUsers = fields.reduce((newUsers, field) => {
      if (users.hasOwnProperty(field)){
        newUsers[field] = users[field];
      }
      return newUsers;
    },{});
    return newUsers;
  }

  static getUserInfo(id) {
    const users = this.#users;
    const idx = users.id.indexOf(id);
    const userkeys = Object.keys(users);
    const userInfo = userkeys.reduce((newUsers, info) => {
      newUsers[info] = users[info][idx];
      return newUsers;
    }, {});
    return userInfo;
  }
}

module.exports = UserStorage;