
import { ArrowRightIcon } from '@heroicons/react/24/outline';
import Link from 'next/link';
import styles from '@/app/ui/home.module.css';
import Script from 'next/script';

export default function Page() {
  return (
    <main>

      <div className="center-container">
        <div className="prompt-container">
            <div className="vocab-con">
             <span className="current-vocab" id="current-vocab">Vocab</span>
           </div>
            <input type="text" className="centered-input" placeholder="Enter text here" />
            <button  className="btn " id="myBtn" type="submit">Go!</button>
        </div>
    </div>

    </main>
  );
}

