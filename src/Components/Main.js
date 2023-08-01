import React from 'react';
import Slider from 'react-slick';
import { useInView } from 'react-intersection-observer';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import './assets/css/Home.css';
import banner1 from '../Components/assets/images/banner-1.jpg';
import banner2 from '../Components/assets/images/banner-2.jpg';
import banner3 from '../Components/assets/images/banner-3.jpg';
import abpInfluenceLogo from '../Components/assets/images/abp-influence-logo.png';
import bannerGrid from '../Components/assets/images/bannerGrid.png';
import secureEdge01 from '../Components/assets/images/01-secureEdge.svg';
import secureEdge02 from '../Components/assets/images/02-secureEdge.svg';
import secureEdge03 from '../Components/assets/images/03-secureEdge.svg';
import secureEdge04 from '../Components/assets/images/04-secureEdge.svg';
import secureEdge05 from '../Components/assets/images/05-secureEdge.svg';
import success1 from '../Components/assets/images/success-1.png';
import success2 from '../Components/assets/images/success-2.png';
import playCircle from '../Components/assets/images/play_circle.svg';
import Creators from './Creators/Creators';
import LeadingPartners from './LeadingPartners/LeadingPartners';
import PlanAcampaign from './PlanAcampaign/PlanAcampaign';
import AreYouCreator from './AreYouCreator/AreYouCreator';
import Footer from './HeaderFooter/Footer';
import Inviewport from './Animations/Inviewport';


const Main = () => {    

    const { ref, inView, entry } = useInView({
        threshold: 0,
    });

    const bannerSlick = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true, 
      };
      
    return (
        <>
        {/* sec-main */}
        <section className='sec-main'>
            <div className='header'>
                <div className='logo animate fadeInDown one'>
                    <a href='#'>
                        <img src={abpInfluenceLogo} alt='' />
                    </a>
                </div>
            </div>            
            <div className='content-banner'>
                <div className='lower-content animate fadeInUp two'>
                    <p>Discover Influencers in Every Nook</p>
                </div>
                <div className='contentTalkToUs animate fadeInUp three'>
                    <p>We understand that every brand is unique, with distinct goals and target markets.With our media legacy, we help grow businesses by aligning them with the right social content creators from our diverse portfolio.</p>
                </div>
                <div className='btnTalkToUs animate fadeInUp four'>
                    <span>Talk to us</span>
                </div>
            </div>
            <div className='overlay-grid-img'>
                <img src={bannerGrid} alt='' />
            </div>
            <div className='overlay-background'></div>
            <div className='overlay-content-background'></div>
            <div className='banner'>
                <Slider {...bannerSlick}>
                    <div className='slick-item'>
                        <img src={banner1} alt='' />
                    </div>
                    <div className='slick-item'>
                        <img src={banner2} alt='' />
                    </div>
                    <div className='slick-item'>
                        <img src={banner3} alt='' />
                    </div>
                </Slider>
            </div>
        </section>
        {/* sec-secureEdge */}
        <section className='sec-secureEdge'>            
            <div className='container'> 
                <div ref={ref} style={{fontSize: 0}}>               
                {
                    setTimeout(()=>{
                        inView == true ? document.getElementById("sec_secureEdge").classList.add('show') : <></>
                    }, 100)
                }                
                </div>
                <div className='title-secure' id='sec_secureEdge'>
                    <div className='title-big-text animate fadeInLeft one'>How We Secure an Edge</div>
                    <div className='title-small-text animate fadeInLeft two'>From content creation, distribution, tracking, to analysis, we ensure that each campaign delivers.</div>
                </div>
                <article className='arti-secureEdge'>
                    <ul>
                        <li>
                            <div className='icon-secureEdge'>
                                <img src={secureEdge01} alt='' />
                            </div>
                            <div className='text-secureEdge'>Total 360-degree Campaigns</div>
                        </li>
                        <li>
                            <div className='icon-secureEdge'>
                                <img src={secureEdge02} alt='' />
                            </div>
                            <div className='text-secureEdge'>Online to Offline Solutions</div>
                        </li>
                        <li>
                            <div className='icon-secureEdge'>
                                <img src={secureEdge03} alt='' />
                            </div>
                            <div className='text-secureEdge'>Seamless Collaboration and Support</div>
                        </li>
                        <li>
                            <div className='icon-secureEdge'>
                                <img src={secureEdge04} alt='' />
                            </div>
                            <div className='text-secureEdge'>Performance Tracking</div>
                        </li>
                        <li>
                            <div className='icon-secureEdge'>
                                <img src={secureEdge05} alt='' />
                            </div>
                            <div className='text-secureEdge'>Customized Partnerships</div>
                        </li>
                    </ul>
                </article>
            </div>
        </section>
        {/* sec-successful-campaign */}
        <section className='sec-successful-campaign'>
            <div className='container'>
                <div className='title-secure'>
                    <div className='title-big-text'>Successful Campaigns</div>
                </div>
                <div className='list-successful'>
                    <ul>
                        <li>
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
                        <li>
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
                        <li>
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
        </section>
        {/* sec components-creators */}
        <div className='components-creators'>
            <Creators />
        </div>
        <Inviewport />
        {/* sec components-Leading Partners */}
        <div className='components-Partners'>
            <LeadingPartners />
        </div>
        {/* sec components-Plan a Campaign */}
        <div className='components-Partners'>
            <PlanAcampaign />
        </div>
        {/* sec components- are you creator */}
        <div className='components-areUcreator'>
            <AreYouCreator />
        </div>
        {/* Footr */}
        <div className='component-footer'>
            <Footer />
        </div>
        </>
    )
}

export default Main