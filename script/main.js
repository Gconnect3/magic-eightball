document.querySelector('#button').addEventListener("click", ball)

function ball(){
    let randomNumber = Math.floor(Math.random() * 20)
    let ballResult = ""
    
    switch (randomNumber){
        case 0 : ballResult = " It is certain."
        break;
        case 1 : ballResult = "As I see it, yes."
        break;
        case 2 : ballResult = "Reply hazy, try again."
        break;
        case 3 : ballResult = "Don't count on it."
        break;
        case 4 : ballResult = "It is decidedly so."
        break;
        case 5 : ballResult = "Most likely."
        break;
        case 6 : ballResult = "Ask again later."
        break;
        case 7 : ballResult = "My reply is no."
        break;
        case 8 : ballResult = "Without a doubt."
        break;
        case 9 : ballResult = "Outlook good."
        break;
        case 10 : ballResult = "Better not tell you now."
        break;
        case 11 : ballResult = "My sources say no."
        break;
        case 12 : ballResult = "Yes definitely."
        break;
        case 13 : ballResult = "Yes."
        break;
        case 14 : ballResult = "Cannot predict now."
        break;
        case 15 : ballResult = "Outlook not so good."
        break;
        case 16 : ballResult = "You may rely on it."
        break;
        case 17 : ballResult = "Signs point to yes."
        break;
        case 18 : ballResult = "Concentrate and ask again."
        break;
        case 19 : ballResult = "Very doubtful."
        break;
        
        default: ballResult = "impossible"
        break;
    }
    document.querySelector('#result').innerText = ballResult
}