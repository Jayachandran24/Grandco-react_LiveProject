/* eslint-disable @next/next/no-css-tags */
import { useEffect } from 'react';
import Head from 'next/head';
//= Layout
import MainLightLayout from '../../layouts/main-light';
//= Components
import StickyBar from '../../components/Common/StickyBar';
import FixedSearch from '../../components/Common/FixedSearch';
import PccHeader from '../../components/Project/Header/pcc';
import IntroPcc from '../../components/Project/Intro/pcc';
import Video from '../../components/Project/Video';
import PccDetails from '../../components/Project/Details/pcc';
import PccDescription from '../../components/Project/Description/pcc';
import PccNextPrev from '../../components/Project/NextPrev/pcc';
import Footer from "../../components/Footers/MainFooter";



const PayontConnectedCommerce = () => {
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
                <title>Poynt for Connected Commerce</title>
            </Head>

            <MainLightLayout>
                <StickyBar />
                <FixedSearch />
                <div className="wrapper">
                    <PccHeader />
                    <IntroPcc />
                    <Video />
                    <PccDetails />
                    <PccDescription />
                    <PccNextPrev />
                    <Footer footerClass="main-footer bg-dark-blue" />
                </div>
            </MainLightLayout>
        </>
    )
}

export default PayontConnectedCommerce;