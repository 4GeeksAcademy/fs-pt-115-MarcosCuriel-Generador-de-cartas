import "bootstrap";
import "./style.css";
import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

//Objetos dados
const suits = {
	'hearts': { symbol: '♥', name: 'Hearts', color: 'red' },
	'diamonds': { symbol: '♦', name: 'Diamonds', color: 'red' },
	'clubs': { symbol: '♣', name: 'Clubs', color: 'black' },
	'spades': { symbol: '♠', name: 'Spades', color: 'black' }
};
const values = {
	'A': { symbol: 'A', name: 'Ace' },
	'2': { symbol: '2', name: 'Two' },
	'3': { symbol: '3', name: 'Three' },
	'4': { symbol: '4', name: 'Four' },
	'5': { symbol: '5', name: 'Five' },
	'6': { symbol: '6', name: 'Six' },
	'7': { symbol: '7', name: 'Seven' },
	'8': { symbol: '8', name: 'Eight' },
	'9': { symbol: '9', name: 'Nine' },
	'10': { symbol: '10', name: 'Ten' },
	'J': { symbol: 'J', name: 'Jack' },
	'Q': { symbol: 'Q', name: 'Queen' },
	'K': { symbol: 'K', name: 'King' }
};

//Función genradora de carta
const generateCard = () => {
	const suitKeys = Object.keys(suits);
	const valueKeys = Object.keys(values);

	const randomSuits = suitKeys[Math.floor(Math.random() * suitKeys.length)];
	const randomValues = valueKeys[Math.floor(Math.random() * valueKeys.length)];

	const suit = suits[randomSuits];
	const value = values[randomValues];

	//Llamar los ID de los div de la carta
	const card = document.getElementById('card');
	const topValue = document.getElementById('topValue');
	const topSuit = document.getElementById('topSuit');
	const centerSuit = document.getElementById('centerSuit');
	const bottomValue = document.getElementById('bottomValue');
	const bottomSuit = document.getElementById('bottomSuit');
	const cardName = document.getElementById('cardName');

	//Cambiar el color de la carta
	card.className = `card ${suit.color}`;

	// Cambiar valor de la carta
	topValue.textContent = value.symbol;
	topSuit.textContent = suit.symbol;
	centerSuit.textContent = suit.symbol;
	bottomValue.textContent = value.symbol;
	bottomSuit.textContent = suit.symbol;

	//Cambiar valor de la carta
	cardName.textContent = `${value.name} of ${suit.name}`;
}
generateCard();

document.getElementById('generateBtn').addEventListener('click', generateCard);