let flipButton = document.querySelector('#flip-button');
let pennyImage = document.querySelector(".penny-image");
let headsCounterCell = document.querySelector("#heads-counter");
let tailsCounterCell = document.querySelector("#tails-counter");
let headsPercentCell = document.querySelector("#heads-percent");
let tailsPercentCell = document.querySelector("#tails-percent");
let resultHeader = document.querySelector(".results")
let clearButton = document.querySelector("#clear-button")

let headsCounter = 0;
let tailsCounter = 0;
let totalCount = 0;    


//event listener for coin flip
flipButton.addEventListener('click', function(){
    let randomNum = Math.floor(Math.random() * 2);
    if (randomNum === 0){
        pennyImage.setAttribute("src", "./Assets/penny-heads.jpg")
        headsCounter = headsCounter + 1
        headsCounterCell.textContent = headsCounter
        resultHeader.textContent = "You got Heads!"
    } else {
        pennyImage.setAttribute("src", "./Assets/penny-tails.jpg")
        tailsCounter = tailsCounter + 1
        tailsCounterCell.textContent = tailsCounter
        resultHeader.textContent = "You got Tails!"
    }
    totalCount = totalCount + 1
    headsPercentCell.textContent = Math.floor((headsCounter/totalCount*100)) + "%"
    tailsPercentCell.textContent = Math.floor((tailsCounter/totalCount*100)) + "%"
});

//event listener for clear scoreboard
clearButton.addEventListener('click', function(){
    headsCounterCell.textContent = 0
    headsPercentCell.textContent = 0 + "%"
    tailsCounterCell.textContent = 0
    tailsPercentCell.textContent = 0 + "%"
})