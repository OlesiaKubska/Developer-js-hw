const films = require("./sw-films.json");
const planets = require("./sw-planets.json");
const people = require("./sw-people.json");
const starships = require("./sw-starships.json");

// count sum of all starships cost from episodes 4-6
console.log(
  "Sum of all starships cost from episodes 4 - 6 is: " +
    sumAllStarshipsCostFromEpisodes(4, 6)
);

function sumAllStarshipsCostFromEpisodes(startEp, endEp) {
  let sum = 0;
  // wybieramy filmy, których episode_id wynosi 4, 5 lub 6
  const selectedFilms = films.filter(film => film.episode_id >= startEp && film.episode_id <= endEp);
  
  //Z każdego wybranego filmu zapisujemy listę adresów URL statków kosmicznych
  const starshipUrls = new Set();
  selectedFilms.forEach(film => {
    film.starships.forEach(ship => starshipUrls.add(ship));
  });
  
  starships.forEach(ship => {
    if (starshipUrls.has(ship.url)) {
      sum += parseInt(ship.cost_in_credits, 10) || 0; // Dodajemy tylko jeśli wartość jest liczbową
    } //Funkcja parseInt konwertuje string na liczbę, a || 0 zapewnia, że jeśli wartość cost_in_credits jest null, undefined lub "unknown", to zostanie zastąpiona przez 0.
  });

  return sum;
}

// find the fastest starship you can afford having 8500000 credits

console.log(
  "Fastest ship I can get for up to 8500000 is: " +
    getFastestShipFor(8500000).name
);

function getFastestShipFor(money) {
  let fastestShip = null;
  let maxSpeed = 0;

  starships.forEach(ship => {
    const cost = parseInt(ship.cost_in_credits, 10);
    const speed = parseInt(ship.MGLT, 10);

    // Sprawdzamy, czy statek spełnia kryterium cenowe i czy jego prędkość jest większa niż obecnie zapisana najwyższa prędkość
    if (cost <= money && speed > maxSpeed) {
      fastestShip = ship; // Aktualizacja najszybszego statku
      maxSpeed = speed;   // Aktualizacja najwyższej prędkości
    }
  });

  return fastestShip;
}

// find planet name with the lowest difference between the rotation period and orbital period

console.log(
  "Planet name with the lowest difference between the rotation period and orbital period is: " +
    getPlanetNameWithLowestDifference("rotation_period", "orbital_period")
);

function getPlanetNameWithLowestDifference(key1, key2) {
  let planetName = null;
  let lowestDifference = Infinity;
  
  planets.forEach(planet => {
    const rotationPeriod = parseInt(planet.key1, 10);
    const orbitalPeriod = parseInt(planet.key2, 10);

    // Sprawdzanie, czy obie wartości są liczbami
    if (!isNaN(rotationPeriod) && !isNaN(orbitalPeriod)) {
      const difference = Math.abs(rotationPeriod - orbitalPeriod);

      if (difference < lowestDifference) {
        lowestDifference = difference;
        planetName = planet;
      }
    }
  });

  return planetName ? planetName.name : null;
}

// map all starships with crew <= 4 that were created between 10 dec 2014 and 15 dec 2014

console.log(
  "Ships with max crew of 4 created between 10.12.2014 - 12.12.2014 number is: " +
    getCrewShipFrom(4, new Date(2014, 12, 10), new Date(2014, 12, 12)).length
);

function getCrewShipFrom(maxCrew, dateStart, dateEnd) {
  return starships.filter(ship => {
    const createdDate = new Date(ship.created);
    const crewSize = parseCrewSize(ship.crew);

    return crewSize <= maxCrew && createdDate >= dateStart && createdDate <= dateEnd;
  });
}

function parseCrewSize(crew) {
  const parts = crew.split('-');
  return parts.length === 2 ? parseInt(parts[1], 10) : parseInt(crew, 10);
}

// create an array of people’s names from episodes 1 and 5 sorted by the diameter of origin planet low to high

console.log(
  "People from ep 1 - 5 sorted by origin planet diameter low to high: " +
    getPeopleSortedByOriginPlanetDiameter(1, 5)
);

function getPeopleSortedByOriginPlanetDiameter(startEp, endEp) {
  const charactersFromEpisodes = new Set();
  films.forEach(film => {
    if (film.episode_id === startEp || film.episode_id === endEp) {
      film.characters.forEach(character => charactersFromEpisodes.add(character));
    }
  });

  const peopleWithPlanetDiameter = people
    .filter(person => charactersFromEpisodes.has(person.url))
    .map(person => {
      const planet = planets.find(p => p.url === person.homeworld);
      return {
        name: person.name,
        planetDiameter: planet ? parseInt(planet.diameter, 10) : 0
      };
    });

  return peopleWithPlanetDiameter
    .sort((a, b) => a.planetDiameter - b.planetDiameter)
    .map(person => person.name);
}