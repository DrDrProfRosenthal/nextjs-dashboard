


console.log("train js")



// document.getElementById("myBtn").focus();

var vocabList = [];
var currentIndex = 0;

var vocabObject = document.querySelector('#object').innerHTML;

console.log(vocabObject)

var vocabArray = JSON.parse(vocabObject);

console.log(vocabArray.length)

console.log(vocabArray[1].engvocab) // first thing

function displayNextVocab() {
        if(vocabArray[currentIndex].engvocab != "error999" && currentIndex < vocabArray.length){//sind noch Vokabeln da, schreib die nächste hin  
            console.log(vocabArray[currentIndex].engvocab)
            document.getElementById("current-vocab").textContent  = vocabArray[currentIndex].gervocab;   
            document.querySelector('#german-example').textContent = vocabArray[currentIndex].engexample;
            document.querySelector('.english-example').textContent = vocabArray[currentIndex].gerexample;

        } else { // sind keine Vokabeln mehr da, fang von vorne an
            currentIndex = 0;
            alert('Congratulations! You have completed the vocabulary list.');
            displayNextVocab();
        }
    }

    displayNextVocab();
 

    document.querySelector('#myBtn').addEventListener('click', () => {
        const input = document.querySelector('#inputVocab');
       
        if (input.value.trim().toLowerCase() === vocabArray[currentIndex].engvocab.toLowerCase()) {
            input.value = '';       
            if(currentIndex <  vocabArray.length - 1){
                currentIndex++;
                console.log(currentIndex)
            }else{
                console.log(currentIndex)
                currentIndex = 0;          
            }
            
            displayNextVocab();


        } else {
            input.value = '';
            alert('Incorrect! Try again.');
        }
    });

    


    
            

            document.querySelector('#hintBtn').addEventListener('click', () => {
                revealObj(document.querySelector('#englishVocab'));
                hideObj(document.querySelector('#hintBtn'));
                hideObj(document.querySelector('#englishVocabPlaceholder'));
            });
            
   



function revealObj(e){ //but keep all attributes
    let d = '"'+e.getAttribute("class")+'"';
     e.removeAttribute("class","hidden");
     e.setAttribute("class", d);
  }

  function hideObj(e){
      e.setAttribute("class", "hidden");
   }

