import { CustomerField, lingueeData, Vocabs } from '@/app/lib/definitions';
import Link from 'next/link';
import {
  CheckIcon,
  ClockIcon,
  CurrencyDollarIcon,
  UserCircleIcon,
} from '@heroicons/react/24/outline';
import { Button } from '@/app/ui/button';
import { createInvoice } from '@/app/lib/actions';
import Pagination from '@/app/ui/addVocabs/pagination';
import Hamburger from '@/app/ui/addVocabs/hamburger';

import AddVocabForm from '@/app/ui/addVocabs/createVocabEntry';


import { ArrowLeftIcon, ArrowRightIcon,PencilIcon } from '@heroicons/react/24/outline';

export default function addVocabForm() {
  return (
 
<form action={createInvoice}>
      

<div className='addVocabCon background-color bold-color'>
            <div className='popupForm lg:text-base popupForm'>  
              
                                         
                        <div className='flex flex-col'>
                          <span className='dm-sans text-2xl '>Input new words...</span>                          
                        </div>                                

                                   
                          <div className='vocabInputField'>
                              
                         

                               <div className='popUpSection'>
                                    <div>
                                   
                                    <input
                                    className='dm-sans text-4xl'
          id="engVocab"
          name="engVocab"
          type="text"
          placeholder="Wary"
          
          required
        />

                                      <label className='text-base'>Example:&nbsp;</label>
                                      <span className='text-base'><input
          id="engExample"
          name="engExample"
          type="text"
          placeholder="I am always wary when paying online with my credit card."
          className="peer block w-full rounded-md border border-gray-200 py-2 pl-10 text-sm outline-2 placeholder:text-gray-500"
          required
        /></span>
                                    </div>
                                    <Pagination totalPages={2} />   
                                </div> 
                                
                                <div className='popUpSection'>
                                    <span className='dm-sans text-4xl block'>wary</span>
                                    <div className='inline-flexLG'>
                                                            <label className='text-base'>Beispiel:&nbsp;</label>
                                                            <span className='text-base'>Wenn ich online mit Kreditkarte bezahle, bin ich immer vorsichtig.</span>
                                                            <input
          id="gerExample"
          name="gerExample"
          type="text"
          placeholder="gerExample"
          className="peer block w-full rounded-md border border-gray-200 py-2 pl-10 text-sm outline-2 placeholder:text-gray-500"
          required
        />
                                    </div>
                                    <Pagination totalPages={2} />   
                                  </div>   

                              <div className='popUpSection'>
                                  <div className='flex flex-row text-2xl'>
                                    <span className='dm-sans text-2xl block'><input
          id="gerVocab"
          name="gerVocab"
          type="text"
          placeholder="vorsichtig, achtsam, argwöhnisch"
          className="peer block w-full rounded-md border border-gray-200 py-2 pl-10 text-sm outline-2 placeholder:text-gray-500"
          required
        />vorsichtig, achtsam, argwöhnisch</span>                        
                                  </div>

                                    <input className='dm-sans  hidden' id="gerVocab" type='text' name='gerVocab' placeholder={"vorsichtig, achtsam, argwöhnisch"} ></input>


                                    <PencilIcon className="w-10 pencilBtn bold-color bold-border-color my-3" /> 
                              </div>
                                    
                              <div className='align-center my-2'>
                                  <button type='submit' className='bold-color text-4xl montserrat italic bold-border-color hover:bg-gray-100' id="addBtn" >Add vocab </button>
                              </div>



                     









                              
                              <br></br>
                              <span className='dm-sans text-base block'>Source: Linguee</span>          
                          
                          </div>
            </div>  
               
        </div>


</form>
  );
}


