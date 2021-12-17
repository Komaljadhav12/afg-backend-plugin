const express = require("express")
const utils = require("../../utils")

const { Libraries } = require("../../sequelize")

const router = express.Router()

router.get("/lib", (req, res) => {
  Libraries.findAll()
    .then((libraries) => {
      res.send(utils.createResult(null, libraries))
    })
    .catch((err) => {
      res.send(utils.createResult(err, null))
    })
})

router.get("/lib/:id", (req, res) => {
  const lang_id = req.params.id

  Libraries.findAll({ where: { lang_id: lang_id } })
    .then((libraries) => {
      res.send(utils.createResult(null, libraries))
    })
    .catch((err) => {
      res.send(utils.createResult(err, null))
    })
})

router.post("/lib/:id", (req, res) => {
  const { lib } = req.body
  console.log("lib : " + lib)

  Libraries.create({
    lang_id: req.params.id,
    library: lib,
  })
    .then((libraries) => {
      res.send(utils.createResult(null, libraries))
    })
    .catch((err) => {
      res.send(utils.createResult(err, null))
    })
})

module.exports = router
