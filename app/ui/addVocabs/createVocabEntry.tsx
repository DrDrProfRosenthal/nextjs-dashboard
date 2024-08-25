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

export default function addVocabForm(data: any) {

  return (

    <>
    
    <div>
      <p>abc</p>
    

    </div>
    
    <form action={createInvoice}>


        <div className='addVocabCon background-color bold-color'>
          <div className='popupForm lg:text-base popupForm'>



            <div className='vocabInputField'>



              <div className='popUpSection'>
                <div>
                  <span className='dm-sans text-2xl '>Input new words...</span>

                  <div className='align-center vocab-con '>
                    <input
                      className='font-semibold vocab-input text-2xl bold-color bold-border-color my-4'
                      id="engVocab"
                      name="engVocab"
                      type="text"
                      placeholder="Insert vocab..."
                      required />
                  </div>




                  <label className='text-base'>Example:&nbsp;</label>
                  <span className='text-base'>
                    <input
                      id="engExample"
                      name="engExample"
                      type="text"
                      placeholder="Notes, while remaining _____ and critical, that a pilot project may help Member States better to understand the inherent [...]"
                      className="block w-full rounded-md border border-gray-200 py-2 pl-10 text-sm outline-2 placeholder:text-gray-500"
                      required />
                  </span>
                </div>
                <Pagination totalPages={2} />
              </div>

              <div className='popUpSection'>

                <div className='inline-flexLG'>
                  <label className='text-base'>Beispiel:&nbsp;</label>
                  <input
                    id="gerExample"
                    name="gerExample"
                    type="text"
                    placeholder="Wenn ich online mit Kreditkarte bezahle, bin ich immer vorsichtig."
                    className="peer block w-full rounded-md border border-gray-200 py-2 pl-10 text-sm outline-2 placeholder:text-gray-500"
                    required />
                </div>
                <Pagination totalPages={2} />
              </div>

              <div className='popUpSection'>
                <div className='flex flex-row text-2xl'>

                  <input
                    id="gerVocab"
                    name="gerVocab"
                    type="text"
                    placeholder="Übersetzung von Linguee"
                    className="peer block w-full rounded-md border border-gray-200 py-2 pl-10 text-sm outline-2 placeholder:text-gray-500"
                    required />

                </div>

              </div>

              <div className='align-center my-2'>
                <button type='submit' className='bold-color text-4xl montserrat italic bold-border-color hover:bg-gray-100' id="addBtn">Add vocab </button>
              </div>














              <br></br>
              <span className='dm-sans text-base block'>Source: Linguee</span>

            </div>
          </div>

        </div>

      </form></>





                    
  );
}


