
import { useEffect } from 'react';
// import Head from 'next/head';
// //= Layout
import MainLightLayout from '../../layouts/main-light';
// //= Components
import StickyBar from '../../components/Common/StickyBar';
import FixedSearch from '../../components/Common/FixedSearch';
import Header from '../../components/Business/Header/index';
import Services from '../../components/Business/Services/index';
import Features from '../../components/Business/Features/index';
import Process from '../../components/Business/Process/index';
import Numbers from '../../components/Business/Numbers/index';
import Portfolio from '../../components/Business/Portfolio/index';
import Testimonials from '../../components/Business/Testimonials';
import Blog from '../../components/Business/Blog';
import Footer from "../../components/Footers/MainFooter";

const HomeBusiness1 = () => {
  useEffect(() => {
    document.body.classList.add('index-bus1');

    const removeClasses = [
      'land-demo2', 'index-corporate',
      'index-restaurant', 'index-arch',
      'index-freelancer', 'cr-agency',
      'index-main', 'mobile-app',
      'gr-orange-bg', 'nft-market'
    ];

    document.body.classList.remove(...removeClasses);
  }, []);

  return (
    <>
     
        <title>Grandoco merchant services</title>
      
        <MainLightLayout>
        <StickyBar />
        <FixedSearch />
        <Header />
        <main className="position-re">
          <Services />
          <Features />
          <Process />
          <Numbers />
          <Portfolio /> 
          <Testimonials curve={true} />
          <Blog />
          <Footer footerClass="main-footer bg-dark-blue bg-img" footerBg={false} business={true} />
        </main>
      </MainLightLayout>
    </>
  )
}

export default HomeBusiness1;