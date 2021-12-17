const express = require("express")
const utils = require("../../utils")

const { PackageManager } = require("../../sequelize")

const router = express.Router()

router.get("/package-manager", (req, res) => {
  PackageManager.findAll()
    .then((packageManagers) => {
      res.send(utils.createResult(null, packageManagers))
    })
    .catch((err) => {
      res.send(utils.createResult(err, null))
    })
})

router.post("/package-manager", (req, res) => {
  const { packageManager } = req.body

  console.log("package Manager :" + packageManager)

  PackageManager.create({ package_manager: packageManager })
    .then((packageManagers) => {
      res.send(utils.createResult(null, packageManagers))
    })
    .catch((err) => {
      res.send(utils.createResult(err, null))
    })
})

module.exports = router
