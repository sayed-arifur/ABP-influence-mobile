import React, {useState} from 'react';
import arrow_circle from '../assets/images/arrow_circle.png';
import '../assets/css/Home.css';

const AreYouCreator = () => {

    const [name, setName] = useState();
    const [social, setSocial] = useState();

  return (
    <div className='components-areUcreator'>
    <section className='sec-areYouCreator'>
        <div className='container'>
            <div className='title-creator'>
                <h4>ARE YOU A</h4>
                <h3>CREATOR?</h3>
            </div>
            <div className='btnTalkToUs'>
                <span>Connect with us</span>
            </div>
        </div>
    </section>
    </div>
  )
}

export default AreYouCreator