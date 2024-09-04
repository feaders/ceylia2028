var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index.ejs', { title: 'Express' });
});
// app.js
router.get('/biographie', (req, res) => {
  res.render('biographie', { title: 'Biographie' });
});

router.get('/photos', (req, res) => {
  res.render('photos', { title: 'Photos' });
});

router.get('/videos', (req, res) => {
  res.render('videos', { title: 'Vidéos' });
});

module.exports = router;
