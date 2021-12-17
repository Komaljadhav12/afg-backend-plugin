const express = require("express")
const utils = require("../../utils")
const shell = require("shelljs")

const router = express.Router()

const createFolderStructure = () => {
  shell.mkdir("./Res")
  shell.mkdir("./TestSuite")
  shell.mkdir("./VariableFiles")
  shell.mkdir("./ExternalFiles")
  shell.mkdir("./Lib")
  shell.cd("../../")
}

const importDependencies = () => {
  shell.cp(
    "./backend/bin/robot/res.robot",
    "./automation-framework/robot-framework/Res"
  )

  shell.cp(
    "./backend/bin/robot/test.robot",
    "./automation-framework/robot-framework/TestSuite"
  )

  shell.cp(
    "./backend/bin/robot/chromedriver.exe",
    "./automation-framework/robot-framework/TestSuite"
  )

  shell.cp(
    "./backend/bin/robot/var.py",
    "./automation-framework/robot-framework/VariableFiles"
  )

  shell.cd("./automation-framework/robot-framework/TestSuite")
}

router.post("/generate-robot", (req, res) => {
  const { version, framework, reporter, packageManager, library } = req.body

  let commands = []
  if (
    packageManager === "pip" &&
    framework === "robotframework" &&
    reporter === "robot-reporter"
  ) {
    if (version) {
      commands.push(`pip install robotframework==${version}`)
    } else {
      commands.push(`pip install robotframework`)
    }

    commands.push(`pip install robotframework-${library}`)
    commands.push(`python -m robot test.robot`)
  } else {
    commands.push(`pip install robotframework`)
    commands.push(`pip install robotframework-selenium2library`)

    commands.push(`python -m robot test.robot`)
  }
  console.log(packageManager)

  console.log(version)
  console.log(framework)

  utils.makeDirectory("robot")

  createFolderStructure()
  importDependencies()

  const result = utils.runCommand(commands)

  res.send(result)
})

module.exports = router
