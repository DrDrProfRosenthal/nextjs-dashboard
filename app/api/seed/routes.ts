/*
import { db } from '@vercel/postgres';

const client = await db.connect();


async function insertVocabData() {
 await client.sql`
   CREATE TABLE IF NOT EXISTS vocabs (
     engVocab VARCHAR(255) NOT NULL UNIQUE,
     gerVocab VARCHAR(255) NOT NULL UNIQUE,
     engExample VARCHAR(255) NOT NULL UNIQUE,
     gerExample VARCHAR(255) NOT NULL UNIQUE
   );
 `;

 const insertedVocabs = await Promise.all(
   [
     {
       engVocab: 'wary',
       gerVocab: 'vorsichtig, achtsam',
       engExample: 'I am always wary when paying online with my credit card.',
       gerExample: 'Wenn ich online mit Kreditkarte bezahle, bin ich immer vorsichtig.',
     },
     // Add more vocab data here if needed
   ].map(
     (vocab) => client.sql`
       INSERT INTO vocabs (engVocab, gerVocab, engExample, gerExample)
       VALUES (${vocab.engVocab}, ${vocab.gerVocab}, ${vocab.engExample}, ${vocab.gerExample})
       ON CONFLICT (engVocab) DO NOTHING;
     `,
   ),
 );

 return insertedVocabs;
}



export async function GET() {

  try {
    await client.sql`BEGIN`;
    await insertVocabData();
    await client.sql`COMMIT`;

    return Response.json({ message: 'Database seeded successfully' });
  } catch (error) {
    await client.sql`ROLLBACK`;
    return Response.json({ error }, { status: 500 });
  }
}
*/