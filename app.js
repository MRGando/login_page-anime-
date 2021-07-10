const userName = document.querySelector("");
const walls = ["","src/mainwall.gif"];



class Gando {
          constructor() {
          }
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






