/* eslint-disable @next/next/no-css-tags */
import { useEffect } from 'react';
import Head from 'next/head';
//= Layout
import MainLightLayout from '../../layouts/main-light';
//= Components
import StickyBar from '../../components/Common/StickyBar';
import FixedSearch from '../../components/Common/FixedSearch';
import HeaderTR from '../../components/Project/Header/tr';
import IntroIst from '../../components/Project/Intro/tr';
import Video from '../../components/Project/Video';
import IstDetails from '../../components/Project/Details/tr';
import IstDescription from '../../components/Project/Description/tr';
import IstNextPrev from '../../components/Project/NextPrev/tr';
import Footer from "../../components/Footers/MainFooter";




const IngenicoSmartTerminals = () => {
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
            <Head>
                <title>Talech Register</title>
            </Head>

            <MainLightLayout>
                <StickyBar />
                <FixedSearch />
                <div className="wrapper">
                    <HeaderTR />
                    <IntroIst />
                    <Video />
                    <IstDetails />
                    <IstDescription />
                    <IstNextPrev />
                    <Footer footerClass="main-footer bg-dark-blue" />
                </div>
            </MainLightLayout>
        </>
    )
}

export default IngenicoSmartTerminals;