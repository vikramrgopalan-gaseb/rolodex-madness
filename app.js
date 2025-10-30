// Variables

let coachScore = 0
let mentorScore = 0
let sponsorScore = 0

    // add if condition for score logic

let fact = []
let factArrayIndex = 0
let winner = false

// Initialization

function init() {
    winner = false
    // reset score
    // set fact back to [0]
    render();
}

// Rendering first Fact

function render() {
    factEl.textContent = factArray[factArrayIndex]
    // map the text content to the string in the object
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

factArray.push(Object.values(myCoach))
factArray.push(myMentor)
factArray.push(mySponsor)

// populate the array in the init function
// Console Log the above to visualize it

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

// need to build out the event handlers (selec functions)

// add event listeners for start and reset

// Loop Conditions

for (let i = 0; i < factArray.length; i++) {
    const fact = factArray[i] // save this as a global variable and increment it upon next question
    console.log(fact);
}

// do a basic increment notation based on event listents (select functions)

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

// add function inside the event handler functions to check index position, then run win loss function)

// need DOM manipulation to displauy this in the UI

// Display UI/UX

// Initialize the app

init();

console.log('Hello world')