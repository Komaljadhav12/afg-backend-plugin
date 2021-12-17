const Sequelize = require("sequelize")

// importing the table structure from models

const typesModel = require("./models/types-model")

const libraryModel = require("./models/library-model")
const versionModel = require("./models/version-model")

const reporterModel = require("./models/reporter-model")
const languageModel = require("./models/language-model")

const frameworkModel = require("./models/framework-model")

const packageManagerModel = require("./models/package-manager-model")
const executionPlatformModel = require("./models/execution-platform-model")

// instantiate a database object

const sequelize = new Sequelize("project", "testuser", "Test@123", {
  host: "localhost",
  dialect: "mysql",
  pool: {
    max: 10,
    min: 0,
    acquire: 30000,
    idle: 10000,
  },
})

// authenticate the database access
// and establish a connection

sequelize
  .authenticate()
  .then(() => {
    console.log("Connection established successfully")
  })
  .catch((error) => {
    console.log("error " + error)
  })

// creates an instanace of a table

const Types = typesModel(sequelize, Sequelize)
const Versions = versionModel(sequelize, Sequelize)

const Languages = languageModel(sequelize, Sequelize)
const Libraries = libraryModel(sequelize, Sequelize)

const Frameworks = frameworkModel(sequelize, Sequelize)
const Reporters = reporterModel(sequelize, Sequelize)

const PackageManager = packageManagerModel(sequelize, Sequelize)
const ExecutionPlatform = executionPlatformModel(sequelize, Sequelize)

// defines the relationships

Languages.hasMany(Libraries, { foreignKey: "lang_id", sourceKey: "id" })
Libraries.hasMany(Frameworks, { foreignKey: "lib_id", sourceKey: "id" })

Frameworks.hasMany(Versions, { foreignKey: "framework_id", sourceKey: "id" })
Frameworks.hasMany(Reporters, { foreignKey: "framework_id", sourceKey: "id" })

sequelize.sync({ force: false }).then(() => {
  console.log("Database synced")
})

module.exports = {
  Types: Types,
  ExecutionPlatform: ExecutionPlatform,

  Languages: Languages,
  PackageManager: PackageManager,

  Libraries: Libraries,
  Frameworks: Frameworks,

  Versions: Versions,
  Reporters: Reporters,
}
