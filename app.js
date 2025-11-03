// Variables

let coachScore = 0
let mentorScore = 0
let sponsorScore = 0

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
    colorChange()
    increasecoachScore()
    increasementorScore()
    increasesponsorScore()
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
const mentorcircleEl = document.querySelector('#mentor-circle')
const sponsorcircleEl = document.querySelector('#sponsor-circle')

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
    };

function selectMentor() {
     console.log('Mentor Button clicked!');
     increasementorScore
     factArrayIndex += 1
    if (factArrayIndex === 18) {
        winLoss }
    };

function selectSponsor() {
     console.log('Sponsor Button clicked!');
     increasesponsorScore
     factArrayIndex += 1
     if (factArrayIndex === 18) {
        winLoss }
    };

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

function colorChange() {
if (coachScore >= 3 && coachScore <= 5) {
    coachcircleEl.classList.remove('color-style-red');
    coachcircleEl.classList.add('color-style-yellow');
}
  else if (coachScore > 5) {
    coachcircleEl.classList.remove('color-style-yellow');
    coachcircleEl.classList.add('color-style-green');
  }

if (mentorScore >= 3 && mentorScore <= 5) {
    mentorcircleEl.classList.remove('color-style-red');
    mentorcircleEl.classList.add('color-style-yellow');
} 
  else if (mentorScore > 5) {
    mentorcircleEl.classList.remove('color-style-yellow');
    mentorcircleEl.classList.add('color-style-green');
}

if (sponsorScore >= 3 && sponsorScore <= 5) {
    sponsorcircleEl.classList.remove('color-style-red');
    sponsorcircleEl.classList.add('color-style-yellow');
} 
  else if (sponsorScore > 5) {
    sponsorcircleEl.classList.remove('color-style-yellow');
    sponsorcircleEl.classList.add('color-style-green');
}
}

function increasecoachScore(factArray, coachArray) {
    if (coachArray.includes(factArray[factArrayIndex])) {
        return (coachScore +=1)
    }
    coachScoreEl.textContent
}

function increasementorScore(factArray, mentorArray) {
    if (mentorArray.includes(factArray[factArrayIndex])) {
        return (mentorScore +=1)
    }
    mentorScoreEl.textContent
}

function increasesponsorScore(factArray, sponsorArray) {
    if (sponsorArray.includes(factArray[factArrayIndex])) {
        return (sponsorScore +=1)
    }
    sponsorScoreEl.textContent
}

// Initialize the app

init();