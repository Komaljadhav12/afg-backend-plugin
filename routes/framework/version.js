const express = require("express")
const utils = require("../../utils")

const { Versions } = require("../../sequelize")

const router = express.Router()

router.get("/version", (req, res) => {
  Versions.findAll()
    .then((versions) => {
      res.send(utils.createResult(null, versions))
    })
    .catch((err) => {
      res.send(utils.createResult(err, null))
    })
})

router.get("/version/:id", (req, res) => {
  const framework_id = req.params.id

  Versions.findAll({ where: { framework_id: framework_id } })
    .then((versions) => {
      res.send(utils.createResult(null, versions))
    })
    .catch((err) => {
      res.send(utils.createResult(err, null))
    })
})

router.post("/version/:id", (req, res) => {
  const { version } = req.body
  console.log("lib : " + version)

  Versions.create({
    framework_id: req.params.id,
    version: version,
  })
    .then((versions) => {
      res.send(utils.createResult(null, versions))
    })
    .catch((err) => {
      res.send(utils.createResult(err, null))
    })
})

module.exports = router
