module.exports = (sequelize, type) => {
  return sequelize.define("package_manager", {
    id: {
      type: type.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    package_manager: type.STRING(200),
  })
}
