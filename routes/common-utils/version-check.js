const express = require("express")
const shell = require("shelljs")

const utils = require("../../utils")

const router = express.Router()

// checks if nodejs installed on local machine

router.get("/node/v", (req, res) => {
  const { stdout, stderr } = shell.exec(`node -v`)

  if (stderr) {
    console.log(stderr.red)

    res.send(utils.createResult("You need to install the prerequisites", null))
  } else {
    console.log(stdout.green)

    res.send(utils.createResult(null, "Node Is installed!"))
  }
})

// checks if java installed on local machine

router.get("/java/v", (req, res) => {
  const { stdout, stderr } = shell.exec(`java -v`)

  if (stderr) {
    console.log(stderr.red)

    res.send(utils.createResult("You need to install the prerequisites", null))
  } else {
    console.log(stdout.green)

    res.send(utils.createResult(null, "Java Is installed!"))
  }
})

// checks if python installed on local machine

router.get("/python/v", (req, res) => {
  const { stdout, stderr } = shell.exec(`python --version`)

  if (stderr) {
    console.log(stderr.red)

    res.send(utils.createResult("You need to install the prerequisites", null))
  } else {
    console.log(stdout.green)

    res.send(utils.createResult(null, "Python Is installed!"))
  }
})

module.exports = router
