//a. Sprawdzenie, czy dana liczba jest liczbą pierwszą

function isPrime(num) {
    if (num <= 1) return false; //Liczby mniejsze lub równe 1 nie są liczbami pierwszymi, więc funkcja od razu zwraca false.
    if (num <= 3) return true; //Liczby 2 i 3 są liczbami pierwszymi, więc funkcja zwraca true dla tych wartości.

    if (num % 2 === 0 || num % 3 === 0) return false; //Jeśli liczba jest podzielna przez 2 lub 3, nie jest liczbą pierwszą. Funkcja zwraca false w takim przypadku.

    //Funkcja iteruje przez liczby, zaczynając od 5, zwiększając i o 6 przy każdym obrocie pętli. Dzieje się tak, 
    //ponieważ każda liczba pierwsza większa niż 3 jest w formie 6k ± 1.
    for (let i = 5; i * i <= num; i += 6) {
        //Funkcja sprawdza podzielność num przez te liczby. Jeśli znajdzie dzielnik, zwraca false.
        if (num % i === 0 || num % (i + 2) === 0) return false; 
    }

    return true; //Jeśli żaden z powyższych warunków nie został spełniony, liczba jest uznawana za pierwszą i funkcja zwraca true.
}
console.log(isPrime(2)); //true

//b. Zwracanie pierwszych n liczb pierwszych

function firstNPrimes(n) {
    const primes = []; //Tworzy pustą tablicę primes do przechowywania liczb pierwszych 
    let num = 2; //zmienną num, która zaczyna się od 2 (pierwsza liczba pierwsza)
    
    //używa pętli while, aby znaleźć i dodać liczby pierwsze do tablicy primes, 
    //aż ich liczba osiągnie n.Do sprawdzenia, 
    //czy liczba jest pierwsza, wykorzystuje funkcję isPrime
    
    while (primes.length < n) {
        if (isPrime(num)) { 
            primes.push(num);
        }
        num++;
    }
    return primes; //Po zebraniu n liczb pierwszych, tablica primes jest zwracana.
}

console.log(firstNPrimes(11)); //[2,  3,  5,  7, 11, 13, 17, 19, 23, 29, 31]