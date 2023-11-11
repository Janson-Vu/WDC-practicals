
// task 4-1
function getTime() {

    // create an AJXA request object
    let req = new XMLHttpRequest();

    // modify the page according to the info received from the server (from route last.txt)
    req.onreadystatechange = function () {
        if (req.readyState == 4 && req.status == 200) {
            document.getElementsByClassName('time-stamp')[0].innerText = req.responseText;
        }
    };

    // open the port to the route on the server (in routes.js)
    req.open('GET', '/last.txt', true);

    // send the request to
    req.send();

}

// task 4-2: color2.html
function getColor() {

    let req = new XMLHttpRequest();

    req.onreadystatechange = function () {
        if (req.readyState == 4 && req.status == 200) {
            let heading = document.getElementsByTagName('h1')[0];
            heading.innerText = req.responseText;
            heading.style.color = req.responseText;
        }
    };

    req.open('GET', '/color.txt', true);
    req.send();
}




// task 4-4
function getContact() {

    let req = new XMLHttpRequest();

    req.onreadystatechange = function () {
        if (req.readyState == 4 && req.status == 200) {

            let main_content = document.getElementById('content');
            for (let child of main_content.childNodes) {
                child.remove();
            }
            main_content.innerHTML += req.responseText;
        }
    };

    req.open('GET', '/contact.ajax', true);
    req.send();
}

function getSearch() {
    let req = new XMLHttpRequest();

    req.onreadystatechange = function () {
        if (req.readyState == 4 && req.status == 200) {

            let main_content = document.getElementById('content');
            for (let child of main_content.childNodes) {
                child.remove();
            }
            main_content.innerHTML += req.responseText;
        }
    };

    req.open('GET', '/search.ajax', true);
    req.send();
}

function getAbout() {
    let req = new XMLHttpRequest();

    req.onreadystatechange = function () {
        if (req.readyState == 4 && req.status == 200) {

            let main_content = document.getElementById('content');
            for (let child of main_content.childNodes) {
                child.remove();
            }
            main_content.innerHTML += req.responseText;
        }
    };

    req.open('GET', '/about.ajax', true);
    req.send();
}


// task 4-5: accept terms and conditions

function getAccept(){

    let accept_req = new XMLHttpRequest();

    accept_req.onreadystatechange = function(){
        if (accept_req.readyState == 4 && accept_req.status == 200){
            document.getElementById('prompt').style.display = "none";
            document.getElementById('button').style.display = "none";

            getContent();
        }
    };

    accept_req.open('GET', '/accept', true);
    accept_req.send();

}


function getContent(){
    let req = new XMLHttpRequest();

    req.onreadystatechange = function(){

        if (req.readyState == 4 && req.status == 403){
            let body = document.getElementById('body');

            let prompt = document.createElement('p');
            prompt.innerText = 'Please accept terms and conditions before continuing';
            prompt.id = "prompt";

            let button = document.createElement('button');
            button.type = "submit";
            button.onclick = getAccept;
            button.innerText = "I Accept";
            button.id = "button";

            body.appendChild(prompt);
            body.appendChild(button);
        }else if (req.readyState == 4 && req.status == 200) {
            let body = document.getElementById('body');
            body.innerHTML += this.responseText;
        }

    };

    req.open('GET', '/content.ajax', true);
    req.send();
}

// function getAccept() {
//     let req = new XMLHttpRequest();

//     req.onreadystatechange = function(){
//         if (this.readyState == 4 && this.status == 200){
//             let para = document.getElementById('para');
//             let button = document.getElementById('button');

//             para.style.display = 'none';
//             button.style.display = 'none';

//             getContent();
//         }
//     };

//     req.open('GET', '/accept', true);
//     req.send();
// }


// function getContent() {
//     let req = new XMLHttpRequest();

//     req.onreadystatechange = function () {
//         if (this.readyState == 4 && this.status == 403){
//             let body = document.getElementById('body');
//             let para = document.createElement('p');
//             para.id = "para";
//             let button = document.createElement('button');
//             button.id = "button";

//             para.innerText = "Accept terms and conditions before continue";
//             button.onclick = getAccept;
//             button.innerText = "I accept";

//             body.appendChild(para);
//             body.appendChild(button);
//         }else if (this.readyState == 4 && this.status == 200){
//             let body = document.getElementById('body');
//             body.innerHTML += this.responseText;
//         }
//     };

//     req.open('GET', '/content.ajax', true);
//     req.send();
// }

// task 4-6: display dog images
function getImageHelper(){

    let req = new XMLHttpRequest();

    let body = document.getElementById('images');
    let div_image, img, description;

    if (body.childNodes.length === 1){
        div_image = document.createElement('div');
        div_image.id = "div-image";
        img = document.createElement('img');
        img.id = "the-image";
        description = document.createElement('p');
        description.id = "description";
        div_image.appendChild(img);
        div_image.appendChild(description);
        body.appendChild(div_image);
    }else{
        div_image = document.getElementById('div-image');
        img = document.getElementById('the-image');
        description = document.getElementById('description');
    }

    req.onreadystatechange = function(){
        if (req.readyState == 4 && req.status == 200) {
            let info = JSON.parse(req.responseText);
            img.src = "images/" + info.uri;
            img.alt = info.description;
            description.innerText = info.description;
        }
    };

    req.open('GET', '/images.json', true);
    req.send();
    location.reload = true;
}

function getImage(){
    setInterval(getImageHelper, 10000);
}