"use strict"

const fs = require("fs").promises;

class UserStorage {
  static #getUserInfo(data, id) {
    const users = JSON.parse(data);
    const idx = users.id.indexOf(id);
    const userkeys = Object.keys(users);
    const userInfo = userkeys.reduce((newUsers, info) => {
      newUsers[info] = users[info][idx];
      return newUsers;
    }, {});
    return userInfo;
  }
    
  static getUsers(...fields) {
    // const users = this.#users;
    const newUsers = fields.reduce((newUsers, field) => {
      if (users.hasOwnProperty(field)){
        newUsers[field] = users[field];
      }
      return newUsers;
    },{});
    return newUsers;
  }

  static getUserInfo(id) {
    return fs.readFile("./src/database/users.json")
    .then((data) => {
      return this.#getUserInfo(data ,id);
    })
    .catch(console.error);
  }

  static save(userInfo) {
    // const users = this.#users;
    users.email.push(userInfo.email);
    users.id.push(userInfo.id);
    users.password.push(userInfo.password);
    return { success : true };
  }
}

module.exports = UserStorage;