
'use client';
import { useState } from 'react';
import Hamburger from '@/app/ui/addVocabs/hamburger';
import AddVocabForm from '@/app/ui/addVocabs/createVocabEntry';
import { fetchLingue } from '@/app/lib/actions'
import { useDebouncedCallback } from 'use-debounce';

import { ReactElement, JSXElementConstructor, ReactNode, AwaitedReactNode } from 'react';
import { string } from 'zod';

   



export default function Page() {  
const [lingueeData, setLingueeData] = useState(null);

const handleSearch = async (params:string) => {
  console.log(params)
  const data = await fetchLingue(params.toString());  
  const formattedData  = JSON.stringify(data, null, 2);
 console.log(formattedData);

 setLingueeData(formattedData);
}



return (      
   <main className='background-color light-color'>

    <div>
      <p>abc</p>

      <input
        className="peer block w-full rounded-md border border-gray-200 py-[9px] pl-10 text-sm outline-2 placeholder:text-gray-500"
        placeholder="{placeholder}"
        onChange={(e) => {
          handleSearch(e.target.value);
        }} 
      />

      <pre>{lingueeData}</pre>


   

    </div>
  

    <Hamburger />
    <AddVocabForm data={lingueeData} />         
         
      

    </main>
  );
}
