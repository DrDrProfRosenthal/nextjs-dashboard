'use server';

import { sql } from '@vercel/postgres';
import { revalidatePath } from 'next/cache';
import { redirect } from 'next/navigation'; 

export async function fetchLingue(word: string){

const url = `https://linguee-api.fly.dev/api/v2/translations?query=${encodeURIComponent(word)}&src=en&dst=de&guess_direction=false&follow_corrections=on_empty_translations`;
    try {
     const res = await fetch(url , {next: {revalidate:1}}).catch(console.error); 

       if(res != undefined){
        return await res.json(); 
       }
       
     } catch (error) {
      return "No entry found";
     } 
}


export async function createInvoice(formData: FormData) {
   

  
 const   engVocab = formData.get('engVocab') as string;
 const   gerVocab = formData.get('gerVocab') as string;
 var  engExample = formData.get('engExample') as string;
 var  gerExample = formData.get('gerExample') as string;
 console.log("engExample");
 console.log( engExample);
 if (engExample == "" || gerExample == undefined || gerExample == null){
  console.log("yeah hit")
  engExample = " ";
 }
 if (gerExample == "" || gerExample == undefined || gerExample == null){
  gerExample = "...";
 }
 

  
    try {
      console.log("engExample");
      console.log( engExample);
      console.log( gerVocab);
      await sql`
        INSERT INTO vocabs (engvocab, gervocab, engexample, gerexample)
        VALUES (${engVocab}, ${gerVocab}, ${engExample}, ${gerExample})
      `;
      console.log("entry2 done");

    } catch (error) {
      console.log(error)
      return {        
        message: 'Database Error: Failed to vocab Entry.',
      };


    }
 console.log("ok kam durch");

revalidatePath('/addVocabs');
redirect('/addVocabs');
}

