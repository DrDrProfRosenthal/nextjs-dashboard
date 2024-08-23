

import bcrypt from 'bcrypt';
 import { db } from '@vercel/postgres';
 import { invoices, customers, revenue, users } from '../lib/placeholder-data';
 const client = await db.connect();




 async function insertVocabData(engVocab:string,gerVocab:string,engExample:string,gerExample:string,isVerb:boolean) {
  await client.sql`
    CREATE TABLE IF NOT EXISTS vocabs (
      engVocab VARCHAR(255) NOT NULL,
      gerVocab VARCHAR(255) NOT NULL,
      engExample VARCHAR(255) NOT NULL,
      gerExample VARCHAR(255) NOT NULL,
      isVerb BOOLEAN
    );
  `;

   
     client.sql`INSERT INTO vocabs (engVocab, gerVocab, engExample, gerExample, isVerb)
        VALUES (${engVocab}, ${gerVocab}, ${engExample}, ${gerExample}, ${isVerb} );         
      `;
  
}




 async function seedRevenue() {
   await client.sql`
     CREATE TABLE IF NOT EXISTS vocabs (
       engVocab VARCHAR(255) NOT NULL,
       gerVocab VARCHAR(255) NOT NULL,
       engExample VARCHAR(255) NOT NULL,
       gerExample VARCHAR(255) NOT NULL,
       isVerb CHAR(5) NOT NULL
     );
   `;

   const insertedRevenue = await Promise.all(
     revenue.map(
       (rev) => client.sql`
          INSERT INTO vocabs (engVocab, gerVocab, engExample, gerExample, isVerb)
         VALUES (${rev.engVocab}, ${rev.gerVocab}, ${rev.engExample}, ${rev.gerExample}, ${rev.isVerb} );         
       `,
     ),
   );

   return insertedRevenue;
 }


 export async function GET() {
   try {
     await client.sql`BEGIN`;
    await insertVocabData("engVocab","gerVocab","engExample","gerExample", false);

     await seedRevenue();

     await client.sql`COMMIT`;

     return Response.json({ message: 'Database seeded successfully' });
   } catch (error) {
     await client.sql`ROLLBACK`;

     return Response.json({ error }, { status: 500 });
   }

}





//   VALUES (${rev.engVocab}, ${rev.gerVocab}, ${rev.engExample}, ${rev.gerExample}, ${rev.isVerb} );    