let quote = document.querySelector(".quotehere");
let loading = document.querySelector(".loadingPage");
let player = document.querySelector(".audioplayer");
let userName = document.querySelector(".username");
let volUp = document.querySelector(".volUp");
let viseye = document.querySelector(".eye");
let isPlaying = true;
let visState = false;
let quotes = [
    "“Love is like the wind, you can’t see it but you can feel it.”",
    "“You know you’re in love when you can’t fall asleep because reality is finally better than your dreams.”",
    "“To be your friend was all I ever wanted; to be your lover was all I ever dreamed.”",
];
let tracks = [
    "src/Track1.mp3",
    "src/Track2.mp3",
    "src/Track3.mp3",
    "src/Track4.mp3",
    "src/Track5.mp3",
];

class Setting {
    constructor() {}
        //this method gets two parameters (textInputs class or id, fontSize)
    static showTime(text, font) {
        const show = document.querySelector(`${text}`);
        setInterval(timer, 1000);

        show.style.fontSize = `${font}rem`;

        function timer() {
            let date = new Date();
            let hours = date.getHours();
            let minutes = date.getMinutes();
            let seconds = date.getSeconds();
            show.innerHTML = `${hours} : ${minutes} : ${seconds}`;
        }
    }
}

//choose a random quote
setInterval(function() {
    let random = quotes[Math.floor(Math.random() * quotes.length)];
    quote.innerHTML = random;
}, 20000);
window.addEventListener("load", function() {
    userName.value = "";
    setTimeout(() => {
        //play a random track
        let song_random = tracks[Math.floor(Math.random() * tracks.length)];
        let audio = new Audio(song_random);
        audio.play();
        audio.addEventListener("ended", function() {
            audio.play();
        });
    }, 2000);
    loading.style.opacity = "0";
    setTimeout(function() {
        loading.style.display = "none";
    }, 1000);
});

function visToggle() {
    if (visState) {
        document.getElementById('passinp').setAttribute('type', 'password');
        viseye.style.color = "#2d2b3899";
        visState = false;
    } else {
        document.getElementById('passinp').setAttribute('type', 'text');
        viseye.style.color = "#000";
        visState = true;
    }
}

//sound stop/play toggle
function soundController() {
    if (isPlaying) {
        audio.pause();
        isPlaying = false;
    } else {
        isPlaying = true;
    }
}