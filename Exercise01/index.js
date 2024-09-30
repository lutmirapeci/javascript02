const myArray = [1, 5, 10, 11, 20, 34];

const changeArray = (array) => array.map((number) => (number < 10 ? number * 2 : number * 4));

console.log(changeArray(myArray));
