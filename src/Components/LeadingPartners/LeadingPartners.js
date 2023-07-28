import React from 'react';
import '../assets/css/Home.css';
// import '../assets/css/LeadingPartners.css';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import logoPartners01 from '../assets/images/logo-partners-01.png';
import logoPartners02 from '../assets/images/logo-partners-02.png';
import logoPartners03 from '../assets/images/logo-partners-03.png';
import logoPartners04 from '../assets/images/logo-partners-04.png';

const LeadingPartners = () => {
    let LeadingPartnersSlider = { 
        className: 'LeadingPartners-slider',
        slidesToShow: 2,
        slidesToScroll: 1,
        arrows: true,
        infinite: true,
        autoplay:true,
        dots: true,
    }

  return (
    <section className='sec-leadingPartners'>
        <div className='container'>
            <div className='bx-leadingPartners'>
                <div className='title-secure'>
                    <div className='title-big-text'>LEADING PARTNERS</div>
                </div>
                <div className='carousel-partners' style={{marginTop: '36px'}}>
                    <Slider {...LeadingPartnersSlider} >
                        <div className='item-partners'>
                            <div className='logo-item-partners'> 
                                <img src={logoPartners01} alt='' />
                            </div>
                            <div className='logo-item-partners'> 
                                <img src={logoPartners02} alt='' />
                            </div>
                        </div>
                        <div className='item-partners'>
                            <div className='logo-item-partners'> 
                                <img src={logoPartners03} alt='' />
                            </div>
                            <div className='logo-item-partners'> 
                                <img src={logoPartners04} alt='' />
                            </div>
                        </div>
                        <div className='item-partners'>
                            <div className='logo-item-partners'> 
                                <img src={logoPartners01} alt='' />
                            </div>
                            <div className='logo-item-partners'> 
                                <img src={logoPartners02} alt='' />
                            </div>
                        </div>
                        <div className='item-partners'>
                            <div className='logo-item-partners'> 
                                <img src={logoPartners03} alt='' />
                            </div>
                            <div className='logo-item-partners'> 
                                <img src={logoPartners04} alt='' />
                            </div>
                        </div>
                    </Slider>
                </div>
            </div>
        </div>
    </section>
  )
}

export default LeadingPartners