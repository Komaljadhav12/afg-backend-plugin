module.exports = (sequelize, type) => {
  return sequelize.define("execution_platforms", {
    id: {
      type: type.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    platform: type.STRING(200),
  })
}
