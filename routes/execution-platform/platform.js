const express = require("express")
const utils = require("../../utils")

const { ExecutionPlatform } = require("../../sequelize")

const router = express.Router()

router.get("/execution-platform", (req, res) => {
  ExecutionPlatform.findAll()
    .then((platforms) => {
      res.send(utils.createResult(null, platforms))
    })
    .catch((err) => {
      res.send(utils.createResult(err, null))
    })
})

router.post("/execution-platform", (req, res) => {
  const { platform } = req.body

  console.log("platform :" + platform)

  ExecutionPlatform.create({ platform: platform })
    .then((platforms) => {
      res.send(utils.createResult(null, platforms))
    })
    .catch((err) => {
      res.send(utils.createResult(err, null))
    })
})

module.exports = router
