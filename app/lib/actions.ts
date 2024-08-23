'use server';
 
import { z } from 'zod';
import { sql } from '@vercel/postgres';
import { revalidatePath } from 'next/cache';
import { redirect } from 'next/navigation'; 

const FormSchema = z.object({
  engVocab: z.string(),
  gerVocab: z.string(),
  engExample: z.string(),
  gerExample: z.string(),
  isVerb: z.string(),
});
 

// const CreateEntry = FormSchema.omit({ id: true, date: true });

export async function createVocabEntry(vocabData: FormData) {
  console.log(vocabData)
  console.log(vocabData.get('engVocab'))

    const { engVocab, gerVocab, engExample,gerExample,isVerb } = {
      engVocab: vocabData.get('engVocab'),
      gerVocab: vocabData.get('gerVocab'),
      engExample: vocabData.get('engExample'),
      gerExample: vocabData.get('gerExample'),
      isVerb: vocabData.get('isVerb'),  };


    

    try {
        await sql`
          INSERT INTO vocabs (engVocab, gerVocab, engExample, gerExample, isVerb)
          VALUES (${"engVocabVar"}, 
          ${"gerVocabVar"},
           ${"engExampleVar"},
            ${"gerExampleVar"},
            ${"isVerbVar"})
        `;
      } catch (error) {
        return {
          message: 'Database Error: Failed to Create Invoice.',
        };
      }

        console.log("finished")
  revalidatePath('/dashboard/invoices');
  redirect('/dashboard/invoices');
  }


  /*

    const engVocabVar = vocabData.get('engVocab')?.toString();
      const gerVocabVar = vocabData.get('gerVocab')?.toString(); 
      const engExampleVar = vocabData.get('engExample')?.toString();
      const gerExampleVar = vocabData.get('gerExample')?.toString();
      const isVerbVar = vocabData.get('isVerb')?.toString();

  */