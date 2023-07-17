/* eslint-disable @next/next/no-css-tags */
import { useEffect } from 'react';
import Head from 'next/head';
//= Layout
import MainLightLayout from '../../layouts/main-light';
//= Components
import StickyBar from '../../components/Common/StickyBar';
import FixedSearch from '../../components/Common/FixedSearch';
import HeaderIST from '../../components/Project/Header/ist';
import IntroIst from '../../components/Project/Intro/ist';
import Video from '../../components/Project/Video';
import IstDetails from '../../components/Project/Details/ist';
import IstDescription from '../../components/Project/Description/ist';
import IstNextPrev from '../../components/Project/NextPrev/ist';
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
                <title>Ingenico Smart</title>
            </Head>

            <MainLightLayout>
                <StickyBar />
                <FixedSearch />
                <div className="wrapper">
                    <HeaderIST />
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