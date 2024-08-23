import { generateYAxis } from '@/app/lib/utils';
import { CalendarIcon } from '@heroicons/react/24/outline';
import { lusitana } from '@/app/ui/fonts';
import { Vocabs } from '@/app/lib/definitions';


export default async function VocabsData({
  vocabs,
}: {
  vocabs: Vocabs[];       
}) {


  


   console.log(vocabs)


  return (

   <>
    <div className="w-full md:col-span-4">
      


        <div >
    

          {vocabs.map((data) => {
            return (
                            
                <p>
                  {data.engvocab}
                </p>
            )})}

            </div>



   </div>



   </>
  );

}


/*

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