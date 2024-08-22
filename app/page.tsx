
import { ArrowRightIcon } from '@heroicons/react/24/outline';
import Link from 'next/link';
import styles from '@/app/ui/home.module.css';
import Script from 'next/script';
import Head from 'next/head';

import Form from '@/app/ui/invoices/create-form';
import Breadcrumbs from '@/app/ui/invoices/breadcrumbs';
import { fetchCustomers } from '@/app/lib/data';
import { createInvoice } from '@/app/lib/actions';

export default async function Page() {
 // const customers = await fetchCustomers();
  return (


      
   <main className='background-color light-color'>



   <div className=''>
      <div className="hamburgerparent hamburger-con red" id="hamburger-con">
          <div className="bar1 bold-background-color"></div>
          <div className="bar2 bold-background-color"></div>
          <div className="bar3 bold-background-color"></div>
      </div>
    </div>



      <div className="center-container">
        <div className="prompt-container">
            
          <div>

            <div className="vocab-con ">
                <span className="current-vocab dm-sans font-extrabold bold-color" id="current-vocab">vorsichtig, achtsam, argwöhnisch  </span>

                  <div className='german-examplecontainer montserrat italic font-small' >
                    <span className="english-example light-color" id="german-example"> "bleibt zwar weiter
                      <span className='germanExampleVocab counter-color'>&nbsp;vorsichtig&nbsp;</span>        
                      und kritisch, stellt jedoch fest, dass ein Pilotprojekt den Mitgliedstaaten dabei helfen [...]"</span>
                  </div>                
             </div>
           
       
              
                  <div className='vocab-con font-medium'>
                    <span className='verbBox font-medium bold-color bold-weight hidden'>to</span>
                    <input type="text" className="centered-input font-medium bold-color bold-border-color" placeholder="..." />
                    <button  className="btn font-medium bold-color bold-border-color" id="myBtn" type="submit">Check!</button>
                  </div>



                  <div className='english-examplecontainer vocab-con' >           

                        <div id='hintContainer' className='flex-container font-small'>

                            <span className='english-example montserrat italic light-color'> 
                              "Notes, while remaining 
                              <span id="englishVocabPlaceholder" className='englishExampleVocab counter-color'>&nbsp;_____&nbsp;</span>
                              <span id="englishVocab" className='counter-color englishVocab englishExampleVocab counter-color hidden'>&nbsp;wary&nbsp;</span>        
                              and critical, that
                              a pilot project may help Member States better to understand the inherent [...]" 
                            </span>
                            <div>
                              <button className='bold-color font-medium montserrat italic bold-border-color'  id="hintBtn">Reveal hint </button>
                            </div>
                            
                        </div>
                        
                  </div>

        

          </div>
        </div>
    </div>

      
    <div className='popupCon closed background-color bold-color'>
     <div className='popUpMenu'>          
            <div>
              <span className='dm-sans font-medium'>Input new words...</span>
              <input className='dm-sans font-medium' value={"hello"}></input>
              <button className='bold-color font-medium montserrat italic bold-border-color' id="addBtn" >Add vocab </button>

                    <Breadcrumbs
                            breadcrumbs={[
                              { label: 'Invoices', href: '' },
                              {
                                label: 'Create Invoice',
                                href: '',
                                active: true,
                              },
                            ]}
                          />

                <form action={createInvoice}>
                  <select>
                    asdf
                  </select>
                  <input placeholder='somehit'></input>
                  <input placeholder='somehit'></input>
                  <button type='submit' className='bold-color font-medium montserrat italic bold-border-color' id="addBtn" >Add vocab </button>
                  </form>           
            </div>
      </div>  
    </div>
    
   

    </main>
  );
}

