var express = require('express');
var router = express.Router();
var cont = require('../Controllers/twattController.js')
const OAuth = require('oauth');

/* GET home page. */
router.get('/search', cont.searchTwatt);
router.get('/timeLine', cont.timeLine);
router.post('/cuit', cont.cuitCuit);

module.exports = router;
