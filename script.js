// Character and Banner classes
class Character {
    constructor(name, stars, isOwned = false, isFeatured = false, bannerID, copies) {
        this.name = name;
        this.stars = stars;
        this.isOwned = isOwned;
        this.isFeatured = isFeatured;
        this.bannerID = bannerID;
        this.copies = copies;
    }
}

class Banner {
    constructor(title, id, isActive = false) {
        this.title = title;
        this.id = id;
        this.isActive = isActive;
    }
}

let tides = 100;
let tidesPerSecond = 0; // Initialize tides per second

// Sample characters and banners
const Characters = [
    new Character('Jordan', 5, false, false, 1, 0),
    new Character('Alex', 4, false, false, 1, 0),
    new Character('Cassandra', 3, false, false, 0, 0),
    new Character('Elizabeth', 5, false, false, 2, 0),
    new Character('Murakami', 10, false, false, 1, 0),
    new Character('Zach', 4, false, false, 2, 0),
    new Character('Jaqueline', 10, false, false, 1, 0),
    new Character('Nathan', 2, false, false, 1, 0),
    new Character('Oliver', 5, false, false, 0, 0),
    new Character('Sophia', 1, false, false, 2, 0),
    new Character('Liam', 3, false, false, 1, 0),
    new Character('Emily', 4, false, false, 0, 0),
    new Character('Aiden', 2, false, false, 2, 0),
    new Character('Lucas', 5, false, false, 1, 0),
    new Character('Mia', 3, false, false, 0, 0),
    new Character('Ethan', 4, false, false, 2, 0),
    new Character('Emma', 5, false, false, 0, 0),
    new Character('Charlotte', 3, false, false, 1, 0),
    new Character('Amelia', 4, false, false, 2, 0),
    new Character('Mason', 2, false, false, 0, 0),
    new Character('Isabella', 5, false, false, 1, 0),
    new Character('Logan', 4, false, false, 2, 0),
    new Character('Harper', 3, false, false, 0, 0),
    new Character('James', 5, false, false, 1, 0),
    new Character('Avery', 2, false, false, 2, 0),
    new Character('Benjamin', 3, false, false, 0, 0),
    new Character('Evelyn', 4, false, false, 1, 0),
    new Character('Henry', 5, false, false, 2, 0),
    new Character('Ella', 3, false, false, 0, 0),
    new Character('Jack', 4, false, false, 1, 0),
    new Character('Lily', 2, false, false, 2, 0),
    new Character('Samuel', 5, false, false, 0, 0),
    new Character('Grace', 3, false, false, 1, 0),
    new Character('David', 4, false, false, 2, 0),
    new Character('Zoe', 1, false, false, 0, 0),
    new Character('Matthew', 2, false, false, 1, 0),
    new Character('Hannah', 3, false, false, 2, 0),
    new Character('Joseph', 5, false, false, 0, 0),
    new Character('Victoria', 4, false, false, 1, 0),
    new Character('Daniel', 3, false, false, 2, 0),
    new Character('Chloe', 5, false, false, 0, 0),
    new Character('Michael', 4, false, false, 1, 0),
    new Character('Sofia', 3, false, false, 2, 0),
    new Character('Alexander', 2, false, false, 0, 0),
    new Character('Aria', 4, false, false, 1, 0),
    new Character('Sebastian', 5, false, false, 2, 0),
    new Character('Layla', 3, false, false, 0, 0),
    new Character('William', 4, false, false, 1, 0),
    new Character('Aubrey', 2, false, false, 2, 0),
    new Character('Owen', 5, false, false, 0, 0),
    new Character('Scarlett', 3, false, false, 1, 0),
    new Character('Gabriel', 4, false, false, 2, 0),
    new Character('Lila', 1, false, false, 0, 0),
    new Character('Carter', 2, false, false, 1, 0),
    new Character('Ellie', 3, false, false, 2, 0),
    new Character('Wyatt', 5, false, false, 0, 0),
    new Character('Zoey', 4, false, false, 1, 0),
    new Character('Julian', 3, false, false, 2, 0),
    new Character('Nora', 5, false, false, 0, 0),
    new Character('Grayson', 4, false, false, 1, 0),
    new Character('Hazel', 3, false, false, 2, 0),
    new Character('Jayden', 2, false, false, 0, 0),
    new Character('Stella', 4, false, false, 1, 0),
    new Character('Levi', 5, false, false, 2, 0),
    new Character('Lucy', 3, false, false, 0, 0),
    new Character('Leo', 4, false, false, 1, 0),
    new Character('Mila', 2, false, false, 2, 0),
    new Character('Isaac', 5, false, false, 0, 0),
    new Character('Eleanor', 3, false, false, 1, 0),
    new Character('Lincoln', 4, false, false, 2, 0),
    new Character('Penelope', 1, false, false, 0, 0),
    new Character('Anthony', 2, false, false, 1, 0),
    new Character('Aurora', 3, false, false, 2, 0),
    new Character('Hudson', 5, false, false, 0, 0),
    new Character('Riley', 4, false, false, 1, 0),
    new Character('Dylan', 3, false, false, 2, 0),
    new Character('Savannah', 5, false, false, 0, 0),
    new Character('Caleb', 4, false, false, 1, 0),
    new Character('Willow', 3, false, false, 2, 0),
    new Character('Christian', 2, false, false, 0, 0),
    new Character('Brooklyn', 4, false, false, 1, 0),
    new Character('Andrew', 5, false, false, 2, 0),
    new Character('Paisley', 3, false, false, 0, 0),
    new Character('Jaxon', 4, false, false, 1, 0),
    new Character('Everly', 2, false, false, 2, 0),
    new Character('Joshua', 5, false, false, 0, 0),
    new Character('Anna', 3, false, false, 1, 0),
    new Character('Luke', 4, false, false, 2, 0),
    new Character('Violet', 1, false, false, 0, 0),
    new Character('Asher', 2, false, false, 1, 0),
    new Character('Aurora', 3, false, false, 2, 0),
    new Character('Connor', 5, false, false, 0, 0),
    new Character('Samantha', 4, false, false, 1, 0),
    new Character('Jonathan', 3, false, false, 2, 0),
    new Character('Leah', 5, false, false, 0, 0),
    new Character('Julian', 4, false, false, 1, 0),
    new Character('Bella', 3, false, false, 2, 0),
    new Character('Robert', 2, false, false, 0, 0),
    new Character('Madelyn', 4, false, false, 1, 0),
    new Character('Aaron', 5, false, false, 2, 0),
    new Character('Paisley', 3, false, false, 0, 0),
    new Character('Eli', 4, false, false, 1, 0),
    new Character('Cora', 2, false, false, 2, 0),
    new Character('Isaiah', 5, false, false, 0, 0),
    new Character('Adeline', 3, false, false, 1, 0),
    new Character('Hunter', 4, false, false, 2, 0),
    new Character('Lydia', 1, false, false, 0, 0),
    new Character('Charles', 2, false, false, 1, 0),
    new Character('Ruby', 3, false, false, 2, 0),
    new Character('Ryan', 5, false, false, 0, 0),
    new Character('Alice', 4, false, false, 1, 0),
    new Character('Nathaniel', 3, false, false, 2, 0),
    new Character('Serenity', 5, false, false, 0, 0),
    new Character('Parker', 4, false, false, 1, 0),
    new Character('Autumn', 3, false, false, 2, 0),
    new Character('Adrian', 2, false, false, 0, 0),
    new Character('Genesis', 4, false, false, 1, 0),
    new Character('Nolan', 5, false, false, 2, 0),
    new Character('Kennedy', 3, false, false, 0, 0),
    new Character('Brayden', 4, false, false, 1, 0),
    new Character('Sadie', 2, false, false, 2, 0),
    new Character('Ezekiel', 5, false, false, 0, 0),
    new Character('Eva', 3, false, false, 1, 0),
    new Character('Xavier', 4, false, false, 2, 0),
    new Character('Caroline', 1, false, false, 0, 0),
    new Character('Jace', 2, false, false, 1, 0),
    new Character('Elena', 3, false, false, 2, 0),
    // Added 80 more characters including two additional 10-star characters
    new Character('Archer', 4, false, false, 1, 0),
    new Character('Harley', 5, false, false, 2, 0),
    new Character('Harrison', 3, false, false, 0, 0),
    new Character('Skylar', 4, false, false, 1, 0),
    new Character('Everett', 2, false, false, 2, 0),
    new Character('Camila', 5, false, false, 0, 0),
    new Character('Weston', 4, false, false, 1, 0),
    new Character('Sloane', 3, false, false, 2, 0),
    new Character('Knox', 10, false, false, 2, 0),
    new Character('Kinsley', 5, false, false, 1, 0),
    new Character('Wade', 3, false, false, 2, 0),
    new Character('Nova', 4, false, false, 0, 0),
    new Character('Kingston', 2, false, false, 1, 0),
    new Character('Paisley', 10, false, false, 2, 0),
    new Character('Silas', 5, false, false, 0, 0),
    new Character('Nash', 4, false, false, 1, 0),
    new Character('Ember', 3, false, false, 2, 0),
    new Character('Lachlan', 5, false, false, 0, 0),
    new Character('Jade', 4, false, false, 1, 0),
    new Character('Tristan', 3, false, false, 2, 0),
    new Character('Cassidy', 2, false, false, 0, 0),
    new Character('Roman', 5, false, false, 1, 0),
    new Character('Felicity', 4, false, false, 2, 0),
    new Character('Arlo', 3, false, false, 0, 0),
    new Character('Maddox', 5, false, false, 1, 0),
    new Character('Ivy', 4, false, false, 2, 0),
    new Character('Jasper', 3, false, false, 0, 0),
    new Character('Finn', 5, false, false, 1, 0),
    new Character('Wren', 2, false, false, 2, 0),
    new Character('Sage', 4, false, false, 0, 0),
    new Character('Gideon', 3, false, false, 1, 0),
    new Character('Iris', 5, false, false, 2, 0),
    new Character('Bodhi', 4, false, false, 0, 0),
    new Character('Piper', 3, false, false, 1, 0),
    new Character('Colt', 5, false, false, 2, 0),
    new Character('Blake', 2, false, false, 0, 0),
    new Character('Milo', 4, false, false, 1, 0),
    new Character('Daisy', 3, false, false, 2, 0),
    new Character('Reid', 5, false, false, 0, 0),
    new Character('Rowan', 4, false, false, 1, 0),
    new Character('Mackenzie', 3, false, false, 2, 0),
    new Character('Phoenix', 2, false, false, 0, 0),
    new Character('Ivy', 5, false, false, 1, 0),
    new Character('Beckett', 4, false, false, 2, 0),
    new Character('Tate', 3, false, false, 0, 0),
    new Character('Harper', 5, false, false, 1, 0),
    new Character('Sawyer', 4, false, false, 2, 0),
    new Character('Caden', 3, false, false, 0, 0),
    new Character('Gemma', 5, false, false, 1, 0),
    new Character('Leighton', 4, false, false, 2, 0),
    new Character('Ford', 3, false, false, 0, 0),
    new Character('Logan', 5, false, false, 1, 0),
    new Character('Knox', 4, false, false, 2, 0),
    new Character('Mabel', 3, false, false, 0, 0),
    new Character('Ace', 5, false, false, 1, 0),
    new Character('Sloane', 4, false, false, 2, 0),
    new Character('Reagan', 3, false, false, 0, 0),
    new Character('Luca', 5, false, false, 1, 0),
    new Character('Macy', 4, false, false, 2, 0),
    new Character('Brody', 3, false, false, 0, 0),
    new Character('Griffin', 5, false, false, 1, 0),
    new Character('Margo', 4, false, false, 2, 0),
    new Character('Walker', 3, false, false, 0, 0),
    new Character('Remi', 5, false, false, 1, 0),
    new Character('Hudson', 4, false, false, 2, 0),
    new Character('Jett', 3, false, false, 0, 0)
];

const Banners = [
    new Banner('Basic', 1, true),
    new Banner('Advanced', 2, false)
];

// Collection tracker class
class CollectionTracker {
    constructor() {
        this.collection = {};
    }

    // Method to add a character to the collection
    addCharacter(character) {
        if (!this.collection[character.name]) {
            this.collection[character.name] = 1;
        } else {
            this.collection[character.name]++;
        }
    }



    // Method to get the entire collection object
    getCollection() {
        return this.collection;
    }

    // Method to display the collection in a <p> element
    displayCollection(elementId) {
        const collectionOutput = document.getElementById(elementId);
        if (!collectionOutput) {
            console.error(`Element with id ${elementId} not found.`);
            return;
        }

        // Get the character names sorted by stars in descending order
        const sortedCharacters = Object.keys(this.collection).sort((a, b) => {
            const charA = Characters.find(char => char.name === a);
            const charB = Characters.find(char => char.name === b);
            return charB.stars - charA.stars;
        });

        let collectionHTML = "<strong>=== My Collection ===</strong><br>";
        sortedCharacters.forEach(characterName => {
            const character = Characters.find(char => char.name === characterName);
            const stars = this.getStarsEmoji(character.stars);
            collectionHTML += `${characterName} ${stars} x${this.collection[characterName]}<br>`;
        });

        collectionOutput.innerHTML = collectionHTML;
    }

    getStarsEmoji(stars) {
        let starsEmoji = '';
        for (let i = 0; i < stars; i++) {
            starsEmoji += '⭐'; // Using star emoji here
        }
        return starsEmoji;
    }
}

const collectionTracker = new CollectionTracker();

// Current active banner
let currentBanner = Banners[0]; // Set to Basic initially

// Function to create a weighted array based on stars
function createWeightedArray(arr) {
    let weightedArray = [];
    arr.forEach(character => {
        const weight = Math.max(1, 10 - character.stars); // Adjusted weight calculation
        for (let i = 0; i < weight; i++) {
            weightedArray.push(character);
        }
    });
    return weightedArray;
}

// Function to perform a weighted random selection
function gamble(arr) {
    const randomIndex = Math.floor(Math.random() * arr.length);
    return arr[randomIndex];
}

// Function to simulate pulling a character
function pull() {
    let rolledChar; // Declare rolledChar in the function scope

    if (currentBanner === Banners[0]) { // Basic Banner
        let availableCharacters = Characters.filter(character => character.bannerID === 1 || character.bannerID === 0);
        let weightedCharacters = createWeightedArray(availableCharacters);
        rolledChar = gamble(weightedCharacters); // Assign rolledChar here
    } else if (currentBanner === Banners[1]) { // Advanced Banner
        let availableCharacters = Characters.filter(character => character.bannerID === 2 || character.bannerID === 0);
        let weightedCharacters = createWeightedArray(availableCharacters);
        rolledChar = gamble(weightedCharacters); // Assign rolledChar here
    }
    
    collectionTracker.addCharacter(rolledChar); // Add the pulled character to the collection tracker
    collectionTracker.displayCollection('collectionOutput'); // Update the collection display

    return rolledChar;
}

// Function to display the collection in the console
function showCollection() {
    const collection = collectionTracker.getCollection();
    console.log("=== My Collection ===");
    for (let character in collection) {
        if (collection.hasOwnProperty(character)) {
            console.log(`${character} x${collection[character]}`);
        }
    }
}

function singlePull() {
    if(tides >= 10) {
        tides = tides - 10;
        let output = pull();
        if (output.name == 'Jaqueline'){
            document.getElementById('pullResult').innerHTML = ("This is truly unfortunate. You have succumbed to the worst luck possible. Though Jaqueline is technically a 10 Star, you must prepare for pain. In 35 hours and 18 minutes, your uvula shall dissconnect from your mouth.");
        }
        document.getElementById('pullResult').innerHTML = ("You pulled: " + output.name);
    }
    else {
        document.getElementById('pullResult').innerHTML = ("You do not have enough Tides! You need " + (10 - tides) + " more!");
    }
}

function multiPull() {
    if(tides >= 100) {
        tides = tides - 100;    
        let op1 = pull();
        let op2 = pull();
        let op3 = pull();
        let op4 = pull();
        let op5 = pull();
        let op6 = pull();
        let op7 = pull();
        let op8 = pull();
        let op9 = pull();
        let op10 = pull();
        document.getElementById('pullResult').innerHTML = ("You pulled: " + op1.name + ", " + op2.name + ", " + op3.name + ", " + op4.name + ", " + op5.name + ", " + op6.name + ", " + op7.name + ", " + op8.name + ", " + op9.name + ", " + op10.name + ".");
    }
    else {
        document.getElementById('pullResult').innerHTML = ("You do not have enough Tides! You need " + (100 - tides) + " more!");
    }  
}



let SB;

function switchBanner() {
    if (currentBanner == Banners[0]) {
        document.getElementById('CB').innerHTML = "Current Banner: Advanced";
        SB = document.getElementById('SwitchButton');
        SB.textContent = "Switch to Basic";
        currentBanner = Banners[1];
    } else if (currentBanner == Banners[1]) {
        document.getElementById('CB').innerHTML = "Current Banner: Basic";
        SB = document.getElementById('SwitchButton');
        SB.textContent = "Switch to Advanced";
        currentBanner = Banners[0];
    }
}

function beep() {
    document.getElementById('beamer').style = 'visibility: visible;';
}

function boop() {
    console.log("Cheater Detected!");
    tides += 100000;
}

// Initialize the selected character
let selectedCharacter = null;

function watchAd() {
    document.getElementById('pullResult').innerHTML = 'Thank you to our sponsor! Laid: Bedroom Legends!';
    tides = tides + 15;
}

function buyTides() {
    document.getElementById('pullResult').innerHTML = 'Byebye $10';
    tides = tides + 100;
}

// Function to update tides every second
function update() {
    setInterval(() => {
        tides += tidesPerSecond;
        document.getElementById('tidesAmount').innerHTML = ("Tides: " + tides);
    }, 100);
}

document.addEventListener('DOMContentLoaded', () => {
    update();
});