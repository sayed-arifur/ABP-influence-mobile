import React from 'react';
import Slider from 'react-slick';
import { useInView } from 'react-intersection-observer';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import './assets/css/Home.css';
import Creators from './Creators/Creators';
import LeadingPartners from './LeadingPartners/LeadingPartners';
import PlanAcampaign from './PlanAcampaign/PlanAcampaign';
import AreYouCreator from './AreYouCreator/AreYouCreator';
import Footer from './HeaderFooter/Footer';
import Inviewport from './Animations/Inviewport';
import SuccessfulCampaign from './SuccessfulCampaign/SuccessfulCampaign';
import SecureEdge from './SecureEdge/SecureEdge';
import HomeBanner from './HomeBanner/HomeBanner';

const Main = () => {    
    const { ref, inView, entry } = useInView({
        threshold: 0,
    });      
    return (
        <>
        <HomeBanner />
        <SecureEdge />
        <SuccessfulCampaign />
        <Creators />
        <LeadingPartners />
        <PlanAcampaign />
        <AreYouCreator />
        <Footer />
        </>
    )
}

export default Main