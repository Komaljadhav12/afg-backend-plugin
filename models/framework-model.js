module.exports = (sequelize, type) => {
  return sequelize.define("frameworks", {
    id: {
      type: type.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    lib_id: type.INTEGER,
    version: type.STRING,
    framework: type.STRING,
  })
}
