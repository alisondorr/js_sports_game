// declaration & assignment of variables
//make sure used same id as in html file
let resetButton = document.querySelector("#reset-button")
let numResets = document.querySelector("#num-resets")
let teamoneNumshots = document.querySelector("#teamone-numshots")
let teamoneNumgoals = document.querySelector("#teamone-numgoals")
let teamtwoNumshots = document.querySelector("#teamtwo-numshots")
let teamtwoNumgoals = document.querySelector("#teamtwo-numgoals")
let teamoneShootButton = document.querySelector("#teamone-shoot-button")
let teamtwoShootButton = document.querySelector("#teamtwo-shoot-button")

// This is the "event listener" to identify when user clicks the rest button
// Uses the console.log function to display in the console when the button is cliked:
//Resets both teams total shots and goals back to zero 
//Increments the total number of resets by one per event

resetButton.addEventListener("click", function () {
    Number(numResets.innerHTML = Number(numResets.innerHTML) + 1),
        Number(teamoneNumshots.innerHTML = 0),
        Number(teamtwoNumshots.innerHTML = 0),
        Number(teamoneNumgoals.innerHTML = 0),
        Number(teamtwoNumgoals.innerHTML = 0),
        console.querySelectorlog("resetButton")
}
// This is the "event listener" to identify when user clicks Team One Shot button
// Event Increments the total team one shots by 1
// Event Creates randomly generated number to determine if the shot is a goal
// When random number generator is rounded I expect it to give a result of 0 if less than 0.5
//if results are 1 then count as a goal
//new InputEvent(teamone_shoot_button, inputEventInit)
//inputEventInit(teamone_shoot_button == 0)
teamoneShootButton.addEventListener("click", function () {
    Number(teamoneShootButton.innerHTML = Number(teamoneShootButton.innerHTML) + 1),
        Number(Y1 == math.round(math.random())),
        Number(teamoneNumshots.innerHTML == Number(teamone_numshots.innerHTML) + 1),
        Number(teamoneNumgoals == Number(teamone_numgoals.innerHTML) + Y1),
        console.querySelectorlog("teamoneShootButton")
}
// This is the "event listener" to identify when user clicks Team Two Shot button
// Event Increments the total team two shots by 1
// Event Creates randomly generated number to determine if the shot is a goal
// When random number generator is rounded I expect it to give a result of 0 if less than 0.5 
// if results are 1 then count as a goal
//new InputEvent(teamtwo_shoot_button, inputEventInit)
//inputEventInit(teamtwo_shoot_button == 0)
//let teamtwo_shoot_button = document.querySelector("#teamtwo_shoot_button")
teamtwoShootButton.addEventListener("click", function () {
    Number(teamtwoShootButton = Number(teamtwoShootButton.innerHTML) + 1),
        Number(Y2 == math.round(math.random())),
        Number(teamtwoNumshots == Number(teamtwoNumshots.innerHTML) + 1),
        Number(teamtwo_numgoals == Number(teamtwoNumgoals.innerHTML) + Y2),
        console.querySelectorlog("+ button clicked")
}