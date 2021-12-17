const express = require("express")
const utils = require("../../utils")

const { Reporters } = require("../../sequelize")

const router = express.Router()

router.get("/reporter", (req, res) => {
  Reporters.findAll()
    .then((reporters) => {
      res.send(utils.createResult(null, reporters))
    })
    .catch((err) => {
      res.send(utils.createResult(err, null))
    })
})

router.get("/reporter/:id", (req, res) => {
  const framework_id = req.params.id

  Reporters.findAll({ where: { framework_id: framework_id } })
    .then((reporters) => {
      res.send(utils.createResult(null, reporters))
    })
    .catch((err) => {
      res.send(utils.createResult(err, null))
    })
})

router.post("/reporter/:id", (req, res) => {
  const { reporter } = req.body
  console.log("reporter : " + reporter)

  Reporters.create({
    framework_id: req.params.id,
    reporter: reporter,
  })
    .then((reporters) => {
      res.send(utils.createResult(null, reporters))
    })
    .catch((err) => {
      res.send(utils.createResult(err, null))
    })
})

module.exports = router
