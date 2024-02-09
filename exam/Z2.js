//Create a solution that will tell us what poker set we have.
//The solution is to deal us 5 cards from the standard 52 card deck at random.
//Based on cards on our hand the program should tell us what is the best poker set.
//Reference: https://pl.wikipedia.org/wiki/Poker#Starsze%C5%84stwo_uk%C5%82ad%C3%B3w_kart

//Tworzenie Talii Kart przez kombinację rangi(2, 3, ..., A)
//i koloru(np.H - Hearts, D - Diamonds, C - Clubs, S - Spades).
function createDeck() {
 const suits = ["H", "D", "C", "S"];
 const ranks = [
  "2",
  "3",
  "4",
  "5",
  "6",
  "7",
  "8",
  "9",
  "10",
  "J",
  "Q",
  "K",
  "A",
 ];
 let deck = [];

 for (let suit of suits) {
  for (let rank of ranks) {
   deck.push(rank + suit);
  }
 }

 return deck;
}

//Używając funkcji losującej, mieszając talię kart,
//aby zapewnić losowość rozdania.
function shuffleDeck(deck) {
 for (let i = deck.length - 1; i > 0; i--) {
  const j = Math.floor(Math.random() * (i + 1));
  [deck[i], deck[j]] = [deck[j], deck[i]];
 }
}

//wybieramy losowo 5 kart z potasowanej talii, tworząc rękę gracza.
function dealHand(deck) {
 return deck.slice(0, 5);
}

//Analiza Ręki: Program analizuje rozdaną rękę, aby określić najlepszy układ pokerowy.
function analyzeHand(hand) {
 return "Hand analysis logic goes here";
}

let deck = createDeck();
shuffleDeck(deck);
let hand = dealHand(deck);
let pokerSet = analyzeHand(hand);

console.log("Hand:", hand);
console.log("Best Poker Set:", pokerSet);
