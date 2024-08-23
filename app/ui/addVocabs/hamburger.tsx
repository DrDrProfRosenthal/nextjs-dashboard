// 'use client';

import Link from 'next/link';
// import toggleClass from '@/public/hamburger';



export default function hamburger() {


 
    return(
        
    <>

        <div className="hamburgerparent hamburger-con red" id="hamburger-con" > 
            <div className="bar1 bold-background-color"></div>
            <div className="bar2 bold-background-color"></div>
            <div className="bar3 bold-background-color"></div>
        </div>

        
       
        <div className='popupCon background-color bold-color'> 
                
            <div className='popupForm lg:text-base popupForm'>                                           
                <div className='flex flex-col'>

                <a    
                     href="/train"        
                >
                    <p className='text-2xl hover:underline transition ease-in-out'>Train</p>                    
                </a>

                    <br></br>

                <a 
                    href="/addVocabs" 
                >
                    <p className='text-2xl hover:underline transition ease-in-out'>Add Vocabs</p>
               
                </a>


                     
                </div>                                        
            </div>
        </div>
   

     </>
    )


}

// onClick={toggleClass}>