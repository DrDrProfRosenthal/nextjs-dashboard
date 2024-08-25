
try{

    document.querySelector('.hamburger-con').addEventListener('click',() => {
        toggleClass(document.querySelector('.hamburger-con'))        
    });

}catch(err){
    console.log(err)
}
  

      function togglePopUp(){
   
      
        
     if(window.getComputedStyle(document.querySelector(".popupCon")).opacity == 0 ){
            document.querySelector(".popupCon").style.opacity = "100%";
            document.querySelector(".popupCon").style.height = "100%";
       
     }else if(window.getComputedStyle(document.querySelector(".popupCon")).opacity == 1 ){
        document.querySelector(".popupCon").style.opacity = "0%";
        document.querySelector(".popupCon").style.height = "0%";
       
        }

     

    }

    function toggleClass() {
        document.querySelector('.hamburger-con').classList.toggle("change");
        togglePopUp();
      
     }


  
// export default toggleClass; 
    
