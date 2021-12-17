const express = require("express")
const utils = require("../../utils")

const router = express.Router()

router.post("/generate-webdriverio", (req, res) => {
  const { version, framework, reporter, packageManager } = req.body

  let commands = []
  if (packageManager === "npm" && version === "v7") {
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
  } else {
    commands.push("npm init wdio . --yes")
    commands.push(`npx wdio run ./wdio.conf.js --reporter ${reporter}`)
  }
  console.log(packageManager)

  console.log(version)
  console.log(reporter)

  utils.makeDirectory("webdriverIO")

  const result = utils.runCommand(commands)

  res.send(result)
})

module.exports = router
