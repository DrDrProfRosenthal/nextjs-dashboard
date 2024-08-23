import { generateYAxis } from '@/app/lib/utils';
import { CalendarIcon } from '@heroicons/react/24/outline';
import { lusitana } from '@/app/ui/fonts';
import { Revenue } from '@/app/lib/definitions';

// This component is representational only.
// For data visualization UI, check out:
// https://www.tremor.so/
// https://www.chartjs.org/
// https://airbnb.io/visx/

export default async function RevenueChart({
  revenue,
}: {
  month: string;
  revenue: number;
}) {


  const dataOne = revenue;
  

 const { yAxisLabels, topLabel } = generateYAxis(revenue);


   if (!revenue || revenue.length === 0) {
     return <p className="mt-4 text-gray-400">No data available.</p>;
   }

   console.log(revenue)
   console.log(revenue[0])
  

  return (
    <div className="w-full md:col-span-4">
        lsdkfj
   
        

            
            {yAxisLabels.map((label) => (
              <p key={label}>{label}</p>
            ))}
      

          
      
       
   </div>

        
  

  );

}







/*


  revenue,
}: {
  revenue: Revenue[];
}) {


===


  revenue,
}: {
  month: string;
  revenue: number;
}) {


*/