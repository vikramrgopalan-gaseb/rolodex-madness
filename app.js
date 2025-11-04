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
    currentIndex = 0
    coachcircleEl.className = 'color-style-red'
    mentorcircleEl.className = 'color-style-red'
    sponsorcircleEl.className = 'color-style-red'
    render();
    playFactAudio();
}

// Rendering first Fact

function render() {
    factEl.textContent = factArray[factArrayIndex]
    coachScoreEl.textContent = coachScore
    mentorScoreEl.textContent = mentorScore
    sponsorScoreEl.textContent = sponsorScore
    colorChange()
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
const [coachScoreEl, mentorScoreEl, sponsorScoreEl] = document.querySelectorAll('.correct-score')
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
     console.log('Coach Button clicked!');
     increasecoachScore()
     factArrayIndex ++ 
     render()
     if (factArrayIndex === 18) {
        winLoss() }
    };

function selectMentor() {
     console.log('Mentor Button clicked!');
     increasementorScore()
     factArrayIndex ++ 
     render()
    if (factArrayIndex === 18) {
        winLoss() }
    };

function selectSponsor() {
     console.log('Sponsor Button clicked!');
     increasesponsorScore()
     factArrayIndex ++ 
     render()
     if (factArrayIndex === 18) {
        winLoss() }
    };

// Check for win/loss

function winLoss() {
    if (coachScore >5 && mentorScore >5 && sponsorScore >5) {
            console.log('Winner!')
            winner = true
            factEl.textContent = "Winner!"
    } else {
        console.log('Try Again!')
        winner = false
        factEl.textContent = "Try Again!"
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

function increasecoachScore() {
    if (coachArray.includes(factArray[factArrayIndex])) {
        coachScore ++
    }
    coachScoreEl.textContent = coachScore
}

function increasementorScore() {
    if (mentorArray.includes(factArray[factArrayIndex])) {
        mentorScore ++
    }
    mentorScoreEl.textContent = mentorScore
}

function increasesponsorScore() {
    if (sponsorArray.includes(factArray[factArrayIndex])) {
        sponsorScore ++
    }
    sponsorScoreEl.textContent = sponsorScore
}

// Audio

const audioFiles = [
    '/rolodex-madness/audio/John Doe.m4a',
    '/rolodex-madness/audio/11-2-87.m4a',
    '/rolodex-madness/audio/Denver.m4a',
    '/rolodex-madness/audio/Marketing.m4a',
    '/rolodex-madness/audio/Director.m4a',
    '/rolodex-madness/audio/Build Team Culture.m4a',
    '/rolodex-madness/audio/Jane Smith.m4a',
    '/rolodex-madness/audio/6-15-77.m4a',
    '/rolodex-madness/audio/New York.m4a',
    '/rolodex-madness/audio/Sales.m4a',
    '/rolodex-madness/audio/VP.m4a',
    '/rolodex-madness/audio/Drive 100mm in ARR.m4a',
    '/rolodex-madness/audio/Sally Miller.m4a',
    '/rolodex-madness/audio/3-23-67.m4a',
    '/rolodex-madness/audio/San Francisco.m4a',
    '/rolodex-madness/audio/Chief Strategy Officer.m4a',
    '/rolodex-madness/audio/Executive.m4a',
    '/rolodex-madness/audio/Raise Series D.m4a'
];

let currentIndex = 0
const currentAudio = new Audio();
const currentAudioEl = document.querySelectorAll('.audio')

currentAudioEl.forEach(audioFile => {
    audioFile.addEventListener('click', playFactAudio)
});

function playFactAudio() {
    if (currentIndex < audioFiles.length) {
        currentAudio.src = audioFiles[currentIndex];
        currentAudio.volume = .60
        currentAudio.play();
        currentIndex++;
    }
}

// Initialize the app

init();

// Random Functionality

/* function randomFact() {
    if (factArray.length === 0) {
        winLoss()
    }
    const randomIndex = Math.floor(Math.random() * factArray.length);
    const selectedElement = factArray[randomIndex];
    
    factArray.splice(randomIndex, 1);
    return selectedElement
} */