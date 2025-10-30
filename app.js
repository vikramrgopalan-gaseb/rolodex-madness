// Variables

let coachScore = 0
let mentorScore = 0
let sponsorScore = 0

let fact = []
let factArrayIndex = 0
let winner = false

// Initialization

function init() {
    winner = false
    coachScore = 0
    mentorScore = 0
    sponsorScore = 0
    factArrayIndex = 0
    render();
}

// Rendering first Fact

function render() {
    factEl.textContent = factArray[factArrayIndex]
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

// Creating objects for Coach, Mentor and Sponsor

const myCoach = new Coach('John Doe', '11/2/87', 'Denver', 'Marketing', 'Director', 'Build Team Culture');
const myMentor = new Mentor('Jane Smith', '6/15/77', 'New York', 'Sales', 'VP', 'Drive $100mm in ARR');
const mySponsor = new Sponsor('Sally Miller', '3/23/67', 'San Francisco', 'Executive', 'Chief Strategy Officer', 'Raise Series D');

// Push each object into an array and then loop through array

const factArray = []

factArray.push(...Object.values(myCoach))
factArray.push(...Object.values(myMentor))
factArray.push(...Object.values(mySponsor))

// populate the array in the init function

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
startbuttonEl.addEventListener('click', init)
resetbuttonEl.addEventListener('click', reset)

// Event Handlers

coachbuttonEl.onclick = function() {
     console.log('Coach Button clicked!');
     factArrayIndex + 1
     if factArrayIndex = 17
     winLoss
    };

mentorbuttonEl.onclick = function() {
     console.log('Mentor Button clicked!');
     factArrayIndex + 1
     if factArrayIndex = 17
     winLoss
    };

sponsorbuttonEl.onclick = function() {
     console.log('Sponsor Button clicked!');
     factArrayIndex + 1
     if factArrayIndex = 17
     winLoss
    };

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

// add if condition for score logic

    if selectCoach = myCoach

       return (coachScore + 1)

       document.querySelector.textContent = (coachScore + 1)/coachScore

    else if selectMentor

// Initialize the app

function init();