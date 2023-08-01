import React from 'react';
import '../assets/css/Home.css';

import arrow_circle from '../assets/images/arrow_circle.png';
import iconPlan01 from '../assets/images/icon-plan-01.png';
import iconPlan02 from '../assets/images/icon-plan-02.png';
import iconPlan03 from '../assets/images/icon-plan-03.png';
import iconPlan04 from '../assets/images/icon-plan-04.png';

const PlanAcampaign = () => {

    const [value, setValue] = React.useState("150000");

  return ( 
    <section className='sec-planAcampaign'>
        <div className='container'>
            <div className='bx-planCampaign'>
                <div className='SLR-vertical-Small'>
                    <div className="pulse"></div>
                </div>
                <div className='inner-planCampaign'>
                    <div className='title-ww-create'>
                        PLAN A CAMPAIGN
                    </div>
                    <div className='list-planCampaign'>
                        <ul>
                            <li className='active'>
                                <div className='item-list-plan'>
                                    <div className='img-list-plan'>
                                        <img src={iconPlan01} alt='' />
                                    </div>
                                    <div className='text-list-plan'>
                                        Awareness & recall
                                    </div>
                                </div>
                            </li>
                            <li>
                                <div className='item-list-plan'>
                                    <div className='img-list-plan'>
                                        <img src={iconPlan02} alt='' />
                                    </div>
                                    <div className='text-list-plan'>
                                        Traffic
                                    </div>
                                </div>
                            </li>
                            <li>
                                <div className='item-list-plan'>
                                    <div className='img-list-plan'>
                                        <img src={iconPlan03} alt='' />
                                    </div>
                                    <div className='text-list-plan'>
                                        Conversions
                                    </div>
                                </div>
                            </li>
                            <li>
                                <div className='item-list-plan'>
                                    <div className='img-list-plan'>
                                        <img src={iconPlan04} alt='' />
                                    </div>
                                    <div className='text-list-plan'>
                                        Content generation
                                    </div>
                                </div>
                            </li>
                        </ul>
                    </div>
                    <div className='total-budget'>
                        <p>Total Budget</p>
                        <h3>₹{value}</h3>
                    </div>
                    <div className='min-max-slider'>
                        <div className="slider">
                            
                            <div className="slider__input">
                                <input
                                    className="slider__input_slider"
                                    type="range"
                                    min="50000"
                                    max="1000000"
                                    step="1"
                                    value={value}
                                    onChange={e => setValue(e.target.value)}
                                    />
                            </div>
                            <div className="slider__ranges">
                                <p>Min: ₹50,000</p>
                                <p>Max: ₹1,000,000</p>
                            </div>
                        </div>

                    </div>
                    <div className='content-piece-cost'>
                        <ul>
                            <li>
                                <div className='item-content-piece-cost'>
                                    <p>No. of content pieces</p>
                                    <h3>250K</h3>
                                </div>
                            </li>
                            <li>
                                <div className='item-content-piece-cost'>
                                    <p>Cost per content</p>
                                    <h3>500</h3>
                                </div>
                            </li>
                        </ul>
                    </div>

                    <div className='btnTalkToUs'>
                        <span>ALL CREATORS</span>
                        <span>
                            <img src={arrow_circle} alt='' />
                        </span>
                    </div>

                </div>
            </div>
        </div>
    </section>
  )
}

export default PlanAcampaign