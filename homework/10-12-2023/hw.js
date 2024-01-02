// ●	Solve Josephus's Problem for 7 soldiers using JavaScript. (You can try to solve it with classes)
// ●	Display in the console:
// ○	1 Kills 2
// ○	3 Kills 4
// ○	5 Kills 6
// ○	7 Kills 1
// ○	3 Kills 5
// ○	7 Kills 3
// ○	7 Remains alive

class Soldier {
 constructor(id) {
  this.id = id;
  this.next = null;
 }
}

class JosephusCircle {
 constructor(n) {
  this.head = null;
  this.createCircle(n);
 }

 createCircle(n) {
  let first = new Soldier(1);
  let previous = first;

  for (let i = 2; i <= n; i++) {
   let soldier = new Soldier(i);
   previous.next = soldier;
   previous = soldier;
  }

  // Zamykanie koła
  previous.next = first;
  this.head = first;
 }

 eliminateEverySecond() {
  let current = this.head;

  while (current.next !== current) {
   console.log(`${current.id} Kills ${current.next.id}`);
   current.next = current.next.next; // Eliminacja co drugiego żołnierza
   current = current.next; // Przejście do następnego żołnierza
  }

  console.log(`${current.id} Remains alive`);
 }
}

// Tworzenie koła z 7 żołnierzami i rozpoczęcie procesu eliminacji
let circle = new JosephusCircle(7);
circle.eliminateEverySecond();
