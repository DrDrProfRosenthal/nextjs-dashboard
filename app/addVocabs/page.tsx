


import Breadcrumbs from '@/app/ui/invoices/breadcrumbs';
import { fetchCustomers } from '@/app/lib/data';

import { ArrowLeftIcon, ArrowRightIcon,PencilIcon } from '@heroicons/react/24/outline';
import Pagination from '@/app/ui/addVocabs/pagination';
import Hamburger from '@/app/ui/addVocabs/hamburger';

import AddVocabForm from '@/app/ui/addVocabs/createVocabEntry';



import { CustomerField, lingueeData, Vocabs } from '@/app/lib/definitions';
export default async function Page() {
 // const customers = await fetchCustomers();

 const totalPages = 2;

 const lingueeData = [
 { gerTranslation:"kommt noch", 
  engExample: "lingueeData", 
  gerExample:"lingueeData" }
 ];



  return (



      
   <main className='background-color light-color'>

    <Hamburger />


    <AddVocabForm />          
              
      

    </main>
  );
}



  

/*    
    <AddVocabForm lingueeData={lingueeData}/>         




 <div className='addVocabCon background-color bold-color'>

          
        <div className='popupForm lg:text-base popupForm'>  

               
                                         
             <div className='flex flex-col'>
               <span className='dm-sans text-2xl '>Input new words...</span>
              
             </div>                                

             <form action={createVocabEntry} >   
                     
                

             <div className='addVocabCon background-color bold-color'>

          
              <div className='popupForm lg:text-base popupForm'>  

               
                                         
             <div className='flex flex-col'>
               <span className='dm-sans text-2xl '>Input new words...</span>
              
             </div>                                

                                   
               <div className='vocabInputField'>
                  <form >   
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



                   </form> 



                                   
               <div className='vocabInputField'>
                 
                   <br></br>
                   <span className='dm-sans text-base block'>Source: Linguee</span>          
               </div>
             




             </div>  
               


   </div>


*/