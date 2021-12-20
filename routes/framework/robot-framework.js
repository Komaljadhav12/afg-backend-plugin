const express = require("express")
const utils = require("../../utils")
const shell = require("shelljs")
const colors = require("colors")

const router = express.Router()

// create a folder structure for robot framework
const createFolderStructure = () => {
  shell.mkdir("./Res")
  shell.mkdir("./TestSuite")
  shell.mkdir("./VariableFiles")
  shell.mkdir("./ExternalFiles")
  shell.mkdir("./Lib")

  console.log(shell.pwd().stdout.red)
  utils.changePathToWorkingDirectory()
  console.log(shell.pwd().stdout.red)
}

// import files on structure created
const importDependencies = () => {
  shell.cp(
    `./bin/robot/res.robot`,
    "../automation-framework/robot-framework/Res"
  )

  shell.cp(
    `./bin/robot/test.robot`,
    "../automation-framework/robot-framework/TestSuite"
  )

  shell.cp(
    `./bin/robot/chromedriver.exe`,
    "../automation-framework/robot-framework/TestSuite"
  )

  shell.cp(
    `./bin/robot/var.py`,
    "../automation-framework/robot-framework/VariableFiles"
  )

  shell.cd("../automation-framework/robot-framework/TestSuite")
}

// generate robot framework script
const robotFrameworkScript = (commands, version, library) => {
  if (version) {
    commands.push(`pip install robotframework==${version}`)
  } else {
    commands.push(`pip install robotframework`)
  }

  commands.push(`pip install robotframework-${library}`)
  commands.push(`python -m robot test.robot`)
}

router.post("/generate-robot", (req, res) => {
  const { version, framework, reporter, packageManager, library } = req.body

  let commands = []
  if (
    packageManager === "pip" &&
    framework === "robotframework" &&
    reporter === "robot-reporter"
  )
    robotFrameworkScript(commands, version, library)

  utils.print(packageManager)
  utils.print(version)
  utils.print(framework)

  utils.makeDirectory("robot")

  createFolderStructure()
  importDependencies()

  const result = utils.runCommand(commands)

  utils.changePathToWorkingDirectory()

  res.send(result)
})

module.exports = router
