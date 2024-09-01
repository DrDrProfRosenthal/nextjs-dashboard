import Hamburger from '@/app/ui/addVocabs/hamburger';
import VocabsData from '@/app/ui/dashboard/displayCollection';
import { fetchVocabs } from '@/app/lib/data';

export default async function Page() {

 const vocabs = await fetchVocabs();

  return (

      
   <main className='background-color light-color'>

    <VocabsData vocabs = {vocabs} />


     
    
    <Hamburger />
        

      
                                               

 
    

    </main>
  );
}

  /*

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

                                                */