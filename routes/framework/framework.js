const express = require("express")
const utils = require("../../utils")

const { Frameworks } = require("../../sequelize")

const router = express.Router()

router.get("/framework", (req, res) => {
  Frameworks.findAll()
    .then((frameworks) => {
      res.send(utils.createResult(null, frameworks))
    })
    .catch((err) => {
      res.send(utils.createResult(err, null))
    })
})

router.get("/framework/:id", (req, res) => {
  const lib_id = req.params.id

  Frameworks.findAll({ where: { lib_id: lib_id } })
    .then((frameworks) => {
      res.send(utils.createResult(null, frameworks))
    })
    .catch((err) => {
      res.send(utils.createResult(err, null))
    })
})

router.post("/framework/:id", (req, res) => {
  const { framework } = req.body
  console.log("lib : " + framework)

  Frameworks.create({
    lib_id: req.params.id,
    framework: framework,
  })
    .then((frameworks) => {
      res.send(utils.createResult(null, frameworks))
    })
    .catch((err) => {
      res.send(utils.createResult(err, null))
    })
})

module.exports = router
