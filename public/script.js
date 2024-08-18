
console.log("hello im your computer")
/*
document.getElementById("myBtn").focus();

var vocabList = [];
var currentIndex = 0;
    
fetch('vocabs.csv')
        .then(response => response.text())
        .then(data => {
            vocabList = parseCSV(data);           
            if (vocabList.length > 0) {
                displayNextVocab();
            }
        })
        //.catch(error => console.error('Error loading CSV:', error));

 function parseCSV(data) {
        const lines = data.split('\n');
                return lines.map( (line) => {                    
                try {
                    var parts = line.split(';');   
                    return { english: parts[0].trim(), german: parts[1].trim() }; 
                }catch{
                   return {english:"error999"}
                }
          
        });   
        }    


function displayNextVocab() {
        if(vocabList[currentIndex].english != "error999" && currentIndex < vocabList.length){//sind noch Vokabeln da, schreib die nächste hin  
            document.getElementById("current-vocab").textContent  = vocabList[currentIndex].german;             
        } else { // sind keine Vokabeln mehr da, fang von vorne an
            currentIndex = 0;
            alert('Congratulations! You have completed the vocabulary list.');
            displayNextVocab();
        }
    }


    document.querySelector('#myBtn').addEventListener('click', () => {
        const input = document.querySelector('.centered-input');
       
        if (input.value.trim().toLowerCase() === vocabList[currentIndex].english.toLowerCase()) {
            input.value = '';
            currentIndex++;
            displayNextVocab();
        } else {
            input.value = '';
            alert('Incorrect! Try again.');
        }
    });

    */

    

    document.querySelector('#hintBtn').addEventListener('click', () => {
        revealObj(document.querySelector('#englishVocab'))
        hideObj(document.querySelector('#hintBtn'))
        hideObj(document.querySelector('#englishVocabPlaceholder'))
    
    });


    function revealObj(e){
       e.removeAttribute("class","hidden");
    }

    function hideObj(e){
        e.setAttribute("class", "hidden");
     }


 