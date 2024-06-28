// Define the Character class
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

// Define the Banner class
class Banner {
    constructor(title, id, isActive = false) {
        this.title = title;
        this.id = id;
        this.isActive = isActive;
    }
}

// Sample characters and banners
const Characters = [
    new Character('Jordan', 5, false, false, 1, 0),
    new Character('Alex', 4, false, false, 1, 0),
    new Character('Cassandra', 3, false, false, 0, 0),
    new Character('Elizabeth', 5, false, false, 2, 0),
    new Character('Murakami', -5, false, false, 0, 0)
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

        let collectionHTML = "<strong>=== My Collection ===</strong><br>";
        for (let character in this.collection) {
            if (this.collection.hasOwnProperty(character)) {
                // Convert stars count to star emojis
                const stars = this.getStarsEmoji(Characters.find(char => char.name === character).stars);
                collectionHTML += `${character} ${stars} x${this.collection[character]}<br>`;
            }
        }

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

// Current active banner
let currentBanner = Banners[0]; // Set to Basic initially

// Function to create a weighted array based on stars
function createWeightedArray(arr) {
    let weightedArray = [];
    arr.forEach(character => {
        const weight = 6 - character.stars; // Higher stars mean lower weight
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

const collectionTracker = new CollectionTracker();

// Function to simulate pulling a character
function pull() {
    let rolledChar; // Declare rolledChar in the function scope

    if (currentBanner === Banners[0]) { // Basic Banner
        let availableCharacters = Characters.filter(character => character.bannerID === 1 || character.bannerID === 0);
        let weightedCharacters = createWeightedArray(availableCharacters);
        rolledChar = gamble(weightedCharacters); // Assign rolledChar here
    }
    else if (currentBanner === Banners[1]) { // Advanced Banner
        let availableCharacters = Characters.filter(character => character.bannerID === 2 || character.bannerID === 0);
        let weightedCharacters = createWeightedArray(availableCharacters);
        rolledChar = gamble(weightedCharacters); // Assign rolledChar here
    }

    console.log("You pulled:", rolledChar); // Log rolledChar here, after it has been assigned
    collectionTracker.addCharacter(rolledChar); // Add the pulled character to the collection tracker
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

let SB;

function switchBanner() {
    if (currentBanner == Banners[0]) {
        document.getElementById('CB').innerHTML = "Current Banner: Advanced";
        SB = document.getElementById('SwitchButton');
        SB.textContent = "Switch to Basic";
        currentBanner = Banners[1];
    }
    else if (currentBanner == Banners[1]) {
        document.getElementById('CB').innerHTML = "Current Banner: Basic";
        SB = document.getElementById('SwitchButton');
        SB.textContent = "Switch to Advanced";
        currentBanner = Banners[0];
    }
}

function updateCollection() {
    setInterval(() => {
        collectionTracker.displayCollection('collectionOutput');
    }, 1000);
}

updateCollection();