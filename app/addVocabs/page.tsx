
'use client';

import Hamburger from '@/app/ui/addVocabs/hamburger';
import AddVocabForm from '@/app/ui/addVocabs/createVocabEntry';
import { fetchLingue } from '@/app/lib/actions'
import { useDebouncedCallback } from 'use-debounce';

import { ReactElement, JSXElementConstructor, ReactNode, AwaitedReactNode } from 'react';
import { string } from 'zod';

  

export default function Page() {  


return (      
   <main className='background-color light-color'>

    <div>
      

    </div>
  

    <Hamburger />
    <AddVocabForm />         
         
      

    </main>
  );
}
