document.querySelector('#button').addEventListener("click", ball)

function ball(){
    let randomNumber = Math.floor(Math.random() * 15)
    let ballResult = ""
    
    switch (randomNumber){
        case 0 : ballResult = "zero"
        break;
        case 1 : ballResult = "one"
        break;
        case 2 : ballResult = "two"
        break;
        case 3 : ballResult = "three"
        break;
        case 4 : ballResult = "four"
        break;
        case 5 : ballResult = "five"
        break;
        case 6 : ballResult = "six"
        break;
        case 7 : ballResult = "seven"
        break;
        case 8 : ballResult = "eight"
        break;
        case 9 : ballResult = "nine"
        break;
        case 10 : ballResult = "ten"
        break;
        case 11 : ballResult = "eleven"
        break;
        case 12 : ballResult = "twelve"
        break;
        case 13 : ballResult = "thirteen"
        break;
        case 14 : ballResult = "fourteen"
        break;
        default: ballResult = "impossible"
        break;
    }
    document.querySelector('#result').innerText = ballResult
}