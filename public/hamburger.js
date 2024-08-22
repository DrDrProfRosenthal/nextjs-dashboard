
try{

    document.querySelector('.hamburger-con').addEventListener('click',() => {
        toggleClass(document.querySelector('.hamburger-con'))        
    });

}catch(err){
    console.log(err)
}
  

      function togglePopUp(){
   
        console.log(window.getComputedStyle(document.querySelector(".popupCon")).opacity)
        
     if(window.getComputedStyle(document.querySelector(".popupCon")).opacity == 0 ){
            document.querySelector(".popupCon").style.opacity = "100%";
            document.querySelector(".popupCon").style.height = "100%";
            console.log("open")
     }else if(window.getComputedStyle(document.querySelector(".popupCon")).opacity == 1 ){
        document.querySelector(".popupCon").style.opacity = "0%";
        document.querySelector(".popupCon").style.height = "0%";
        console.log("close")
        }

     

    }

    function toggleClass() {
        document.querySelector('.hamburger-con').classList.toggle("change");
        console.log("change")
        togglePopUp();
      
     }


 export default toggleClass; 