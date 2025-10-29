// Variables

let coachScore = 0
let mentorScore = 0
let sponsorScore = 0

let fact = []
let winner = false

// Initialization

function init() {
    winner = false
    render();
}

// Rendering first Fact

function render(fact) {
    const factEl = factArray[0]
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

// NEED TO MAKE NEW C/M/S with new keyword

const myCoach = new Coach('John Doe', '11/2/87', 'Denver', 'Marketing', 'Director', 'Build Team Culture');
const myMentor = new Mentor('Jane Smith', '6/15/77', 'New York', 'Sales', 'VP', 'Drive $100mm in ARR');
const mySponsor = new Sponsor('Sally Miller', '3/23/67', 'San Francisco', 'Executive', 'Chief Strategy Officer', 'Raise Series D');

// push each object into an array and then loop through array

const factArray = []

factArray.push(myCoach)
factArray.push(myMentor)
factArray.push(mySponsor)

// consider an array of obhect questions instead

// Cached Element References

const coachbuttonEl = document.querySelector('#coach-selection')
const mentorbuttonEl = document.querySelector('#mentor-selection')
const sponsorbuttonEl = document.querySelector('#sponsor-selection')
const startbuttonEl = document.querySelector('#start-button')
const resetbuttonEl = document.querySelector('#reset-button')
const factEl = document.querySelector('#fact-text')

// Event Listeners

coachbuttonEl.addEventListener ('click', selectCoach)
mentorbuttonEl.addEventListener ('click', selectMentor)
sponsorbuttonEl.addEventListener('click', selectSponsor)

// Loop Conditions

for (let i = 0; i < factArray.lenght; i++) {
    const fact = factArray[i]
    console.log(fact);
}

// Check for win/loss

function winLoss() {
    if (coachScore >=90 && mentorScore >=90 && sponsorScore >=90) {
            console.log('Winner!')
            return ('Winner!')
    }
    
    else {
        console.log('Try Again!')
        return ('Try Again!')
    }
}
// need DOM manipulation to displauy this in the UI


// Display UI/UX


// Initialize the app

init();

console.log('Hello world')