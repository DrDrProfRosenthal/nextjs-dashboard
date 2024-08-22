'use client';

import Link from 'next/link';
import toggleClass from '@/public/hamburger';



export default function hamburger() {


 
    return(
        
    <>

        <div className="hamburgerparent hamburger-con red" id="hamburger-con" onClick={toggleClass}>
            <div className="bar1 bold-background-color"></div>
            <div className="bar2 bold-background-color"></div>
            <div className="bar3 bold-background-color"></div>
        </div>

        
       
        <div className='popupCon background-color bold-color'> 
                
            <div className='popupForm lg:text-base popupForm'>                                           
                <div className='flex flex-col'>

                <Link    
                     href={"/"}        
                >
                    <p className='text-base'>Main</p>                    
                </Link>

                    <br></br>

                <Link 
                    href={"/addVocabs"} 
                >
                    <p className='text-base'>Add Vocabs</p>
               
                </Link>


                  <span className='dm-sans text-2xl '>Input new words...</span>              
                </div>                                        
            </div>
        </div>
   

     </>
    )


}