const express = require("express")
const utils = require("../../utils")

const router = express.Router()

router.post("/generate-cypress", (req, res) => {
  const { version, framework, reporter, packageManager } = req.body

  utils.makeDirectory("cypress")

  let commands = []
  if (packageManager == "npm" && framework == "cypress") {
    commands.push(`npm init -y`)

    if (version) {
      commands.push(`npm install cypress@${version} --save-dev`)
    } else {
      commands.push(`npm install cypress --save-dev`)
    }
    commands.push(`npm install --save-dev ${reporter}`)

    commands.push(`npx cypress open`)

    commands.push(`taskkill /IM Cypress.exe`)
    const specFiles =
      "cypress/integration/1-getting-started/todo.spec.js,cypress/integration/2-advanced-examples/misc.spec.js"

    commands.push(`npx cypress run --reporter ${reporter} --spec ${specFiles}`)
  }

  const result = utils.executeCommand(commands)

  if (result.status) {
    res.send(utils.createResult(result, null))
  } else {
    res.send(utils.createResult(null, "framework successfully generated!"))
  }
})

module.exports = router
