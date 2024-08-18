
import { ArrowRightIcon } from '@heroicons/react/24/outline';
import Link from 'next/link';
import styles from '@/app/ui/home.module.css';
import Script from 'next/script';
import Head from 'next/head';

export default function Page() {
  return (


    <main className='background-color light-color'>

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
                              <span id="englishVocab counter-color" className='englishExampleVocab counter-color hidden'>&nbsp;wary&nbsp;</span>        
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

    </main>
  );
}

