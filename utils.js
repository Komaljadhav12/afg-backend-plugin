const { path } = require("path")
const shell = require("shelljs")

// creates an automation dir

const makeDirectory = (frameworkName) => {
  shell.mkdir("../automation-framework")
  shell.cd("../automation-framework")

  shell.mkdir(`./${frameworkName}-framework`)
  shell.cd(`./${frameworkName}-framework`)
}

// change dir to current working dir

const changePathToWorkingDirectory = () => {
  shell.cd(__dirname)
}

// This execute the commands and returns the result
// based on standard error (stderr)

const executeCommand = (arrCommands) => {
  let result = {}

  for (const command of arrCommands) {
    let error
    if (command.includes(`open`)) {
      let { stderr } = shell.exec(command, {
        timeout: 30000,
      })
      error = stderr
    } else {
      let { stderr } = shell.exec(command)
      error = stderr
    }
    if (error) {
      console.log("error :" + error)

      result["status"] = false
      result["error"] = error.message
    }
  }

  if (result.status === false) return result
  else {
    result["status"] = true
    result["data"] = "Command Execution Success"

    return result
  }
}

// This execute the commands and returns the result
// based on execution error (error)

const runCommand = (arrCommands) => {
  let result = {}
  for (const command of arrCommands) {
    let { error } = shell.exec(command)

    if (error) {
      console.log("error :" + error.message)

      result["status"] = "Failed"
      result["error"] = error.message
    }
  }
  if (result.status === "Failed") return result
  else {
    result["status"] = "Success"
    result["data"] = "Framework is successfully generated!"

    return result
  }
}

// executes the bash/shell file

const executeShellScript = (fileName) => {
  const { error, stderr, stdout } = shell.exec(`./${fileName}`)

  if (error) console.log(error.message)
  else {
    console.log(stderr)
    console.log(stdout)
  }
}

// creates a result object with status and data

const createResult = (error, data) => {
  const result = {}
  if (error) {
    result["status"] = "error"

    result["error"] = error
  } else {
    result["status"] = "success"

    result["data"] = data
  }
  return result
}

module.exports = {
  runCommand: runCommand,
  createResult: createResult,

  makeDirectory: makeDirectory,
  executeCommand: executeCommand,

  executeShellScript: executeShellScript,
  changePathToWorkingDirectory: changePathToWorkingDirectory,
}
