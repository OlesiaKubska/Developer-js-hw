const financialData = require("./financial.json");


function getFiancialObject() {
  const financialObject = {
    sum2014: calculateTotalSum2014(financialData), // Całkowita suma wydatków w 2014 roku
    costCompany: earningsCostCompany(financialData), // Zarobki na firmę
    spendingsType: calculateTransactionType(financialData), // Wydatki według typu transakcji
    spendingsMonth: calculateSpendingsMonth(financialData), //Wydatki miesięczne
    spendingsDayOfWeek: calculateSpendingsPerDayOfWeek(financialData), // Wydatki według dnia tygodnia
  };

  return financialObject;
}


//Funkcja do Obliczania Wydatków w 2014 roku
function calculateTotalSum2014(data) {
  return data
    .filter(record => {
      // Przekształć datę na format YYYY-MM-DD, aby łatwiej porównać rok
      const year = record.detailsOfPayent.date.split("-")[2];
      return year === "2014";
    })
    .reduce((total, record) => {
      // Dodaj koszt (cost) do sumy, konwertując go na liczbowy typ
      return total + parseFloat(record.cost);
    }, 0); // Początkowa wartość sumy to 0
}


//Funkcja do Obliczania Zarobków na Firmę
function earningsCostCompany(data) {
  //pusty obiekt earnings do przechowywania sum
  const earnings = {};

  data.forEach(record => {
    const companyName = record.detailsOfPayent.company; //Pobieramy nazwę firmy (companyName) 
    const cost = parseFloat(record.cost); //Konwertujemy koszt (cost) na typ liczbowy za pomocą parseFloat

    if (!earnings[companyName]) {
      earnings[companyName] = 0; //Sprawdzamy, czy firma już istnieje w obiekcie earnings. Jeśli nie, inicjalizujemy jej wartość na 0.
    }
  
    earnings[companyName] += cost; //Dodajemy koszt do sumy dla danej firmy.
  });

  return earnings;
}


//Funkcja do Obliczania Wydatków Według Typu Transakcji
function calculateTransactionType(data) {
  const spendingsByType = {};

  data.forEach(record => {
    const transactionType = record.detailsOfPayent.Type; //Pobieramy Type transakcji z detailsOfPayent.Type
    const cost = parseFloat(record.cost); //Konwertujemy cost na typ liczbowy za pomocą parseFloat.

    if (!spendingsByType[transactionType]) {
      spendingsByType[transactionType] = 0; //Sprawdzamy, czy typ transakcji już istnieje w obiekcie spendingsByType. Jeśli nie, inicjalizujemy jego wartość na 0.
    }

    spendingsByType[transactionType] += cost; //Dodajemy koszt do sumy dla danego typu transakcji.
  });

  return spendingsByType;
}


//Funkcja do Obliczania Wydatków Miesięcznych
function calculateSpendingsMonth(data) {
  const spendingsByMonth = {};

  data.forEach(record => {
    // Format daty w danych to DD-MM-YYYY, więc miesiąc znajduje się na drugiej pozycji po podziale
    const month = record.detailsOfPayent.date.split("-")[1];
    const cost = parseFloat(record.cost); //Konwertujemy cost na typ liczbowy.

    if (!spendingsByMonth[month]) {
      spendingsByMonth[month] = 0; //Sprawdzamy, czy dany miesiąc już istnieje w obiekcie spendingsByMonth. Jeśli nie, inicjalizujemy jego wartość na 0.
    }

    spendingsByMonth[month] += cost; //Dodajemy koszt do sumy dla danego miesiąca.
  });

  return spendingsByMonth;
}


// Funkcja do Obliczania Wydatków Dziennych(w Zależności od Dnia Tygodnia)
//Tworzymy funkcję pomocniczą getDayOfWeek, która przekształca datę (w formacie DD-MM-YYYY) na nazwę dnia tygodnia.
function getDayOfWeek(dateString) {
  const [day, month, year] = dateString.split("-").map(Number);
  const date = new Date(year, month - 1, day);
  const daysOfWeek = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
  return daysOfWeek[date.getDay()];
}

function calculateSpendingsPerDayOfWeek(data) {
  const spendingsByDayOfWeek = {}; //pusty obiekt spendingsByDayOfWeek do przechowywania sum wydatków

  data.forEach(record => {
    const dayOfWeek = getDayOfWeek(record.detailsOfPayent.date); //Pobieramy nazwę dnia tygodnia za pomocą funkcji getDayOfWeek.
    const cost = parseFloat(record.cost); //Konwertujemy cost na typ liczbowy.

    if (!spendingsByDayOfWeek[dayOfWeek]) {
      spendingsByDayOfWeek[dayOfWeek] = 0;
    }

    spendingsByDayOfWeek[dayOfWeek] += cost; //Dodajemy koszt do sumy dla danego dnia tygodnia.
  });

  return spendingsByDayOfWeek;
}

// Wywołanie funkcji
const finalFinancialObject = getFiancialObject(financialData);
console.log("Financial data: ", finalFinancialObject);