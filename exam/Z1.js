//Scale riddle. With 8 balls, ex.
//[1, 2, 1, 1, 1, 1, 1, 1] get position of the “heavy” ball.
//Indexes are to be chosen at random.
//Use weights comparison only two times.

const arr = [1, 2, 1, 1, 1, 1, 1, 1];

function findHeavyBall(balls) {
 // Podział kul na trzy grupy
 let group1 = balls.slice(0, 3);
 let group2 = balls.slice(3, 6);
 let group3 = balls.slice(6);

 // Pierwsze ważenie
 if (sum(group1) === sum(group2)) {
  // Cięższa kula musi być w grupie 3
  return 6 + (group3[0] === group3[1] ? 2 : group3[0] < group3[1] ? 1 : 0);
 } else {
  // Drugie ważenie między dwiema grupami
  let heavierGroup = sum(group1) > sum(group2) ? group1 : group2;
  let baseIndex = sum(group1) > sum(group2) ? 0 : 3;
  return (
   baseIndex +
   (heavierGroup[0] === heavierGroup[1]
    ? 2
    : heavierGroup[0] < heavierGroup[1]
    ? 1
    : 0)
  );
 }

 function sum(arr) {
  return arr.reduce((a, b) => a + b, 0);
 }
}

console.log(findHeavyBall(arr));
