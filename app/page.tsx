


import Breadcrumbs from '@/app/ui/invoices/breadcrumbs';
import { fetchCustomers } from '@/app/lib/data';
import { createInvoice } from '@/app/lib/actions';
import { ArrowLeftIcon, ArrowRightIcon,PencilIcon } from '@heroicons/react/24/outline';
import Pagination from '@/app/ui/addVocabs/pagination';



export default async function Page() {
 // const customers = await fetchCustomers();

 const totalPages = 2;

  return (



      
   <main className='background-color light-color'>

 

      <div className="center-container">
        <div className="prompt-container bold-border-color ">
            
              <div className="vocab-con my-4">
                <span className="current-vocab dm-sans text-4xl bold-color font-semibold" id="current-vocab">vorsichtig, achtsam, argwöhnisch  </span>

                  <div className='german-examplecontainer montserrat italic text-base' >
                    <span className="english-example light-color font-medium" id="german-example"> "bleibt zwar weiter
                      <span className='germanExampleVocab counter-color font-medium'>&nbsp;vorsichtig&nbsp;</span>        
                      und kritisch, stellt jedoch fest, dass ein Pilotprojekt den Mitgliedstaaten dabei helfen [...]"</span>
                  </div>                
              </div>
               
             
              <div className='align-center vocab-con '>
                    <span className='verbBox font-semibold text-4xl bold-color dm-sans m0'>(to)</span>
                    <input type="text" className="font-semibold vocab-input text-2xl bold-color bold-border-color my-4" placeholder="..." />
                    <button  className="btn text-2xl font-semibold bold-color bold-border-color" id="myBtn" type="submit">Check!</button>
              </div>


              <div className='english-examplecontainer vocab-con my-4' >           

                        <div id='hintContainer' className='flex-container text-base'>

                            <span className='english-example montserrat italic light-color font-medium'> 
                              "Notes, while remaining 
                              <span id="englishVocabPlaceholder" className='englishExampleVocab counter-color font-medium'>&nbsp;_____&nbsp;</span>
                              <span id="englishVocab" className='font-medium counter-color englishVocab englishExampleVocab counter-color hidden'>&nbsp;wary&nbsp;</span>        
                              and critical, that
                              a pilot project may help Member States better to understand the inherent [...]" 
                            </span>

                           
                            <div>
                              <button className='font-semibold  bold-color text-lg montserrat italic bold-border-color'  id="hintBtn">Reveal hint </button>
                            </div>
                            
                        </div> 

              </div>

        </div>
    </div>

    <div className="hamburgerparent hamburger-con red" id="hamburger-con">
          <div className="bar1 bold-background-color"></div>
          <div className="bar2 bold-background-color"></div>
          <div className="bar3 bold-background-color"></div>
      </div>
        

      
    <div className='popupCon closed background-color bold-color'>

          
         <div className='popupForm lg:text-base popupForm'>  

                        
                                                  
                      <div className='flex flex-col'>
                        <span className='dm-sans text-2xl '>Input new words...</span>
                       
                      </div>                                

                                            
                        <div className='vocabInputField'>
                           <form action={createInvoice}>   
                              <div className='popUpSection'>
                                  <div>
                                    <input className='dm-sans text-4xl' value={"wary"}></input>
                                    <label className='text-base'>Example:&nbsp;</label>
                                    <span className='text-base'>I am always wary when paying online with my credit card.</span>
                                  </div>
                                  <Pagination totalPages={2} />   
                              </div> 
                              
                              <div className='popUpSection'>
                                  <span className='dm-sans text-4xl block'>wary</span>
                                  <div className='inline-flexLG'>
                                                          <label className='text-base'>Beispiel:&nbsp;</label>
                                                          <span className='text-base'>Wenn ich online mit Kreditkarte bezahle, bin ich immer vorsichtig.</span>
                                  </div>
                                  <Pagination totalPages={2} />   
                               </div>   

                            <div className='popUpSection'>
                               <div className='flex flex-row text-2xl'>
                                  <span className='dm-sans text-2xl block'>vorsichtig, achtsam, argwöhnisch</span>                        
                                </div>
                                  <input className='dm-sans  hidden' value={"vorsichtig, achtsam, argwöhnisch"}></input>
                                  <PencilIcon className="w-10 pencilBtn bold-color bold-border-color my-3" /> 
                            </div>
                                  
                            <div className='align-center my-2'>
                                <button type='submit' className='bold-color text-4xl montserrat italic bold-border-color hover:bg-gray-100' id="addBtn" >Add vocab </button>
                            </div>

                            </form>  
                            <br></br>
                            <span className='dm-sans text-base block'>Source: Linguee</span>          
                        </div>
                      




                      </div>  
                        
        
     
        </div>
    
 
    

    </main>
  );
}

  