function getCurrentTime() {

    let time = document.getElementById("current_time");
    let date = new Date().toLocaleTimeString();
    time.innerHTML = date;

}