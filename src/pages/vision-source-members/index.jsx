
import { useEffect } from 'react';

//= Layout
import MainLightLayout from '../../layouts/main-light';
//= Components
import StickyBar from '../../components/Common/StickyBar';
import FixedSearch from '../../components/Common/FixedSearch';
import NptHeader from '../../components/Project/Header/npt';
import IntroNpt from '../../components/Project/Intro/npt';
import Video from '../../components/Project/Video';
import BiDetails from '../../components/Project/Details/bi';
// import BiDescription from '../../components/Project/Description/bi';
import NptNextPrev from '../../components/Project/NextPrev/npt';
import Footer from "../../components/Footers/MainFooter";

const NewlandPaymentTerminal = () => {
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
                <title>Newland Payment Terminal </title>
            {/* </Head> */}

            <MainLightLayout>
                <StickyBar />
                <FixedSearch />
                <div className="wrapper">
                    <NptHeader />
                    <IntroNpt />
                    <Video />
                    <BiDetails />
                    {/* <BiDescription /> */}
                    <NptNextPrev />
                    <Footer footerClass="main-footer bg-dark-blue" />
                </div>
            </MainLightLayout>
        </>
    )
}

export default NewlandPaymentTerminal;