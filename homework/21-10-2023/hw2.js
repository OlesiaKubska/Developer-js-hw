// funkcja, która zwraca liczbę dni do następnego piątku


function daysToFriday() {
    let today = new Date(); //Tworzy nowy obiekt daty reprezentujący bieżącą datę i czas.
    
    let todayDay = today.getDay(); //Pobiera dzień tygodnia dla daty today. Wartości są od 0 (niedziela) do 6 (sobota)

    let friday = 5; //Ustawia wartość reprezentującą piątek (5)

    let daysTillFriday = friday - todayDay; // Oblicza różnicę dni do piątku

    // if (daysTillFriday <= 0) {
    //     daysTillFriday += 7;
    // }

    return daysTillFriday;
}

console.log(daysToFriday());