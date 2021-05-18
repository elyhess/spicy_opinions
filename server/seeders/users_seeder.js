module.exports = {
  up: (queryInterface, sequelize) => {
    return queryInterface.bulkInsert("Users", [
      {
        email: "user@example.com",
        password: "123"
      },
      {
        email: "x@x.com",
        password: "password"
      }
    ], {})
  },

  down: (queryInterface, sequelize) => {
    return queryInterface.bulkDelete("Users", null, {});
  }
};