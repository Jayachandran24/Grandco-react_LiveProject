
import { useEffect } from 'react';
// import Head from 'next/head';
//= Layout
import MainLightLayout from '../../layouts/main-light';
//= Components
import StickyBar from '../../components/Common/StickyBar';
import FixedSearch from '../../components/Common/FixedSearch';
// import Header from '../../components/Project/Header';
// import Intro from '../../components/Project/Intro';
// import Video from '../../components/Project/Video';
// import Details from '../../components/Project/Details';
// import Description from '../../components/Project/Description';
// import NextPrev from '../../components/Project/NextPrev';
import Footer from "../../components/Footers/MainFooter";

const Affiliates = () => {
    useEffect(() => {
        const removeClasses = [
            'index-bus1', 'index-main', 'index-corporate',
            'index-restaurant', 'index-arch',
            'index-freelancer', 'cr-agency',
            'land-demo2', 'mobile-app',
            'gr-orange-bg', 'nft-market'
        ];

        document.body.classList.remove(...removeClasses);
    }, []);

    return (
        <>
            {/* <Head> */}
                <title>Coming soon</title>
            {/* </Head> */}

            <MainLightLayout>
                <StickyBar />
                <FixedSearch />
                <div className="wrapper">
                    <section className="works-header bg-img parallaxie d-flex align-items-end" style={{ backgroundImage: "url('img/portfolio/project2/bg.jpg')" }} data-overlay-dark="4">
                        <div className="container">
                            <div className="row">
                                <div className="col-lg-7 col-md-9">
                                    <div className="cont mb-40">
                                        <h6>Process Ongoing</h6>
                                        <h2>Coming Soon</h2>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </section>
                    <Footer footerClass="main-footer bg-dark-blue" />
                </div>
            </MainLightLayout>
        </>
    )
}

export default Affiliates;