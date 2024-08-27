console.log("train js");

var vocabList = [];

var vocabObject = document.querySelector('#object').innerHTML;
var vocabArray = JSON.parse(vocabObject);
var currentIndex = Math.floor(Math.random() * (vocabArray.length -1));
let randomOn = false;



function switchRandom(){
    randomOn = document.querySelector('#randomCheckbox').checked; 
}document.querySelector('#randomCheckbox').addEventListener('change',switchRandom)


function newRandIndex(){
    let e = vocabArray.length -1;
    let newn = Math.floor(Math.random() * (vocabArray.length -1));
    if(vocabArray[newn] != null || vocabArray[newn] != undefined){
    currentIndex =newn;
    return currentIndex;
    }else{
    newRandIndex();
    }

    
}



function displayNextVocab() {

    if(randomOn == true){
        newRandIndex();
    }
    console.log(currentIndex)
          if(vocabArray[currentIndex].engvocab != "error999" && currentIndex < vocabArray.length){//sind noch Vokabeln da, schreib die nächste hin
            document.getElementById("current-vocab").textContent  = vocabArray[currentIndex].gervocab;
            displayGerExample(String(vocabArray[currentIndex].gerexample),String(vocabArray[currentIndex].gervocab));
            displayEngExample();
        
        } else { // sind keine Vokabeln mehr da, fang von vorne an
            currentIndex = 0;
            alert('Congratulations! You have completed the vocabulary list.');
            displayNextVocab();
        }
    }

    displayNextVocab();
 

document.querySelector('#myBtn').addEventListener('click', () => {
    console.log("hey")
    
        const input = document.querySelector('#inputVocab');
     
        if (input.value.trim().toLowerCase() === vocabArray[currentIndex].engvocab.toLowerCase()) {
            input.value = '';       
            if(currentIndex <  vocabArray.length - 1){
                currentIndex++;                
            }else{                
                currentIndex = 0;          
            }
            
            displayNextVocab();
            hideObj(document.querySelector('#engEx2'));
            revealObj(document.querySelector('#hintBtn'));
            revealObj(document.querySelector('#vocabCover'));

        } else {
            input.value = '';
            alert('Incorrect! Try again.');
        }
});

    


    
            

document.querySelector('#hintBtn').addEventListener('click', () => {
                revealObj(document.querySelector('#engEx2'));
                hideObj(document.querySelector('#hintBtn'));
                hideObj(document.querySelector('#vocabCover'));
});

function displayEngExample(){
                const sentence = String(vocabArray[currentIndex].engexample);
                const wordToFind = String(vocabArray[currentIndex].engvocab);                
                const [part1, part2, part3] = splitSentence(sentence, wordToFind);
                console.log(part1 +part2 +part3)
                document.querySelector("#engEx1").textContent  = part1;
                document.querySelector("#engEx2").textContent  = " "+wordToFind+" ";
                document.querySelector("#engEx3").textContent  = part3;
}


function displayGerExample(sentence, wordToFind){
                const [part1, part2, part3] = searchGerExample(sentence,wordToFind);              
                document.querySelector("#gerEx1").textContent  = part1;
                document.querySelector("#gerEx2").textContent  = " "+part2+" ";
                document.querySelector("#gerEx3").textContent  = part3; 
}


function searchGerExample(sentence,wordToFind){
 var result = result = splitSentence(sentence, wordToFind);
let a = sentence.indexOf(wordToFind); 
if (a !== -1) {   
    result = splitSentence(sentence, wordToFind);
}
let wordsArray = splitWords(wordToFind); 

wordsArray.forEach(e => {              
    let b = sentence.indexOf(e.toString());  
    if (b !== -1) { 
        result = splitSentence(sentence, e.toString()); 
    }
    }); 


wordsArray = splitWords2(wordToFind);    
wordsArray.forEach(e => {              
    let b = sentence.indexOf(e.toString());    
    if (b !== -1) { 
        result = splitSentence(sentence, e.toString());
    }
}); 

    
wordsArray = splitWords3(wordToFind);    
wordsArray.forEach(e => {              
    let b = sentence.indexOf(e.toString());     
    if (b !== -1) { 
        result = splitSentence(sentence, e.toString());
    }
}); 
    // console.log("result"+result)
    return result;
}



function splitWords(input) {
    const wordsArray = input.split(', ');  
    return wordsArray;
}

function splitWords2(input) {
    const wordsArray = input.split(',');  
    return wordsArray;
}

  function splitWords3(input) {   
    const wordsArray = input.split(' , ');  
    return wordsArray;
  }



function splitSentence(sentence, word) {     // looks for word / looks if it fits in the sentence
        const index = sentence.indexOf(word);      
        if (index === -1) {
            console.log("No word found")           
            return [sentence, ' ', ' '];       
        }     
        const part1 = sentence.substring(0, index).trim(); // Part before the word
        const part2 = word; // The word itself
        const part3 = sentence.substring(index + word.length).trim(); // Part after the word
        return [part1, part2, part3];
}
      


function revealObj(e){ //but keep all attributes
    let d = '"'+e.getAttribute("class")+'"';
     e.removeAttribute("class","hidden");
     e.setAttribute("class", d);
  }

  function hideObj(e){
      e.setAttribute("class", "hidden");
}

