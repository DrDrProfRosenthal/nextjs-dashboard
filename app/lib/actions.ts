'use server';
 
import { z } from 'zod';
import { sql } from '@vercel/postgres';
import { revalidatePath } from 'next/cache';
import { redirect } from 'next/navigation'; 





export async function fetchLingue(word: string){

    // const customers = await fetchCustomers();
  // var url = 'https://linguee-api.fly.dev/api/v2/translations?query=wary&src=en&dst=de&guess_direction=false&follow_corrections=on_empty_translations'
  // url = 'https://linguee-api.fly.dev/api/v2/translations?query=assessment&src=en&dst=de&guess_direction=false&follow_corrections=on_empty_translations'
   
  

var url = 'https://linguee-api.fly.dev/api/v2/translations?query='+ word.toString() + '&src=en&dst=de&guess_direction=false&follow_corrections=on_empty_translations';

    console.log(url)

     const res = await fetch(url , {next: {revalidate:1}}).catch(console.error);   
   //  console.log(res)
     try {
       return res.json();
       
     } catch (error) {
      return "No entry found";

     } 
   

     
    

}






export async function createInvoice(formData: FormData) {

console.log(formData)
    
  const { customerId, amount,newVocab, status } = {
    customerId: "cc27c14a-0acf-4f4a-a6c9-d45682c144b9", // formData.get('customerId'),
    amount: "13255", // formData.get('amount'),
    newVocab: formData.get('engVocab'),
    status: "pending", // formData.get('status'),
  };




  const { engVocab, gerVocab, engExample,gerExample } ={
    engVocab: formData.get('engVocab') as string,
    gerVocab: formData.get('gerVocab') as string,
    engExample: formData.get('engExample') as string,
    gerExample: formData.get('gerExample') as string,
  };
    
  


    try {
      await sql`
        INSERT INTO vocabs (engvocab, gervocab, engexample, gerexample)
        VALUES (${engVocab}, ${gerVocab}, ${engExample}, ${gerExample})
      `;
      console.log("entry2 done");
      //console.log(engVocab + gerVocab + engExample + gerExample);

    } catch (error) {
      return {
        message: 'Database Error: Failed to vocab Entry.',
      };
    }

   

  

revalidatePath('/addVocabs');
redirect('/addVocabs');
}

