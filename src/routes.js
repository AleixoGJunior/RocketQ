const express = require('express')

const router = express.Router()

router.get('/', (request, response) =>  response.render("index"))
router.get('/room', (request, response) => response.render("room"))
router.get('/create-room', (request, response) => response.render("create-room"))

module.exports = router;