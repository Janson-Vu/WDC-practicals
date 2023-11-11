var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.post('/tcaccept', function(req, res, next){
  req.session.accept = true;
  res.send("It works");
});

router.get('/cookie', function(req, res, next){
  let req_cookie = req.cookies.task3_1;

  if (req_cookie){
    let new_val = parseInt(req_cookie, 10) + 1;
    res.cookie('task3_1', new_val.toString());
  }else{
    res.cookie("task3_1", "1");
  }
  res.send();
});

router.get('/brew', function(req, res, next){

  let q = req.query.drink;
  console.log(q);

  if (q === 'tea'){
    res.send('A delicious cup of tea!');
  }else if (q === 'coffee'){
    res.sendStatus(418);
  }else{
    res.sendStatus(400);
  }
});


let prev = 'first';
router.post('/pass-it-on', function(req, res, next){
  res.send(400);
});

router.post('/combine', function(req, res, next){
  let req_lines = req.body.lines;
  let req_suffix = req.body.suffix;

  for (let i=0; i<req_lines.length; i++){
    req_lines[i] += req_suffix;
  }

  req_lines = req_lines.join('\n');
  res.send(req_lines);
});



module.exports = router;
