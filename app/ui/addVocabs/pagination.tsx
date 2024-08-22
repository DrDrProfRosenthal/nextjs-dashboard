import { ArrowLeftIcon, ArrowRightIcon } from '@heroicons/react/24/outline';


export default function Pagination({ totalPages }: { totalPages: number }) {


    console.log(totalPages)
    return(


    <div className="flex my-3">
        <div className="inline-flex arrowBtns" title='previous'>
        <ArrowLeftIcon className="w-8  arrowBtns bold-color bold-border-color" 
        direction="left"
        // onClick={previousExample}
        />
       <span className='font-verysmall' title='next'>&nbsp;</span>
        <ArrowRightIcon 
        className="w-8 arrowBtns bold-color bold-border-color"
        // onClick={nextExample}
        />

         </div>

</div>

   
    )


}