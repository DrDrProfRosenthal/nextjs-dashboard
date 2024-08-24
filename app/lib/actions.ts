'use server';
 
import { z } from 'zod';
import { sql } from '@vercel/postgres';
import { revalidatePath } from 'next/cache';
import { redirect } from 'next/navigation'; 





export async function createInvoice(formData: FormData) {

console.log(formData)
    
  const { customerId, amount,newVocab, status } = {
    customerId: "cc27c14a-0acf-4f4a-a6c9-d45682c144b9", // formData.get('customerId'),
    amount: "13255", // formData.get('amount'),
    newVocab: formData.get('engVocab'),
    status: "pending", // formData.get('status'),
  };


  const { engVocab, gerVocab, engExample,gerExample } ={
    engVocab: formData.get('engVocab'),
    gerVocab: formData.get('gerVocab'),
    engExample: formData.get('engExample'),
    gerExample: formData.get('gerExample'),
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

