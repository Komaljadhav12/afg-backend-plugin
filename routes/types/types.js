const express = require("express")
const utils = require("../../utils")

const { Types } = require("../../sequelize")

const router = express.Router()

router.get("/dashboard", (req, res) => {
  Types.findAll()
    .then((types) => {
      res.send(utils.createResult(null, types))
    })
    .catch((err) => {
      res.send(utils.createResult(err, null))
    })
})

router.post("/dashboard", (req, res) => {
  const { type } = req.body

  Types.create({ framework_type: type })
    .then((types) => {
      res.send(utils.createResult(null, types))
    })
    .catch((err) => {
      res.send(utils.createResult(err, null))
    })
})

module.exports = router
