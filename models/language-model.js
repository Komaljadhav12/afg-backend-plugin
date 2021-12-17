module.exports = (sequelize, type) => {
  return sequelize.define("languages", {
    id: {
      type: type.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    language: type.STRING(200),
  })
}
