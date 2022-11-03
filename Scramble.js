const Words= ["Hippopotamus",
			  "Butterflies",
			  "Dog",
			  "Cat",
			  "Eagle",
			  "Tiger",
			  "Scramble",
			  "Elephant",
			  "Raccoon",
			  "setting",
			  ]; 
			  
			  
		
let word = randomWord(Words); 
//calling the function randomWordsand passing words array in that
		
		
		
function randomWord(My_array) { 
var num = Math.floor((Math.random() * My_array.length) +1);
console.log(My_array[num])
return My_array[num];
}



const mixed = scramble(word); 
//Whatever result we got word, passing that to scramble function
	

	
addText(mixed) //calling add text function


function scramble(word) {
  const scrambledArray = [];
  console.log("Inthebeginning"+word)
  word = word.split(''); //It will split all letters of the word to separate letters
  console.log("aftersplitting"+word)
  while(word.length > 0) {    //creating loop
    var maxIndex = word.length;
    var randomIndex = Math.floor(Math.random()*maxIndex);
    scrambledArray.push(word[randomIndex]) //getting the letter from position of randomIndex and saving that letter in our array
word.splice(randomIndex, 1) //removing that letter from 'word' array
    console.log("aftersplicing"+word)
  }
  return scrambledArray.join('');//join() returns all values of an array as a string
}		


function addText(text){
document.getElementById('text1').innerHTML = text;
}



function check() {
	var answer = document.getElementById('input0').value;
	console.log(word)
	cosole.log(answer)
	if(answer == word) {
		alert("Correct Answer.");
		newWord();
	} else {
		alert("incorrect Answer. Try Again!");
	}
}
	
	function newWord() {
		word = randomWord(words);
		var scrambled = scramble(word);
		addText(scrambled);
		document.getElementById('input0').value = '';

	}