// Variables

let coachScore = 0%
let mentorScore = 0%
let sponsorScore = 0%

let fact = {}
let winner = false

// Initialization

function init() => {
    console.log("Welcome to Rolodex Madnees!")
    fact = {}
    winner = false
    render();
}

// Constants

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

// Cached Element References

const titleEl = document.querySelector('#app-title')
const directionsEl = document.querySelector('#app-directions')
const coachbuttonEl = document.querySelector('#coach-selection')
const mentorbuttonEl = document.querySelector('#mentor-selection')
const sponsorbuttonEl = document.querySelector('#sponsor-selection')
const startbuttonEl = document.querySelector('#start-button')
const resetbuttonEl = document.querySelector('#reset-button')

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

function winLoss() => {
    if coachScore >=90% && mentorScore >=90% && sponsorScore >=90%
    console.log('Winner!')
    
    else
    console.log('Try Again!')
}

// Display UI/UX