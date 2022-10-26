const clock = document.getElementById("myClock");

function showTime() {
    const date = new Date();
    let hour = date.getHours();
    let minute = date.getMinutes();
    let second = date.getSeconds();
    let time = `${hour}:${minute}:${second}`;

    clock.innerText = time;
    setTimeout(showTime, 1000);
}

showTime();
