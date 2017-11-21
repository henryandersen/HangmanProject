wordsHard = ["ocean","watery","kangaroo","elephant"];
wordsMed = ["golf","apple","lake","chair","flower"];
wordsSoft = ["hi","the","fly","dog","cat"];

letters = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];



function startGame(){
    guessedLetters = [];
    wrongLetters = [];
    selectBox();
    lives = 7;
    y = parseInt(document.getElementById("difficulty").value);
    if(y === 1){
        rand = wordsHard[Math.floor(Math.random() * wordsHard.length)];
    }else if(y===2){
        rand = wordsMed[Math.floor(Math.random() * wordsMed.length)];
    }else if(y===3){
        rand = wordsSoft[Math.floor(Math.random() * wordsSoft.length)];
    }
    document.getElementById("word").innerHTML = clearBoard();
    console.log(rand);
    clearBoard();
    rand1 = "";
    for(var i = 0; i<rand.length; i++){
        rand1 = rand1 + rand[i] + " ";
    }
    console.log(rand1)
    document.getElementById("lives").innerHTML = " life counter: " + lives;
    document.getElementById("picture").innerHTML = picture();
    document.getElementById("graveyard").innerHTML = wrongLetters;
}

function clearBoard() {
    print ="";
    for(var i = 0; i< rand.length; i++){
        print += "_ ";
    }
    return print;
}
function guessLetter() {

    x = document.getElementById("selectLetter").value;
    guessedLetters +=x;
    selectBox();
    var z = 0;
    for(var i = 0; i <rand.length; i++){
        if(rand[i]===x){
            z++;
        }
    }
    if(z===0){
        wrongLetters +=x;
        lives = lives - 1;
    }
    document.getElementById("picture").innerHTML = picture();
    document.getElementById("lives").innerHTML = " life counter: " + lives;
    if(lives <= 0){
        document.getElementById("lives").innerHTML = "Game over, you piece of dirt! Click 'New Game' to play again.";

    }
    console.log(lives);

    console.log(wrongLetters);
    document.getElementById("word").innerHTML = printWord();
    document.getElementById("graveyard").innerHTML = wrongLetters;

}

function picture() {
    if(lives ===7){
        return "Select a letter!";
    }
    if(lives ===6){
        return "<img src='pictures/hangman%20pics/hangman1.png'/>";
    }
    if(lives ===5){
        return "<img src='pictures/hangman%20pics/hangman2.png'/>";
    }
    if(lives ===4){
        return "<img src='pictures/hangman%20pics/hangman3.png'/>";
    }
    if(lives ===3){
        return "<img src='pictures/hangman%20pics/hangman4.png'/>";
    }
    if(lives ===2){
        return "<img src='pictures/hangman%20pics/hangman5.png'/>";
    }
    if(lives ===1){
        return "<img src='pictures/hangman%20pics/hangman6.png'/>";
    }
    if(lives <= 0){
        return "<img src='pictures/hangman%20pics/hangman7.jpg'/>";
    }

}
function printWord() {
    var semiWord = "";
    for(var i = 0; i < rand1.length; i++) {
        if (guessedLetters.indexOf(rand1[i])> -1) {
            semiWord += rand1[i];
        }else{
            semiWord += print[i];
        }
    }
    console.log(semiWord);
    var f = 0;
    for(var i = 0; i < rand1.length;i++){
        if(semiWord[i] !== rand1[i]){
            f= f-1
        }
    }
    if(f===0){
        return "Correct! The word is: " + '"' + rand + '"' +  ", Congratulations";
    }
    return semiWord;


}
function selectBox() {
    result = "";
    for(var i = 0; i< letters.length;i++){
        if(guessedLetters.indexOf(letters[i]) === -1){
            result += "<option value='" + letters[i] + "'>" + letters[i] + "</option>";
        }
        if(guessedLetters.indexOf(letters[i]) !== -1){
            result += "<option disabled='true' value='" + letters[i] + "'>" + letters[i] + "</option>";
        }
    }
    console.log(result);
    document.getElementById("selectLetter").innerHTML = result;
}
