const users = [];

function generateUser(id, username) {
    const user = { id, username };
    users.push(user);
    return user;
  }

function getCurrentUser(id) {
  return users.find(user => user.id === id);
}

module.exports = {
  generateUser,
  getCurrentUser
}