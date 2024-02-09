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
 const parsedHand = hand
  .map((card) => ({
   rank: card.substring(0, card.length - 1),
   suit: card.charAt(card.length - 1),
  }))
  .map((card) => ({
   rank: "23456789TJQKA".indexOf(card.rank) + 2,
   suit: card.suit,
  }));

 parsedHand.sort((a, b) => a.rank - b.rank);

 const isFlush = parsedHand.every(
  (card, _, [firstCard]) => card.suit === firstCard.suit
 );
 const isStraight = parsedHand.every(
  (card, index, arr) => index === 0 || card.rank === arr[index - 1].rank + 1
 );
 const rankCounts = parsedHand.reduce((acc, card) => {
  acc[card.rank] = (acc[card.rank] || 0) + 1;
  return acc;
 }, {});

 const counts = Object.values(rankCounts);
 const isFourOfAKind = counts.includes(4);
 const isThreeOfAKind = counts.includes(3);
 const isPair = counts.includes(2);
 const isTwoPair = counts.filter((count) => count === 2).length === 2;
 const isFullHouse = isThreeOfAKind && isPair;

 if (isFlush && isStraight && parsedHand[0].rank === 10) return "Royal Flush";
 if (isFlush && isStraight) return "Straight Flush";
 if (isFourOfAKind) return "Four of a Kind";
 if (isFullHouse) return "Full House";
 if (isFlush) return "Flush";
 if (isStraight) return "Straight";
 if (isThreeOfAKind) return "Three of a Kind";
 if (isTwoPair) return "Two Pair";
 if (isPair) return "One Pair";
 return "High Card";
}

function play() {
 let deck = createDeck();
 shuffleDeck(deck);
 let hand = dealHand(deck);
 let pokerSet = analyzeHand(hand);

 const handElement = document.getElementById("hand");
 handElement.innerHTML = "";

 // Add card-SVG imeges
 hand.forEach((card) => {
  const cardImage = document.createElement("img");
  cardImage.src = `cards-svg/${card}.svg`;
  cardImage.alt = `Card ${card}`;
  cardImage.width = 100;
  handElement.appendChild(cardImage);
 });

 const analysisElement = document.getElementById("analysis");
 analysisElement.textContent = "Best Poker Set: " + pokerSet;
}
