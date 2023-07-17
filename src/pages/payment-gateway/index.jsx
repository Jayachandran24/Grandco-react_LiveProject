/* eslint-disable @next/next/no-css-tags */
import { useEffect } from 'react';
import Head from 'next/head';
//= Layout
import MainLightLayout from '../../layouts/main-light';
//= Components
import StickyBar from '../../components/Common/StickyBar';
import FixedSearch from '../../components/Common/FixedSearch';
import PgHeader from '../../components/Project/Header/pg';
import IntroPg from '../../components/Project/Intro/pg';
import Video from '../../components/Project/Video';
import PgDetails from '../../components/Project/Details/pg';
import PgNextPrev from '../../components/Project/NextPrev/pg';
import PccNextPrev from '../../components/Project/NextPrev/pcc';
import Footer from "../../components/Footers/MainFooter";
import PccDescription from '../../components/Project/Description/pg';




const PaymentGateway = () => {
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
                <title>Payment Gateway </title>
            </Head>

            <MainLightLayout>
                <StickyBar />
                <FixedSearch />
                <div className="wrapper">
                    <PgHeader />
                    <IntroPg />
                    <Video />
                    <PgDetails />
                    <PccDescription />
                    <PgNextPrev />
                    <Footer footerClass="main-footer bg-dark-blue" />
                </div>
            </MainLightLayout>
        </>
    )
}

export default PaymentGateway;