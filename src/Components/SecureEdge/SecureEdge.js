import React from 'react';
import '../assets/css/Home.css';
import { useInView } from 'react-intersection-observer';
import secureEdge01 from '../../Components/assets/images/01-secureEdge.svg';
import secureEdge02 from '../../Components/assets/images/02-secureEdge.svg';
import secureEdge03 from '../../Components/assets/images/03-secureEdge.svg';
import secureEdge04 from '../../Components/assets/images/04-secureEdge.svg';
import secureEdge05 from '../../Components/assets/images/05-secureEdge.svg';

const SecureEdge = () => {  
    const { ref, inView, entry } = useInView({
        threshold: 0,
    });
  return (    
    <section className='sec-secureEdge'>            
    <div className='container'> 
        <div ref={ref} style={{fontSize: 0}}>               
            {
                setTimeout(()=>{
                    inView == true ? document.getElementById("sec_secureEdge").classList.add('show') : <></>
                }, 100)
            } 
            <div className='title-secure' id='sec_secureEdge'>
                <div className='title-big-text animate fadeInUp one'>How We Secure an Edge</div>
                <div className='title-small-text animate fadeInUp two'>From content creation, distribution, tracking, to analysis, we ensure that each campaign delivers.</div>
            </div>               
        </div>
        <article className='arti-secureEdge min-h-screen'>
            <div ref={ref} style={{fontSize: 0}}>               
                {
                    setTimeout(()=>{
                        inView == true ? document.getElementById("ul_secureEdg").classList.add('show') : <></>
                    }, 100)
                } 
                <ul id='ul_secureEdg'>
                    <li className=' animate fadeInUp three'>
                        <div className='icon-secureEdge'>
                            <img src={secureEdge01} alt='' />
                        </div>
                        <div className='text-secureEdge'>Total 360-degree Campaigns</div>
                    </li>
                    <li className=' animate fadeInUp four'>
                        <div className='icon-secureEdge'>
                            <img src={secureEdge02} alt='' />
                        </div>
                        <div className='text-secureEdge'>Online to Offline Solutions</div>
                    </li>
                    <li className=' animate fadeInUp five'>
                        <div className='icon-secureEdge'>
                            <img src={secureEdge03} alt='' />
                        </div>
                        <div className='text-secureEdge'>Seamless Collaboration and Support</div>
                    </li>
                    <li className=' animate fadeInUp six'>
                        <div className='icon-secureEdge'>
                            <img src={secureEdge04} alt='' />
                        </div>
                        <div className='text-secureEdge'>Performance Tracking</div>
                    </li>
                    <li className='animate fadeInUp seven'>
                        <div className='icon-secureEdge'>
                            <img src={secureEdge05} alt='' />
                        </div>
                        <div className='text-secureEdge'>Customized Partnerships</div>
                    </li>
                </ul>               
            </div>
        </article>
    </div>
</section>
  )
}

export default SecureEdge