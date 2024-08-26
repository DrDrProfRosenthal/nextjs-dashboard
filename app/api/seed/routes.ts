

import bcrypt from 'bcrypt';
 import { db } from '@vercel/postgres';
 // import {  revenue } from '../lib/placeholder-data';
 const client = await db.connect();




 async function insertVocabData(engVocab:string,gerVocab:string,engExample:string,gerExample:string) {
  await client.sql`
    CREATE TABLE IF NOT EXISTS vocabs (
      engVocab VARCHAR(255) NOT NULL UNIQUE,
      gerVocab VARCHAR(255) NOT NULL UNIQUE,
      engExample VARCHAR(255) NOT NULL UNIQUE,
      gerExample VARCHAR(255) NOT NULL UNIQUE,
    );
  `;

   
     client.sql`INSERT INTO vocabs (engVocab, gerVocab, engExample, gerExample)
        VALUES (${engVocab}, ${gerVocab}, ${engExample}, ${gerExample});         
      `;
  
}




 async function seedRevenue() {
   await client.sql`
     CREATE TABLE IF NOT EXISTS vocabs (
      engVocab VARCHAR(255) NOT NULL,
      gerVocab VARCHAR(255) NOT NULL,
      engExample VARCHAR(255) NOT NULL,
      gerExample VARCHAR(255) NOT NULL,
     );
   `;
/*
   const insertedRevenue = await Promise.all(
     revenue.map(
       (rev) => client.sql`
          INSERT INTO vocabs (engVocab, gerVocab, engExample, gerExample)
         VALUES (${rev.engVocab}, ${rev.gerVocab}, ${rev.engExample}, ${rev.gerExample});         
       `,
     ),
   );

   return insertedRevenue;*/
 }


 export async function GET() {
   try {
     await client.sql`BEGIN`;
    await insertVocabData("wary","vorsichtig","I am always wary when paying online with my credit card.","Wenn ich online mit Kreditkarte bezahle, bin ich immer vorsichtig.");
     await seedRevenue();
     await client.sql`COMMIT`;
     return Response.json({ message: 'Database seeded successfully' });
   } catch (error) {
     await client.sql`ROLLBACK`;

     return Response.json({ error }, { status: 500 });
   }

}





//   VALUES (${rev.engVocab}, ${rev.gerVocab}, ${rev.engExample}, ${rev.gerExample}, ${rev.isVerb} );    