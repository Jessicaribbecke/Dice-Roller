const rollButton = document.querySelector("#roll")
const userInput = document.querySelector("#userInput")
const sumOfRolls = document.querySelector("#sumOfRolls")
const showAllRolls = document.querySelector("#showAllRolls")
const orderOfRolls = document.querySelector("#orderOfRolls")
let resetButton = document.querySelector("#resetButton")



let diceIndex = 0
let dieRolls = []

rollButton.addEventListener("click", function () {
    console.log("click, click, click!!!")
    let userNumber = userInput.value


    while (diceIndex < userNumber) {
        // console.log(Math.floor(Math.random() * 6 + 1));
        dieRolls.push(Math.floor(Math.random() * 6 + 1))
        console.log(dieRolls)
        diceIndex++;

    }


    var index = 0;
    var sum = 0;
    while (index < dieRolls.length) {
        sum = sum + dieRolls[index];
        index++;
    }

    console.log(sum)
    sumOfRolls.innerHTML = "Total " + sum

})

//total sum of the rolls
var totalIndex = 0

showAllRolls.addEventListener("click", function () {
    console.log("these numbers were rolled")

    let index = 0

    while (index < dieRolls.length) {

        let listNumbers = document.createElement("li")

        listNumbers.innerHTML = dieRolls[index]
        orderOfRolls.appendChild(listNumbers)


        index += 1
    }


})



resetButton.addEventListener("click", function () {
    console.log("numbers have been reset")


    dieRolls.length = 0
    sumOfRolls.innerHTML = 0
    orderOfRolls.innerHTML = 0
    

})







