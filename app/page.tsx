


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
        <div className="prompt-container">
            
          <div>

            <div className="vocab-con ">
                <span className="current-vocab dm-sans font-extrabold bold-color" id="current-vocab">vorsichtig, achtsam, argwöhnisch  </span>

                  <div className='german-examplecontainer montserrat italic font-small' >
                    <span className="english-example light-color" id="german-example"> "bleibt zwar weiter
                      <span className='germanExampleVocab counter-color'>&nbsp;vorsichtig&nbsp;</span>        
                      und kritisch, stellt jedoch fest, dass ein Pilotprojekt den Mitgliedstaaten dabei helfen [...]"</span>
                  </div>                
             </div>
               
             
                  <div className='vocab-con font-medium'>
                    <span className='verbBox font-medium bold-color bold-weight hidden'>to</span>
                    <input type="text" className="centered-input font-medium bold-color bold-border-color" placeholder="..." />
                    <button  className="btn font-medium bold-color bold-border-color" id="myBtn" type="submit">Check!</button>
                  </div>


                  <div className='english-examplecontainer vocab-con' >           

                        <div id='hintContainer' className='flex-container font-small'>

                            <span className='english-example montserrat italic light-color'> 
                              "Notes, while remaining 
                              <span id="englishVocabPlaceholder" className='englishExampleVocab counter-color'>&nbsp;_____&nbsp;</span>
                              <span id="englishVocab" className='counter-color englishVocab englishExampleVocab counter-color hidden'>&nbsp;wary&nbsp;</span>        
                              and critical, that
                              a pilot project may help Member States better to understand the inherent [...]" 
                            </span>

                           
                            <div>
                              <button className='bold-color font-medium montserrat italic bold-border-color'  id="hintBtn">Reveal hint </button>
                            </div>
                            
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
    Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.





     <div className='popupForm lg:font-medium popupForm'>  

   
                            
                  <div className='flex flex-col'>
                    <span className='dm-sans text-2xl lg:font-medium'>Input new words...</span>
                    <input className='dm-sans text-4xl lg:font-medium' value={"wary"}></input>
                  </div>                                

                  <form action={createInvoice}>                          
                     <div className='vocabInputField'>
                           <div>
                               <div className=''>
                                 <label className='text-basetext'>Example:&nbsp;</label>
                                 <span className='text-basetext'>I am always wary when paying online with my credit card.</span>
                               </div>
                               <Pagination totalPages={2} />   
                           </div> 
                           
                           <div>
                              <span className='dm-sans text-4xl block'>wary</span>
                          </div>

                          <div>
                            <div className='inline-flexLG'>
                                                  <label className='w-2 lg:w-10'>Beispiel:&nbsp;</label>
                                                  <span className='lg:w-2 lg:w-10'>Wenn ich online mit Kreditkarte bezahle, bin ich immer vorsichtig.</span>
                                                </div>
                                                <Pagination totalPages={2} />   
                            </div>   

                         <div>

                                  <div className='flex flex-row'>
                                      <span className='dm-sans text-xl  block'>vorsichtig</span>,&nbsp;
                                      <span className='dm-sans text-xl block'>achtsam</span>,&nbsp;
                                      <span className='dm-sans text-xl  block'>argwöhnisch</span>                            
                                  </div>
                                  <input className='dm-sans  hidden' value={"vorsichtig, achtsam, argwöhnisch"}></input>
                                  <PencilIcon className="w-10 pencilBtn bold-color bold-border-color" />         
                                          
                                  
                                
                        </div>
                              
                        <div className='align-center'>
                            <button type='submit' className='bold-color lg:font-medium montserrat italic bold-border-color text-base hover:bg-gray-100' id="addBtn" >Add vocab </button>
                         </div>


                     </div>
                   </form>   

       


       </div>  
    </div>
    
 
    

    </main>
  );
}

  /*

 



  <div>
                  
                                               

                       <form action={createInvoice}>                          
                          <div className='vocabInputField'>
                                <div >
                                    <div className='inline-flex'>
                                      <label className='text-sm lg:text-sm'>Example:&nbsp;</label>
                                      <span className='w-2 lg:w-10'>I am always wary when paying online with my credit card.</span>
                                    </div>
                                    <Pagination totalPages={2} />   
                                </div>              
                          </div>
                        </form>   

              </div>



              <div>
                  <span className='dm-sans w-4 lg:w-4 block'>wary</span>
              </div>

              <div>
                <div className='inline-flexLG'>
                                      <label className='w-2 lg:w-10'>Beispiel:&nbsp;</label>
                                      <span className='lg:w-2 lg:w-10'>Wenn ich online mit Kreditkarte bezahle, bin ich immer vorsichtig.</span>
                                    </div>
                                    <Pagination totalPages={2} />   
                </div>   

              <div >

                <div className=''>
                                      <span className='dm-sans lg:font-medium block'>vorsichtig</span>,&nbsp;
                                      <span className='dm-sans lg:font-medium block'>achtsam</span>,&nbsp;
                                      <span className='dm-sans lg:font-medium block'>argwöhnisch</span>                            
                                  </div>
                                  <input className='dm-sans  hidden' value={"vorsichtig, achtsam, argwöhnisch"}></input>
                                  <PencilIcon className="w-10 pencilBtn bold-color bold-border-color" />         
                                          
                                  
                                
                                </div>
                              
                              <div className='align-center'>
                                <button type='submit' className='bold-color lg:font-medium montserrat italic bold-border-color text-base hover:bg-gray-100' id="addBtn" >Add vocab </button>
           </div>
                      */