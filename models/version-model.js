module.exports = (sequelize, type) => {
  return sequelize.define("versions", {
    id: {
      type: type.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    framework_id: type.INTEGER,
    version: type.STRING,
  })
}
