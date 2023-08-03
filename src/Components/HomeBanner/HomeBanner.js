import React from 'react';
import Slider from 'react-slick';
import '../assets/css/Home.css';
import { useInView } from 'react-intersection-observer';
import banner1 from '../../Components/assets/images/banner-1.jpg';
import banner2 from '../../Components/assets/images/banner-2.jpg';
import banner3 from '../../Components/assets/images/banner-3.jpg';
import abpInfluenceLogo from '../../Components/assets/images/abp-influence-logo.png';
import bannerGrid from '../../Components/assets/images/bannerGrid.png';

const HomeBanner = () => {
    
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
    
    <section className='sec-main min-h-screen'>
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
  )
}

export default HomeBanner;