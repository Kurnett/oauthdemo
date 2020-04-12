var express = require('express');
var router = express.Router();

let token = '';

/* GET home page. */
router.get('/', function(req, res, next) {
  console.log("Loading, current token:", token)
  res.render('index', { token })
});

router.get('/auth', (req, res, next) => {
  console.log(req.query)
  console.log("Setting token:", req.query.access_token)
  if (req.query.access_token) token = req.query.access_token
  res.redirect('/')
})

module.exports = router;
