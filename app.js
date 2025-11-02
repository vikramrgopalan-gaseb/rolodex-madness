// Variables

let coachScore = 0
let mentorScore = 0
let sponsorScore = 0

let factArrayIndex = 0
let winner = false // add this to the win/loss function

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

                        // add the color logic here (color change function)

    coachScoreEl.textContent // add these to score function
    mentorScoreEl.textContent // add these to score function
    sponsorScoreEl.textContent // add these to score function

                       // add score logic here - yes, add score function here
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

// Cached Element References

const coachbuttonEl = document.querySelector('.coach-button')
const mentorbuttonEl = document.querySelector('.mentor-button')
const sponsorbuttonEl = document.querySelector('.sponsor-button')
const startbuttonEl = document.querySelector('#start-button')
const resetbuttonEl = document.querySelector('#reset-button')
const factEl = document.querySelector('#fact-text')
const coachcircleEl = document.querySelector('#coach-circle')
// wrap this color logic in a function

if (coachScore >= 3 && coachScore <= 5) {
    coachcircleEl.classList.remove('color-style-red');
    coachcircleEl.classList.add('color-style-yellow');
}
  else if (coachScore > 5) {
    coachcircleEl.classList.remove('color-style-yellow');
    coachcircleEl.classList.add('color-style-green');
  }

const mentorcircleEl = document.querySelector('#mentor-circle')
if (mentorScore < 3) {
  mentorcircleEl.classList.add('color-style');
} else if (3 < mentorScore < 5) {
  mentorcircleEl.classList.add('color-style');
}
  else {
  mentorcircleEl.classList.add('color-style');
  }
const sponsorcircleEl = document.querySelector('#sponsor-circle')
if (sponsorScore < 3) {
  sponsorcircleEl.classList.add('color-style');
} else if (3 < sponsorScore < 5) {
  sponsorcircleEl.classList.add('color-style');
}
  else {
  sponsorcircleEl.classList.add('color-style');
  }

// Event Listeners

coachbuttonEl.addEventListener ('click', selectCoach)
mentorbuttonEl.addEventListener ('click', selectMentor)
sponsorbuttonEl.addEventListener('click', selectSponsor)
startbuttonEl.addEventListener('click', init)
resetbuttonEl.addEventListener('click', init)

// Event Handlers

function selectCoach() {
     console.log('Coach Button clicked!'); // remove this when ready to turn in
     increasecoachScore
     factArrayIndex += 1
     if (factArrayIndex === 18) {
        winLoss }
    }; // implement these edits to bottom 2 functions


function selectMentor() {
     console.log('Mentor Button clicked!');
    if (factArrayIndex === 17) {
        winLoss
    } else {
        increasementorScore
     factArrayIndex += 1
    }};

function selectSponsor() {
     console.log('Sponsor Button clicked!');
     if (factArrayIndex === 17) {
        winLoss
    } else {
        increasesponsorScore
     factArrayIndex += 1
    }};

// Check for win/loss

function winLoss() {
    if (coachScore >=5 && mentorScore >=5 && sponsorScore >=5) {
            console.log('Winner!')
            winner = true
            factEl.textContent = "Winner!"
            return ('Winner!') // consider deleting this line
    } else {
        console.log('Try Again!')
        winner = false // consider deleting this line
        factEl.textContent = "Try Again!"
        return ('Try Again!') // consider deleting this line
    }
}

// Display UI/UX

// add if condition for score logic, triple equals and plue equals

// create separate arrays for coach, mentor and sponsor, use "includes" method

// wrap the below in a % score function, then add it to render function

function increasecoachScore(factArray, coachArray) {
    if (coachArray.includes(factArray[factArrayIndex])) {
        return (coachScore +=1)
    }
} // implement these edits to bottom 2 functions

function increasementorScore(factArray, mentorArray) {
    if (factArray.some(element => mentorArray.includes(element))) {
        return (mentorScore +=1)
    }
}

function increasesponsorScore(factArray, sponsorArray) {
    if (factArray.some(element => sponsorArray.includes(element))) {
        return (sponsorScore +=1)
    }
}

// Initialize the app

init();