const words=[
     {
       word: "guitar",
       hint: "A stringed musical instrument typically played with the fingers or a pick."
     },
     {
       word: "elephant",
       hint: "A large mammal with a trunk, known for its intelligence and size."
     },
     {
       word: "sunflower",
       hint: "A tall plant with large yellow flowers that turn to face the sun."
     },
     {
       word: "mountain",
       hint: "A large natural elevation of the earth's surface, often with steep sides."
     },
     {
       word: "computer",
       hint: "An electronic device for storing and processing data, often used for tasks like writing or browsing the internet."
     },
     {
       word: "piano",
       hint: "A large musical instrument with black and white keys that is played by pressing keys."
     },
     {
       word: "chocolate",
       hint: "A sweet, typically brown food made from roasted and ground cacao seeds."
     },
     {
       word: "beach",
       hint: "A sandy or pebbly shore of a body of water, typically by the ocean."
     },
     {
       word: "butterfly",
       hint: "A colorful insect with large wings, known for its metamorphosis from a caterpillar."
     },
     {
       word: "rainbow",
       hint: "A natural phenomenon that creates a spectrum of light in the sky, typically after rain."
     },
     {
       word: "camera",
       hint: "A device used for taking photographs or videos."
     },
     {
       word: "basketball",
       hint: "A team sport in which players try to score by shooting a ball through a hoop."
     },
     {
       word: "book",
       hint: "A set of written or printed pages bound together, typically used for reading."
     }
   ];

var wordText = document.querySelector(".word"),
hintText = document.querySelector(".hint"),
inputField = document.querySelector("input"),
refreshButton = document.querySelector(".refreshw"),
checkbutton = document.querySelector(".checkw");

 //revisar

var playGame = () => {
  var randomObj = words[Math.floor(Math.random() * words.length)];
  var wordArray = randomObj.word.split("");
  for (var i = wordArray.length - 1;i>0;i--){
    var m= Math.floor(Math.random()*(i+1));
    [wordArray[i], wordArray[m]] = [wordArray[m], wordArray[i]];
  }
  wordText.innerText=wordArray.join("");
  hintText.innerText= "Hint: " + randomObj.hint;

  correctWord=randomObj.word.toLowerCase();
  inputField.value = ""
  inputField.setAttribute("maxlength", correctWord.length);
}
playGame();

const checkWord = () => {
  let userInput = inputField.value.toLowerCase();
  if(!userInput) return alert("Enter a word");
  if(userInput !== correctWord) return alert("Try again");
  if(userInput === correctWord) return alert("Correct!"), playGame() ;
  playGame();
}

refreshButton.addEventListener("click", playGame);
checkbutton.addEventListener("click", checkWord)
