'use client';

import { generateYAxis } from '@/app/lib/utils';
import { CalendarIcon } from '@heroicons/react/24/outline';
import { lusitana } from '@/app/ui/fonts';
import { Vocabs } from '@/app/lib/definitions';

import React from 'react';

export default async function VocabsData({
  vocabs,
}: {
  vocabs: Vocabs[];       
}) {



  console.log(vocabs)



  if (!vocabs || vocabs.length === 0) {
    return <p className="mt-4 text-gray-400">No data available.</p>;
  }



  return (

   <>
    <p id="object" className='hidden'>{JSON.stringify(vocabs)}</p>
   </>
  );

}






/*

  {vocabs.map((data) => {
            return (
                            
                <p>
                  {data.engVocab}
                </p>
            )})}






 const result = vocabs.find(item => item.engvocab === 'Feb').engvocab;
console.log(result);

   console.log(vocabs)
   console.log(vocabs[1].engvocab);

  return (
    <div className="w-full md:col-span-4">
      


        <div >
    

          {vocabs.map((data) => {
            return (
                            
                <p>
                  {data.engvocab}
                </p>
           

*/