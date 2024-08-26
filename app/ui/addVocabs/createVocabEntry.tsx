'use client';

import { useState } from 'react';
import { fetchLingue } from '@/app/lib/actions'


import { ReactElement, JSXElementConstructor, ReactNode, AwaitedReactNode } from 'react';
import { array, string } from 'zod';
import { ArrowLeftIcon, ArrowRightIcon } from '@heroicons/react/24/outline';
import { CustomerField, Vocabs } from '@/app/lib/definitions';
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
import { useDebouncedCallback } from 'use-debounce';




export default function addVocabForm(data: any) {

  
  
  var [combinedTranslations,setcombinedTranslations] = useState<string | null>(null);
  var [germanExamples,setgermanExamples] = useState<string | null>(null);
  var [englishExamples, setenglishExamples] = useState<string | null>(null);
  var [englishInput, setengInput] = useState<string | null>(null);
  var [germanInput, setgermanInput] = useState<string | null>(null);
  
const handleSearch = useDebouncedCallback(async (params:string,) => {

  const data = await fetchLingue(params.toString());  
  const formattedData  = JSON.stringify(data, null, 2);
    const parsedData = JSON.parse(JSON.stringify(data)); // If data is already an object, you can directly use it
    const targetWordData = parsedData.find((item: any) => item.text.toLowerCase() === params.toLowerCase());    
    if (!targetWordData) {
      console.log('No data found for:', params);
      return;  }
    const translations = targetWordData.translations;



  const combinedTranslations = translations
    .filter((translation: any) => translation.featured) // Optional: Only include featured translations
    .map((translation: any) => translation.text)
    .join(', ');

  const englishExamples = translations.flatMap((translation: any) =>
    translation.examples
      .filter((example: any) => example.src) // Filter out examples without source text
      .map((example: any) => example.src)
  );

 const germanExamplesArray = translations.flatMap((translation: any) =>
    translation.examples
      .filter((example: any) => example.dst) // Filter out examples without destination text
      .map((example: any) => example.dst)
  );


  console.log('Combined Translations:', combinedTranslations);
  console.log('English Examples:', englishExamples);

  console.log('German Examples:', germanExamplesArray);
  
  setcombinedTranslations(combinedTranslations)

  setenglishExamples(englishExamples)
  setengInput(englishExamples[0])

  setgermanExamples(germanExamplesArray)
  setgermanInput(germanExamplesArray[0])




}, 300);


return (
    <>  

    <pre id='germanExamples' className='hidden' >{JSON.stringify(germanExamples, null, 2)}</pre>
    <pre id='englishExamples' className='hidden' >{JSON.stringify(englishExamples, null, 2)}</pre>

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
                      id="engVocabInput"
                      name="engVocab"
                      type="text"
                      placeholder="Insert vocab..."
                      onChange={(e) => {
                        handleSearch(e.target.value);
                      }} 
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
                      value={englishInput  ?? ''}                     
                      required />
                  </span>
                </div>
                <div className="flex my-3">
                      <div className="inline-flex arrowBtns" title='previous' >
                      <ArrowLeftIcon className="w-8  arrowBtns bold-color bold-border-color" 
                      direction="left" 
                      id="previousEngEx"
                      />
                    <span className='font-verysmall' title='next'>&nbsp;</span>
                      <ArrowRightIcon 
                      className="w-8 arrowBtns bold-color bold-border-color"
                      id="nextEngEx"
                      />

                      </div>

                  </div>
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
                    value={germanInput ?? ''}
                   required />
                    

                </div>
                
                  <div className="flex my-3">
                      <div className="inline-flex arrowBtns" title='previous' >
                      <ArrowLeftIcon className="w-8  arrowBtns bold-color bold-border-color" 
                      direction="left" 
                      id="previousGerEx"
                      />
                    <span className='font-verysmall' title='next'>&nbsp;</span>
                      <ArrowRightIcon 
                      className="w-8 arrowBtns bold-color bold-border-color"
                      id="nextGerEx"
                      />

                      </div>

                  </div>
              </div>

              <div className='popUpSection'>
                <div className='flex flex-row text-2xl'>

                  <input
                    id="gerVocab"
                    name="gerVocab"
                    type="text"
                    placeholder="Übersetzung von Linguee"
                    className="peer block w-full rounded-md border border-gray-200 py-2 pl-10 text-sm outline-2 placeholder:text-gray-500"
                    value={combinedTranslations ?? ''}
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
