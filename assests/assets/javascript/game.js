// declaration & assignment of variables
//make sure used same id as in html file


let reset_button = document.querySelector('#resetbutton');
let num_resets = document.querySelector('#numresets');
let teamone_numshots = document.querySelector("#t1shoot");
let teamone_numgoals = document.querySelector("#t2shoot");
let teamtwo_numshots = document.querySelector("#goals1");
let teamtwo_numgoals = document.querySelector("#goals2");
let Y1 = document.querySelector("#random1");
let Y2 = document.querySelector("#random2");


// This is the "event listener" to identify when user clicks the rest button
// Uses the console.log function to display in the console when the button is cliked:
//Resets both teams total shots and goals back to zero 
//Increments the total number of resets by one per event

new InputEvent(reset_button, inputEventInit)
inputEventInit(num_resets == 0)
reset_button.addEventListener("click",
    then(reset_button = reset_button + 1),
    and(teamone_numshots = 0),
    and(teamtwo_numshots = 0),
    and(teamone_numgoals = 0),
    and(teamtwo_numgoals = 0), {
        console: log("+ button clicked")
    }
// This is the "event listener" to identify when user clicks Team One Shot button
// Event Increments the total team one shots by 1
// Event Creates randomly generated number to determine if the shot is a goal
// When random number generator is rounded I expect it to give a result of 0 if less than 0.5 otherwise 1
// if results are 1 then count as a goal

//new InputEvent(teamone_shoot_button, inputEventInit)
//inputEventInit(teamone_shoot_button == 0)
% teamone_shoot_button.addEventListener("click",
    then(teamone_shoot_button = teamone_shoot_button + 1)),
    and(Y1 == math.round(math.random())),
    and(teamone_numshots == teamone_numshots + 1),
    and(teamone_numgoals == teamone_numgoals + Y1),
    console.querySelectorlog("+ button clicked")
)

    // This is the "event listener" to identify when user clicks Team Two Shot button
    // Event Increments the total team two shots by 1
    // Event Creates randomly generated number to determine if the shot is a goal
    // When random number generator is rounded I expect it to give a result of 0 if less than 0.5 otherwise 1
    // if results are 1 then count as a goal

    //   new InputEvent(teamtwo_shoot_button, inputEventInit)
    //inputEventInit(teamtwo_shoot_button == 0)
    % teamtwo_shoot_button.addEventListener("click",
        then(teamtwo_shoot_button = teamtwo_shoot_button + 1)),
    and(Y2 == math.round(math.random())),
    and(teamtwo_numshots == teamtwo_numshots + 1),
    and(teamtwo_numgoals == teamtwo_numgoals + Y2),
    console.log("+ button clicked")

