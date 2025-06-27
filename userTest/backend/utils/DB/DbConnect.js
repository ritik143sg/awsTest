const { Sequelize } = require("sequelize");

const sequelize = new Sequelize("awsTest", "root", "22523233", {
  host: "localhost",
  dialect: "mysql",
});

(async () => {
  try {
    await sequelize.authenticate();
    console.log("DataBase Connected");
  } catch (error) {
    console.log("DataBase error", error);
  }
})();

module.exports = sequelize;
