import { CustomerField, lingueeData, Vocabs } from '@/app/lib/definitions';
import Link from 'next/link';
import {
  CheckIcon,
  ClockIcon,
  CurrencyDollarIcon,
  UserCircleIcon,
} from '@heroicons/react/24/outline';
import { Button } from '@/app/ui/button';
import { createVocabEntry } from '@/app/lib/actions';

export default function addVocabForm({ lingueeData }: { lingueeData: lingueeData[] }) {
  return (
  
    <div>hallo</div>
  );
}


/*  




<form action={createVocabEntry}>
      <div className="rounded-md bg-gray-50 p-4 md:p-6">
       

    
      <input  id="paid" name="engVocab" type="text"  value="psdgaid" defaultValue="dsgerzerz"/>
      <input  id="paid" name="gerVocab" type="text"  value="paisdd" defaultValue="dsgerzerz"/>
      <input  id="paid" name="engExample" type="text"  value="psdsgaid" defaultValue="dsgerzerz"  />
      <input  id="paid" name="gerExample" type="text"  value="paid" defaultValue="dsgerzerz"  />
      <input  id="paid" name="isVerb" type="text"  value="paid" defaultValue="dsgerzerz"  />

      
        <Link
          href="/dashboard/invoices"
          className="flex h-10 items-center rounded-lg bg-gray-100 px-4 text-sm font-medium text-gray-600 transition-colors hover:bg-gray-200"
        >
          Cancel
        </Link>
        <Button type="submit">Create Invoice</Button>
      </div>
    </form>  */