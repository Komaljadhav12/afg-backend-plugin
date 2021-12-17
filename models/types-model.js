module.exports = (sequelize, type) => {
  return sequelize.define("types", {
    id: {
      type: type.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    framework_type: type.STRING(200),
  })
}
