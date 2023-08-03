import React from 'react';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import imgCreator from '../assets/images/img-creator.png';
import socialImgGroup from '../assets/images/social-img-group.png';
import '../assets/css/Home.css';

const Creators = () => {
    const creatorBannerSlick = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
      };
  return (    
    <div className='components-creators min-h-screen'>
        <section className='sec-creators'>
            <div className='container'>
                <div className='title-secure'>
                    <div className='title-big-text'>Creators</div>
                </div>
                <div className='img-social-group'>
                    <img src={socialImgGroup} alt=' ' />
                </div>
                <div className='content-creators'>
                    From food to fashion, from lifestyle to health, our social content creators help brands establish authentic connections with their target audience.
                </div>
                <article className='arti-banner'>
                    <Slider {...creatorBannerSlick}>
                        <div className='slick-item'>
                            <img src={imgCreator} alt='' />
                        </div>
                        <div className='slick-item'>
                            <img src={imgCreator} alt='' />
                        </div>
                        <div className='slick-item'>
                            <img src={imgCreator} alt='' />
                        </div>
                    </Slider>
                </article>
                <div className="btnTalkToUs"><span>Talk to us</span></div>
            </div>
        </section>
    </div>
  )
}

export default Creators