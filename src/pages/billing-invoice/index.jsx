
import { useEffect } from 'react';
//= Layout
import MainLightLayout from '../../layouts/main-light';
//= Components
import StickyBar from '../../components/Common/StickyBar';
import FixedSearch from '../../components/Common/FixedSearch';
import BiHeader from '../../components/Project/Header/bi';
import IntroBi from '../../components/Project/Intro/bi';
import Video from '../../components/Project/Video';
import BiDetails from '../../components/Project/Details/bi';
import BiDescription from '../../components/Project/Description/bi';
import BiNextPrev from '../../components/Project/NextPrev/bi';
import Footer from "../../components/Footers/MainFooter";



const BillingInvoice = () => {
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
                <title>Billing and Invoicing </title>
            {/* </Head> */}

            <MainLightLayout>
                <StickyBar />
                <FixedSearch />
                <div className="wrapper">
                    <BiHeader />
                    <IntroBi />
                    <Video />
                    <BiDetails />
                    <BiDescription />
                    <BiNextPrev />
                    <Footer footerClass="main-footer bg-dark-blue" />
                </div>
            </MainLightLayout>
        </>
    )
}

export default BillingInvoice;