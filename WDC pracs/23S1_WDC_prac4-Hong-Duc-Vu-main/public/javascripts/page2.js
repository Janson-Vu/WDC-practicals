
// task 4-3: return time stamp to log2.html
let next_index = 0; // to keep track of the index of the FIRST NEW timestamp in a bunch of new timestamps
function renderTime() {

    let req = new XMLHttpRequest();

    req.open('GET', '/log.json', true);
    req.send();

    req.onreadystatechange = function () {
        if (req.readyState == 4 && req.status == 200) {
            // getting the timestamps from Express server
            let time_stamps = JSON.parse(req.responseText);

            for (let time of time_stamps) {
                let item = document.createElement("li");
                item.innerText = time;
                document.getElementById('time-stamp-list').appendChild(item);
            }
            // we have next_index here since at the beginning, renderTime() is called first
            // -> record the index of the next new item of time_stamps to access from
            next_index = time_stamps.length;
        }
    };
    setInterval(autoUpdateTime, 3000);
    // callback function: a function that is an argument of another function
    /*
    Using
    setTimeout(function(){
        setTimeout(function(){...}, [Milissecs])
    }, [Milisecs]);
    depends on if the callback function finishes executing,
    not just after a period of time like setInterval
    -> adapt to how long each funtion take to ACTUALLY run -> better
    */
}

function autoUpdateTime() {

    // -----------FIRST WAY (using recursive setTimeout)---------------------
    // setTimeout(function(){
    //     let req = new XMLHttpRequest();

    //     req.open('GET', '/log-ro.json', true);
    //     req.send();

    //     req.onreadystatechange = function () {

    //         if (req.readyState == 4 && req.status == 200) {

    //             // getting the timestamps from Express server
    //             let time_stamps = JSON.parse(req.responseText);

    //             // update the page starting at index of the first new elements
    //             for (let i = next_index; i < time_stamps.length; i++) {

    //                 // create a new timestamp item to be appended to pre-existing ones
    //                 let item = document.createElement("li");
    //                 item.classList.add("timestamp");
    //                 item.innerText = time_stamps[i];
    //                 let list = document.getElementById('time-stamp-list');
    //                 list.appendChild(item);
    //             }
    //             // making sure next_index is updated
    //             // (whetther by accessing '/log.json' directly or restart 'log2.html' page )
    //             // (else, we will reiterate already printed elements;
    //             //  i.e, index accessing example: 1; 1,2; 1,2,3;...)
    //             next_index = time_stamps.length;
    //         }
    //     };
    // }, 3000);

    // -------------2ND WAY: just use setInterval---------------------------------
    let req = new XMLHttpRequest();

        req.open('GET', '/log-ro.json', true);
        req.send();

        req.onreadystatechange = function () {

            if (req.readyState == 4 && req.status == 200) {

                // getting the timestamps from Express server
                let time_stamps = JSON.parse(req.responseText);

                // update the page starting at index of the first new elements
                for (let i = next_index; i < time_stamps.length; i++) {

                    // create a new timestamp item to be appended to pre-existing ones
                    let item = document.createElement("li");
                    item.classList.add("timestamp");
                    item.innerText = time_stamps[i];
                    let list = document.getElementById('time-stamp-list');
                    list.appendChild(item);
                }
                // making sure next_index is updated
                // (whetther by accessing '/log.json' directly or restart 'log2.html' page )
                // (else, we will reiterate already printed elements;
                //  i.e, index accessing example: 1; 1,2; 1,2,3;...)
                next_index = time_stamps.length;
            }
        };
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




// task 4-6: display dog images

function getImage() {
    setTimeout(getImageHelper, 10000);
}

function getImageHelper() {

    setTimeout(function(){
        let req = new XMLHttpRequest();

        req.open('GET', '/images.json', true);
        req.send();

        let body = document.getElementById('images');
        let div_image, img, description;

        if (body.childNodes.length === 1) {
            div_image = document.createElement('div');
            div_image.id = "div-image";
            img = document.createElement('img');
            img.id = "the-image";
            description = document.createElement('p');
            description.id = "description";
            div_image.appendChild(img);
            div_image.appendChild(description);
            body.appendChild(div_image);
        } else {
            div_image = document.getElementById('div-image');
            img = document.getElementById('the-image');
            description = document.getElementById('description');
        }

        req.onreadystatechange = function () {
            if (req.readyState == 4 && req.status == 200) {
                let info = JSON.parse(req.responseText);
                img.src = "images/" + info.uri;
                img.alt = info.description;
                description.innerText = info.description;
            }
        };
    }, 10000);

}

