module.exports = (sequelize, type) => {
  return sequelize.define("reporters", {
    id: {
      type: type.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    framework_id: type.INTEGER,
    reporter: type.STRING,
  })
}
