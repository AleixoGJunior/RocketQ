const express = require('express')
const QuestionController = require('./controllers/QuestionController')
const RoomController = require('./controllers/RoomController')

const router = express.Router()

router.get('/', (request, response) =>  response.render("index", { page: 'enter-room' }))

router.get('/create-room', (request, response) => response.render("index", { page: 'create-room' }))
router.post('/create-room', RoomController.create)

router.get('/room/:roomId', (request, response) => response.render("room"))

router.post('/question/:room/:question/:action', QuestionController.index)

module.exports = router;