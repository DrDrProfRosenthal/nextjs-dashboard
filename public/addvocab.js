console.log("add vocab js")

var gIndex = 0;

function nextGerEx(){
   let germanExamples =  document.querySelector('#germanExamples').innerHTML;
   const e = JSON.parse(germanExamples);
   if(germanExamples == null){
    throw new console.error("is null");
   }    

  
    if(gIndex == e.length-1 ){
        gIndex = 0;
        document.querySelector('#gerExample').value = e[gIndex];
    }else{
        gIndex = gIndex + 1;
        document.querySelector('#gerExample').value = e[gIndex];
        
    }
}

function previousGerEx(){
    let germanExamples =  document.querySelector('#germanExamples').innerHTML;

    if(germanExamples == null){
        throw new console.error("is null");
       }    

    const e = JSON.parse(germanExamples); 

    
     if(gIndex == 0 ){
         gIndex = e.length-1;
         document.querySelector('#gerExample').value = e[gIndex];
     }else{
         gIndex = gIndex - 1;
         document.querySelector('#gerExample').value = e[gIndex];
         
     }
 }


 document.querySelector('#previousGerEx').addEventListener('click',previousGerEx);
document.querySelector('#nextGerEx').addEventListener('click',nextGerEx);



var eIndex = 0;

function nextEngEx(){
   let engExamples =  document.querySelector('#englishExamples').innerHTML;
   if(engExamples == null){
        throw new console.error("is null");
        
   }
   const e = JSON.parse(engExamples);

    if(eIndex == e.length-1 ){
        eIndex = 0;
        document.querySelector('#engExample').value = e[eIndex];
    }else{
        eIndex = eIndex + 1;
        document.querySelector('#engExample').value = e[eIndex];
        
    }
}

function previousEngEx(){
    let engExamples =  document.querySelector('#englishExamples').innerHTML;
    if(engExamples == null){
        throw new console.error("is null");        
   }

    const e = JSON.parse(engExamples); 
  
     if(eIndex == 0 ){
        eIndex = e.length-1;
         document.querySelector('#engExample').value = e[eIndex];
     }else{
        eIndex = eIndex - 1;
         document.querySelector('#engExample').value = e[eIndex];
         
     }
 }


 document.querySelector('#previousEngEx').addEventListener('click',nextEngEx);
document.querySelector('#nextEngEx').addEventListener('click',previousEngEx);