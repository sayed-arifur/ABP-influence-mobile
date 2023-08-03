import React from 'react';
import '../assets/css/Home.css';
import { useInView } from 'react-intersection-observer';
import success1 from '../../Components/assets/images/success-1.png';
import success2 from '../../Components/assets/images/success-2.png';
import playCircle from '../../Components/assets/images/play_circle.svg';

const SuccessfulCampaign = () => {  
    const { ref, inView, entry } = useInView({
        threshold: 0,
    });
  return (
    <section className='sec-successful-campaign' id='sec_successful_campaign'>
            <div className='container'>                
                <div ref={ref} style={{fontSize: 0}}>               
                    {
                        setTimeout(()=>{
                            inView == true ? document.getElementById("title_Campaigns").classList.add('show') : <></>
                        }, 100)
                    } 
                    <div className='title-Campaigns animate fadeInUp one' id='title_Campaigns'>
                        <div className='title-big-text'>Successful Campaigns</div>
                    </div>
                </div>
                <div ref={ref} style={{fontSize: 0}}>               
                    {
                        setTimeout(()=>{
                            inView == true ? document.getElementById("list_successful").classList.add('show') : <></>
                        }, 100)
                    }      
                    <div className='list-successful' id='list_successful'>
                        <ul>
                            <li className=' animate fadeInUp two'>
                                <div className='bx-successful'>
                                    <div className='video-image'>
                                        <img src={success1} alt='' />
                                    </div>
                                    <div className='video-name'>SRIJAN</div>
                                    <div className='icon-video'>
                                        <img src={playCircle} alt='' />
                                    </div>
                                </div>
                            </li>
                            <li className=' animate fadeInUp three'>
                                <div className='bx-successful'>
                                    <div className='video-image'>
                                        <img src={success2} alt='' />
                                    </div>
                                    <div className='video-name'>PANTALOONS</div>
                                    <div className='icon-video'>
                                        <img src={playCircle} alt='' />
                                    </div>
                                </div>
                            </li>
                            <li className=' animate fadeInUp four'>
                                <div className='bx-successful'>
                                    <div className='video-image'>
                                        <img src={success1} alt='' />
                                    </div>
                                    <div className='video-name'>ASIAN PAINTS</div>
                                    <div className='icon-video'>
                                        <img src={playCircle} alt='' />
                                    </div>
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </section>
  )
}

export default SuccessfulCampaign