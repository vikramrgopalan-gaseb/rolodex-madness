// Variables

let coachScore = 0
let mentorScore = 0
let sponsorScore = 0

let fact = []
let winner = false

// Initialization

function init() {
    console.log("Welcome to Rolodex Madnees!")
    fact = []
    winner = false
    render(); // need to build out to render one of the facts
}

render()

// Constants (consider an array of obhect questions instead)

class Coach {
    constructor(name, birthday, hometown, department, title, goal) {
        this.name = name;
        this.birthday = birthday;
        this.hometown = hometown;
        this.department = department;
        this.title = title;
        this.goal = goal;
    }
}

class Mentor {
    constructor(name, birthday, hometown, department, title, goal) {
        this.name = name;
        this.birthday = birthday;
        this.hometown = hometown;
        this.department = department;
        this.title = title;
        this.goal = goal;
    }
}

class Sponsor {
    constructor(name, birthday, hometown, department, title, goal) {
        this.name = name;
        this.birthday = birthday;
        this.hometown = hometown;
        this.department = department;
        this.title = title;
        this.goal = goal;
    }
}

// NEED TO MAKE NEW C/M/S with new keyword

// push each object into an array and then loop through array

// Cached Element References

const coachbuttonEl = document.querySelector('#coach-selection')
const mentorbuttonEl = document.querySelector('#mentor-selection')
const sponsorbuttonEl = document.querySelector('#sponsor-selection')
const startbuttonEl = document.querySelector('#start-button')
const resetbuttonEl = document.querySelector('#reset-button')
const factEl = document.querySelector // the fact text will update

// Event Listeners

coachbuttonEl.addEventListener ('click', selectCoach)
mentorbuttonEl.addEventListener ('click', selectMentor)
sponsorbuttonEl.addEventListener('click', selectSponsor)

// Loop Conditions

for (let i = 0; i < fact.lenght; i++) {
    const fact = facts[i]
    console.log(fact);
}

// Check for win/loss

function winLoss() {
    // if coachScore >=90 && mentorScore >=90 && sponsorScore >=90
    /* console.log('Winner!') */
    // return ('Winner!')
    
    // else
     /* console.log('Try Again!') */// need DOM manipulation to displauy this in the UI
    return ('Try Again!')
}

// Display UI/UX



// Initialize the app

init();

console.log('Hello world')