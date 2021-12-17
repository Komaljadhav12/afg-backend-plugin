const express = require("express")
const utils = require("../../utils")

const { Languages } = require("../../sequelize")

const router = express.Router()

router.get("/lang", (req, res) => {
  Languages.findAll()
    .then((languages) => {
      res.send(utils.createResult(null, languages))
    })
    .catch((err) => {
      res.send(utils.createResult(err, null))
    })
})

router.post("/lang", (req, res) => {
  const { lang } = req.body

  console.log("language :" + lang)
  Languages.create({ language: lang })
    .then((languages) => {
      res.send(utils.createResult(null, languages))
    })
    .catch((err) => {
      res.send(utils.createResult(err, null))
    })
})

module.exports = router
