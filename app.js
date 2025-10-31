// Variables

let coachScore = 0
let mentorScore = 0
let sponsorScore = 0

let factArrayIndex = 0
let winner = false

                // move the fact array up to this section

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

                        // add the color logic here

    coachScoreEl.textContent
    mentorScoreEl.textContent
    sponsorScoreEl.textContent
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

const coachArray = []
const mentorArray = []
const sponsorArray = []

coachArray.push(...Object.values(myCoach))
mentorArray.push(...Object.values(myMentor))
sponsorArray.push(...Object.values(mySponsor))

// create separate arrays for coach, mentor and sponsor, use "includes" method

// Cached Element References

const coachbuttonEl = document.querySelector('#coach-selection')
const mentorbuttonEl = document.querySelector('#mentor-selection')
const sponsorbuttonEl = document.querySelector('#sponsor-selection')
const startbuttonEl = document.querySelector('#start-button')
const resetbuttonEl = document.querySelector('#reset-button')
const factEl = document.querySelector('#fact-text')
const coachcircleEl = document.querySelector('.circle')
const mentorcircleEl = document.querySelector('cirlce')
const sponsorcircleEl = document.querySelector('.circle')

// Event Listeners

coachbuttonEl.addEventListener ('click', selectCoach)
mentorbuttonEl.addEventListener ('click', selectMentor)
sponsorbuttonEl.addEventListener('click', selectSponsor)
startbuttonEl.addEventListener('click', init)
resetbuttonEl.addEventListener('click', init)

// Event Handlers

function selectCoach() {
     console.log('Coach Button clicked!'); // remove this when ready to turn in
     if (factArrayIndex === 17) {
        winLoss
      } else {
        increasecoachScore
      }
        else { factArrayIndex += 1
    }};

function selectMentor() {
     console.log('Mentor Button clicked!');
    if (factArrayIndex === 17) {
        winLoss
    } else {
        increasementorScore
    }
      } else { factArrayIndex += 1
    }};

function selectSponsor() {
     console.log('Sponsor Button clicked!');
     if (factArrayIndex === 17) {
        winLoss
    } else {
        increasesponsorScore
      }
      } else { factArrayIndex += 1
    }};

// Check for win/loss

function winLoss() { // need DOM manipulation to displauy this in the UI
    if (coachScore >=90 && mentorScore >=90 && sponsorScore >=90) {
            console.log('Winner!')
            return ('Winner!')
    } else {
        console.log('Try Again!')
        return ('Try Again!')
    }
}

// Display UI/UX

// add if condition for score logic, triple equals and plue equals

// wrap the below in a % score function, then add it to render function  

function increasecoachScore() {
    if factArray.some(element => coachArray.includes(element)) {
        return (coachScore +=1)
    }
}

function increasementorScore() {
    if factArray.some(element => mentorArray.includes(element)) {
        return (mentorScore +=1)
    }
}

function increasesponsorScore() {
    if factArray.some(element => sponsorArray.includes(element)) {
        return (mentorScore +=1)
    }
}



if selectCoach = myCoach

       return (coachScore + 1) // consider removing this

       document.querySelector.textContent = (coachScore + 1)/6

    else if selectMentor = myMentor

        return (mentorScore +1)

        document.querySelector.textContent = (coachScore + 1)/6
    
        else if selectSponsor = mySponsor

        return (sponsorScore +1)

        document.querySelector.textContent = (sponsorScore + 1)/6



// Initialize the app

init();