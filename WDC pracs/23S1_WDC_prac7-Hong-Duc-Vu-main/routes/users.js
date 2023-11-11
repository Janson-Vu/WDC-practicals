var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

let blog_posts = [];
router.post('/addpost', function(req, res, next){
  blog_posts.unshift(req.body);
  res.end();
});

router.get('/getposts', function(req, res, next){
  //blog_posts.reverse();
  //console.log(blog_posts);

  let post_num = req.query.n;

  res.json(blog_posts.slice(0, post_num));
  //res.end();
});

router.get('/getposts/id/:n', function(req, res, next){
  let post_index = (blog_posts.length -1) - req.params.n;
  res.json(blog_posts[post_index]);
});

router.get('/accepted', function(req, res, next){
  if (req.session.accept){
    res.send('It works');
  }else{
    res.sendStatus(403);
  }
});

module.exports = router;
