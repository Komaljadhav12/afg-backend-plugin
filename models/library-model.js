module.exports = (sequelize, type) => {
  return sequelize.define("libraries", {
    id: {
      type: type.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    lang_id: type.INTEGER,
    library: type.STRING,
  })
}
