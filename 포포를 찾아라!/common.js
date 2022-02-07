let container = document.getElementById("container")


setInterval(function time() {
    container.style.opacity = 0
    container.style.zIndex = 0

}, 1700)
let contents = document.getElementById("contents")
setInterval(function time1() {
    contents.style.opacity = 1
}, 2700)

let popup = document.getElementById("pop")
let game_field = document.getElementById("game_field")
popup.addEventListener("click", function btn() {
    if (game_field.style.display == "block") {
        game_field.style.display = "none"
    } else {
        game_field.style.display = "block"
    }
})

let play = document.getElementById("play")
let i = document.getElementById("i")
let newI = document.getElementById("newI")
let text = document.getElementById("text")
let randomImage = document.getElementById("randomImage")
let randomNumber = Math.floor(Math.random() * 30) + 1;

let afterReplayNumver = Math.floor(Math.random() * 30) + 1;


let repalybutton = document.getElementById("repalybutton")
let timeOut_AfterReplay = document.getElementById("timeOut_AfterReplay")



//다시 게임 실행하는 버튼 이벤트 
repalybutton.addEventListener("click", function () {

    timeOut_AfterReplay.style.display = "none"
    document.getElementById("time").innerHTML = "05" + ":00"
    randomImage.style.backgroundImage = "url(https://kimmsoll.github.io/whale-game-js/imgs/icons/" + afterReplayNumver + ".png)"

    let gamepage = document.getElementById("gamepage")
    let child = document.createElement('div')
    let divCreate = gamepage.appendChild(child)
    divCreate.id = "imgsIconBox2"
    let imgsIconBox2 = document.getElementById("imgsIconBox2")
    for (let j = 1; j < 31; j++) {
        const image2 = new Image();
        image2.src = "https://kimmsoll.github.io/whale-game-js/imgs/icons/" + j + ".png";
        imgsIconBox2.appendChild(image2);

        image2.addEventListener("click", function () {
            if ("https://kimmsoll.github.io/whale-game-js/imgs/icons/" + afterReplayNumver + ".png" == image2.src) {
                console.log(randomNumber + "둘의 값이 같음 ");
            } else {
                console.log("다름 ");
            }
        })
    }
    //타이머 개발
    var count2 = 5;
    var counter2 = setInterval(timer, 1000);
    function timer() {

        count2--;
        if (count2 <= 0) {

            clearInterval(counter2);
            document.getElementById("time").innerHTML = "00" + ":00"
        }
        document.getElementById("time").innerHTML = "0" + count2 + ":00";
        //시간이 종료되었을때 발생하는 이벤트 
        if (document.getElementById("time").innerText == '00:00') {
            console.log('시간 종료 !! 게임 끝!!');
            document.getElementById("timeOut_AfterReplay").style.display = "block"
            imgsIconBox2.remove('img')
        }
    }
})


//play 클릭하면 발생하는 이벤트 
play.addEventListener("click", function () {
    //랜덤으로 이미지 
    randomImage.style.backgroundImage = "url(https://kimmsoll.github.io/whale-game-js/imgs/icons/" + randomNumber + ".png)"

    i.style.display = "none"

    newI.style.display = "block"
    text.replaceWith("STOP")


    //타이머 개발
    var count = 5;
    var counter = setInterval(timer, 1000);
    function timer() {

        document.getElementById("time").innerHTML = "05" + ":00"
        count--;
        if (count <= 0) {

            clearInterval(counter);
            document.getElementById("time").innerHTML = "00" + ":00"
        }
        document.getElementById("time").innerHTML = "0" + count + ":00";
        //시간이 종료되었을때 발생하는 이벤트 
        if (document.getElementById("time").innerText == '00:00') {
            console.log('시간 종료 !! 게임 끝!!');
            document.getElementById("timeOut_AfterReplay").style.display = "block"
            imgsIconBox.remove()

        }

    }

    let imgsIconBox = document.getElementById("imgsIconBox")
    for (let i = 1; i < 31; i++) {
        const image = new Image();
        image.src = "https://kimmsoll.github.io/whale-game-js/imgs/icons/" + i + ".png";
        imgsIconBox.appendChild(image);

        image.addEventListener("click", function () {
            if ("https://kimmsoll.github.io/whale-game-js/imgs/icons/" + randomNumber + ".png" == image.src) {
                console.log(randomNumber + "둘의 값이 같음 ");
            } else {
                console.log("다름 ");
            }
        })
    }

    game_field.style.display = "none"

})

let score = document.getElementById("score")
let backgroundBanner = document.getElementById("backgroundBanner")
score.addEventListener("click", function () {
    backgroundBanner.style.display = "block"
})
let closes = document.getElementById("close")
closes.addEventListener("click", function () {
    backgroundBanner.style.display = "none"
})


//소리 추가
var audio = new Audio('./sound/Bubbles1.wav')
audio.play();