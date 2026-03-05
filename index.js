// document.getElementById("count-el").innerText = 5
//let count = 0
//console.log(count)

// //1. create a variable, myAge, and set its value to your age
// let myAge = 35

// //2. log the myAge variable to the console
// console.log(myAge) 
// //you can use javascipt to do math
// let firstBatch = 15
// let secondBatch = 7
// let count = firstBatch + secondBatch

// console.log(count)

// //create two variable, myAge and humanDogRatio.
// let myAge = 39
// let humanDogRatio = 7

// //multiply the two together and store the result in myDogAge
// let myDogAge = myAge * humanDogRatio
// //log myDogAge in a console
// console.log(myDogAge)

// reassigment of variables with a new value
//let count = 5

//count = 3
//console.log(count)

//create an increment
//let count = 5
//count -= 2
//console.log(count)

//create a variable, bonuspoints. intialize it as 50. increase it to 100
//Decrease it down to 25, and then increase it to 70
//console.log the value after each step

// let bonusPoints = 50
// console.log(bonusPoints)

// bonusPoints = bonusPoints + 50
// console.log(bonusPoints)

// bonusPoints = bonusPoints - 75
// console.log(bonusPoints)

// bonusPoints = bonusPoints + 45
// console.log(bonusPoints)

//initialize the count as 0
//listen for clicks on the increment button
//increment the count variable when the button is clicked
//change the count-el in the html to reflect the new count

//function increment(){
    //console.log("The button was clicked")
//}

//setting up the race
//instead of calling our code twice like this we use function
//function countdown(){
    //console.log(5)
    //console.log(4)
    //console.log(3)
    //console.log(2)
    //console.log(1)
//}

//setting up the race
//countdown()

//GO!
//players are running the race
//race is finished
//Get ready for a new race
//countdown()

//create a function that logs the number 42 to the console
//call or invoke the function
//function number(){
    //console.log(42)
//}

//number()

//let Lap1 = 34
//let Lap2 = 33
//let Lap3 = 36

//create a function that logs out the sum of all the lap times
//function lapsum(){
    //let count = Lap1 + Lap2 + Lap3
    // or console.log(Lap1 + Lap2 + Lap3)
    //console.log(count)
//}
//lapsum()

//let lapsCompleted = 0
//create a function that increments the lapcompleted variable with one
//function logIncrement(){
    //lapsCompleted += 1
//}
//Run it three times
//logIncrement()
//logIncrement()
//logIncrement()

//console.log(lapsCompleted)

//document.getElementBYId("count").innerText = 5
//let countEl = document.getElementById("count-el")
//console.log(countEl)

//let count = 0
// increment using the function
//function increment(){
    //count += 1
    //countEl.innerText = count
//}

//let countEl = document.getElementById("count-el")
//let count = 0

// increment(){
    //count += 1
    //countEl.innerText = count
//}
//create a function, save(), which logs out, the count when it is called
//function save(){
    //console.log(count)
//}
//strings you can use double or single qoutes
//let username = "per"
//console.log(username)
//create a variable, message, that stores the string: "you have three new notifications"
//let message = "You have three new notifications"
//let username = "per"
//let messageToUser = message + ", " + username + "!"
//console.log(messageToUser)

//create two variables, name and greetings. The name variable should store your name, and the greeting should store e.g "Hi, my name is"
//let name = "Victoria"
//let greeting = "Hi, my name is"

//create a third variable, mygreeting, that concatenates the two strings then log myGreeting to the console
//let myGreeting = greeting + " " + name + "."
//console.log(myGreeting)

//let points = 4
//let bonusPoints = "10"

//let totalPoints = points + bonusPoints
//console.log(totalPoints)

//console.log(4 + 5)
//console.log("2" + "4")
//console.log("5" + 1)
//console.log(100 + "100")

//document.getElementBYId("count").innerText = 5
let countEL = document.getElementById("count-el")
let count = 0

//Grab the save-el paragraph and store it in variable called saveEl
let saveEL = document.getElementById("save-el")

console.log(saveEL)

// increment using the function
function increment(){
    count += 1
    countEL.textContent = count
}

//create a variable that contains both the count and the dash separator, ie "12"
//render the variable using innerText 
function save(){
    let countStr = count + " - "
    saveEL.textContent += countStr
    count = 0
    countEL.textContent = count
}
//After you click the save button, the count should reset back to 0.so, after you render the count, make sure to reset it to 0 and update the count-el to reflect the new count

//change innerText to textContent
//render the variable in the saveEL using innerText
console.log(count)