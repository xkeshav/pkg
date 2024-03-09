// return an array containing all english alphabets in capital case.
const alphabet = Array.from(Array(26), (_: undefined, i:number) => String.fromCharCode(65 + i));
// check in capital and small alphabet range
const isAlphabet = (key: number) => (65 <= key && key <= 90) || (key >= 97 && key <= 122);
// check whether given input is number or not ( i.e. number between 0 to 9)
const isNumber = (key: number) => 48 <= key && key <= 57;
// get random value from given array
const getRandomValueFrom = (array: any = []) => array[Math.floor(Math.random() * array.length)];

export { alphabet, getRandomValueFrom, isAlphabet, isNumber };
