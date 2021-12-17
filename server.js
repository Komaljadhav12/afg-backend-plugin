const express = require("express")
const cors = require("cors")
const morgan = require("morgan")

const routerCypress = require("./routes/framework/cypress-framework")
const routerLanguage = require("./routes/language/lang")
const routerLibrary = require("./routes/library/lib")
const routerVersionCheck = require("./routes/common-utils/version-check")
const routerTypes = require("./routes/types/types")
const routerFramework = require("./routes/framework/framework")
const routerVersion = require("./routes/framework/version")
const routerPackageManager = require("./routes/common-utils/package-manager")
const routerWebdriverIO = require("./routes/framework/webdriveIo-framework")
const routerReporter = require("./routes/reporter/reporter")
const routerRobot = require("./routes/framework/robot-framework")
const routerPlatform = require("./routes/execution-platform/platform")

const app = express()

app.use(express.json())
app.use(cors("*"))
app.use(morgan("combined"))

app.use(routerCypress)
app.use(routerLanguage)
app.use(routerLibrary)

app.use(routerVersionCheck)
app.use(routerTypes)

app.use(routerFramework)
app.use(routerPackageManager)
app.use(routerVersion)

app.use(routerReporter)
app.use(routerRobot)

app.use(routerPlatform)
app.use(routerWebdriverIO)

app.listen(4000, () => {
  console.log("server started on port 4000")
})
