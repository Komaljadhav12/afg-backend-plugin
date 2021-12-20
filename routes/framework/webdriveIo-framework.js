const express = require("express")
const utils = require("../../utils")

const router = express.Router()

// install webdriverIo v7 with npm script
const npmWebdriverV7Script = (commands, framework, reporter) => {
  commands.push("npm init -y")

  commands.push("npm install --save-dev @wdio/cli")

  commands.push("npx wdio config -y")
  commands.push(
    `npx wdio install framework ${framework} Install @wdio/${framework}-framework`
  )
  commands.push(
    `npx wdio install reporter ${reporter} Install @wdio/${reporter}-reporter`
  )
  commands.push(`npx wdio run ./wdio.conf.js  --reporter ${reporter}`)
}

const npmWebdriverV6Script = (commands, framework, reporter) => {
  // npm webdriver version 6 script here
}

const yarnWebdriverV7Script = (commands, framework, reporter) => {
  // yarn webdriver version 7 script here
}

const yarnWebdriverV6Script = (commands, framework, reporter) => {
  // yarn webdriver version 6 script here
}

router.post("/generate-webdriverio", (req, res) => {
  const { version, framework, reporter, packageManager } = req.body

  let commands = []

  if (packageManager === "npm" && version === "v7")
    npmWebdriverV7Script(commands, framework, reporter)
  else if (packageManager === "npm" && version === "v6")
    npmWebdriverV6Script(commands, framework, reporter)
  else if (packageManager === "yarn" && version === "v7")
    yarnWebdriverV7Script(commands, framework, reporter)
  else if (packageManager === "yarn" && version === "v6")
    yarnWebdriverV6Script(commands, framework, reporter)

  utils.print([packageManager, version, reporter])

  utils.makeDirectory("webdriverIO")

  const result = utils.runCommand(commands)

  utils.changePathToWorkingDirectory()

  res.send(result)
})

module.exports = router
