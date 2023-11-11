
// TASK 3-1
let m_count =0;
function hoverCount() {

    let countBox = document.getElementById("mcount");
    m_count++;
    countBox.innerText = m_count;

}

// TASK 3-2 & TASK 3-4
function makePost(){

    // get post div
    let post_div = document.querySelector("#posts");

    // get quantity of post to be posted
    let quantity = document.querySelector('input[name="quantity"]').value;

    for(let i=0; i<quantity; i++){
        // create a div to contain:
        // + a time div
        // + a post paragraph
        // + a delete button
        let inner_post_div = document.createElement("DIV");
        inner_post_div.classList.add("inner-post-div");

        let p_content = document.createElement("P");
        p_content.classList.add("post-content");

        let div_time = document.createElement("DIV");
        div_time.classList.add("post-time");
        div_time.style.display = "inline-block";


        let delete_button = document.createElement("BUTTON");
        delete_button.classList.add("delete-post");
        delete_button.style.display = "inline-block";
        delete_button.setAttribute("onclick", "deletePost(this)");
        delete_button.innerText = "X";

        let content = document.getElementsByTagName("textarea")[0].value; // get by tagname returns a list
        let time = new Date();

        // check if bold and italic style is chosen
        let bold = document.querySelector('input[value="bold"]').checked;
        let italic = document.querySelector('input[value="italic"]').checked;

        if (bold && italic){
            p_content.innerHTML = "<b><i>"+ content +"</i></b>";
        }else if (bold){
            p_content.innerHTML = "<b>"+ content +"</b>";
        }else if (italic){
            p_content.innerHTML = "<i>"+ content +"</i>";
        }else if (bold == false && italic == false){
            p_content.innerHTML = content;
        }

        div_time.innerHTML = "<strong>" + time + "</strong>";

        // check if red or blue color is chosen
        if (document.querySelector('input[value="blue"]').checked){
            p_content.style.color = "blue";
        }else if (document.querySelector('input[value="red"]').checked) {
            p_content.style.color = "red";
        }


        inner_post_div.appendChild(div_time);
        inner_post_div.appendChild(delete_button);
        inner_post_div.appendChild(p_content);
        post_div.appendChild(inner_post_div);
    }
}

// TASK 3-3
function hideMainDiv(){
    let main_div = document.getElementById("main");
    main_div.style.display = "none";
    let menu_div = document.getElementById("menu");
    menu_div.style.display = "block";
}
function showMainDiv(){
    let main_div = document.getElementById("main");
    main_div.style.display = "inline-block";
    let menu_div = document.getElementById("menu");
    menu_div.style.display = "none";
}


// TASK 3-5
function changeBackgroundColor(){

    let input_color = document.querySelector("div#menu input");
    let body = document.getElementsByTagName("body")[0];

    if (document.activeElement != input_color){
        var color = input_color.value;
    }
    body.style.backgroundColor = color;
}


// TASK 3-6
function changePostsDisplay(){

    // get number of posts to be shown
    let num_post = document.querySelector('div.controls.left input[type="range"]').value;

    // get post div
    let post_div = document.querySelector("#posts");

    // get inner post div
    let inner_post_div = post_div.getElementsByClassName("inner-post-div");

    // loop through all of inner post divs to choose to display them or not
    for (let i=0; i<inner_post_div.length; i++){
        if (i < num_post){
            inner_post_div[i].style.display = "inline-block";
        }else{
            inner_post_div[i].style.display = "none";
        }
    }

}

// TASK 3-8
function deletePost(button){
    // get the entire inner post div
    let inner_post_div = button.parentNode;

    // loop thru all elements of inner post div (aka div and its chidren to be removed)
    for (let child of inner_post_div.childNodes){
        child.remove();
    }

    // remove the inner post div
    inner_post_div.remove();
}