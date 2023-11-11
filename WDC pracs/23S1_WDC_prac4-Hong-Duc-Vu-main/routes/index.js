var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function (req, res, next) {
  res.render('index', { title: 'Express' });
});

// task 3-1 & task 4-1: return previous timestamp, AJAX request
let count_visit = 0;
let last_visited = null;
router.get('/last.txt', function (req, res, next) {

  count_visit++;
  if (count_visit === 1) {
    res.send();
  }
  else if (count_visit > 1){
    last_visited = new Date().toISOString();
    res.send(('This page was last viewed ' + last_visited));
  }
  //count_visit++;
});


// // task 3-2: /color.html
let color_visit = 0;
let colors = ['red', 'yellow', 'green', 'blue'];
router.get('/color.html', function (req, res, next) {

  if (color_visit > 3) {
    color_visit = 0;
  }

  let color = colors[color_visit];
  let heading = '';
  if (color === 'red') {
    heading = `<h1 style="color:red">red</h1>`;
  } else if (color === 'yellow') {
    heading = `<h1 style="color:yellow">yellow</h1>`;
  } else if (color === 'green') {
    heading = `<h1 style="color:green">green</h1>`;
  } else if (color === 'blue') {
    heading = `<h1 style="color:blue">blue</h1>`;
  }

  let page_data = `<!DOCTYPE html>
                  <html lang="en">
                  <head>
                      <title>task3-2</title>
                  </head>
                  <body>
                      ${heading}
                  </body>
                  </html>`;

  color_visit++;

  res.send(page_data);

});

// task 3-3: log time
let logs_html = [];
router.get('/log.html', function (req, res, next) {
  let time = new Date();
  logs_html.push(time);

  let times = `<ul>`;
  for (let time of logs_html) {
    let html_string = `<li>` + time + `</li>`;
    times += html_string;
  }
  times += `</ul>`;

  let page_data = `<!DOCTYPE html>
  <html lang="en">
  <head>
      <title>task3-3</title>
  </head>
  <body>
      ${times}
  </body>
  </html>`;

  res.send(page_data);

});

// task 3-4: redirect to other route
let first_visited = false;
router.get('/first.html', function (req, res, next) {

  if (!first_visited) {
    let page_data = `<!DOCTYPE html>
                  <html lang="en">
                  <head>
                      <title>task3-2</title>
                  </head>
                  <body>
                    <h1>Welcome</h1>
                    <a href="/main.html">/main.html</a>
                  </body>
                  </html>`;
    first_visited = true;
    res.send(page_data);
  } else {
    res.redirect('/main.html');
  }

});

let main_visited = false;
router.get('/main.html', function (req, res, next) {

  if (!first_visited) {
    res.redirect('/first.html');
  } else {
    let page_data = `<!DOCTYPE html>
                  <html lang="en">
                  <head>
                      <title>task3-2</title>
                  </head>
                  <body>
                    <h1>My main site</h1>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                  </body>
                  </html>`;
    res.send(page_data);
  }
});


// task 4-2: color.txt
let color_visit_txt = 0;
router.get('/color.txt', function (req, res, next) {
  let color = colors[color_visit_txt % 4];
  res.send(color);
  color_visit_txt++;
});

// task 4-3: timestamp json
let logs_json = [];
router.get('/log.json', function (req, res, next) {
  let time_stamp = new Date().toString();
  logs_json.push(time_stamp);
  res.json(logs_json);

});

router.get('/log-ro.json', function (req, res, next) {
  res.send(logs_json);
});

// task 4-4: contact, search, about
router.get('/contact.ajax', function (req, res, next) {
  let contact = `<div id="content-contact" style="display:inline-block" > <a href="hongduc.vu@student.adelaide.edu.au">email</a> </div>`;
  res.send(contact);
});

router.get('/search.ajax', function (req, res, next) {
  let content_data = `<div id="content-contact" style="display:inline-block" >
  <input type="text">
  <button type="submit" onclick="">search</button>
  </div>`;
  res.send(content_data);
});

router.get('/about.ajax', function (req, res, next) {
  res.send();
});

// task 4-5: terms-and-conditions box
let accept = false;
router.get('/accept', function (req, res, next) {
  accept = true;
  res.status(200).send("success");
});

router.get('/content.ajax', function (req, res, next) {
  if (accept == false) {
    res.status(403).send();
  }else{
    let data = `<p>Content load is sucessful.</p> <p>Way to go.</p>`;
    res.send(data);
  }
});


// task 4-6: load images
var images = [
  { uri: 'photo-1539154444419-e31272d30a31.jpg', description: 'medium-coated black-and-white dog near grass during daytime' },
  { uri: 'photo-1553882809-a4f57e59501d.jpg', description: 'black and tan Belgian dog' },
  { uri: 'photo-1554196721-b507d7e86ee9.jpg', description: 'gray dog standing on grass' },
  { uri: 'photo-1555661059-7e755c1c3c1d.jpg', description: 'black dog behind plants' },
  { uri: 'photo-1555991415-1b04a71f18c5.jpg', description: 'adult white Samoyed beside man and woman' },
  { uri: 'photo-1558121591-b684092bb548.jpg', description: 'white and black dog lying on sofa' },
  { uri: 'photo-1559440165-065646588e9a.jpg', description: 'person holding dog leash short-coat black and white dog' },
  { uri: 'photo-1560160643-7c9c6cb07a8b.jpg', description: 'short-coated brown and white dog' },
  { uri: 'photo-1562220058-1a0a019ab606.jpg', description: 'pet dog laying on sofa' },
  { uri: 'photo-1565194481104-39d1ee1b8bcc.jpg', description: 'short-coated gray dog' }
];

let count_display = 0;
router.get('/images.json', function (req, res, next) {
  let image = images[count_display % (images.length-1)];
  count_display++;
  res.json(image);

});

module.exports = router;
