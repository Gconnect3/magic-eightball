# magic-eightball

This simple app is a reproduction of a magic 8 ball.

1. This app changes the innerText of a HTML element whenever a click event happens on a button

2. A click event is triggerd on the button where a function runs and goes through three steps:
    1. A random number between 0 and 19 is calculated
    2. A switch case assings a variable corresponding to the String response
    3. a DOM element is targeted for our result and the innerText is changed to the variable String.


When you click the button a new prediction comes through!
