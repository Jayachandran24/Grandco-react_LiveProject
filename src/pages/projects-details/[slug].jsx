/* eslint-disable @next/next/no-css-tags */
import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';

import Head from 'next/head';
//= Layout
import MainLightLayout from '../../layouts/main-light';
//= Components
import StickyBar from '../../components/Common/StickyBar';
import FixedSearch from '../../components/Common/FixedSearch';
import Header from '../../components/Project/Header';
import Intro from '../../components/Project/Intro';
import Video from '../../components/Project/Video';
import Details from '../../components/Project/Details';
import Description from '../../components/Project/Description';
import NextPrev from '../../components/Project/NextPrev';
import Footer from "../../components/Footers/MainFooter";
import ProjectsJSON from "../../data/business/projects.json";


const Talech = () => {
    const [currentProject, setCurrentProject] = useState({});
    const router = useRouter();

    const setCurProject = (currProject) => {
        setCurrentProject(currProject);
    }

    useEffect(() => {
        console.log(router.query.slug)
        const currProject = ProjectsJSON.filter((item) => item.url === router.query.slug)[0];
        setCurProject(currProject)
        const removeClasses = [
            'index-bus1', 'index-main', 'index-corporate',
            'index-restaurant', 'index-arch',
            'index-freelancer', 'cr-agency',
            'land-demo2', 'mobile-app',
            'gr-orange-bg', 'nft-market'
        ];
        document.body.classList.remove(...removeClasses);
    }, [router.query.slug]);

    return (
        <>
            <Head>
                <title>{currentProject?.pagetitle}</title>
            </Head>

            <MainLightLayout>
                <StickyBar />
                <FixedSearch />
                <div className="wrapper">
                    {
                        <>
                            <Header h6title={currentProject?.h6title} content={currentProject?.content} />
                            <Intro />
                            <Video />
                            <Details />
                            <Description />
                            <NextPrev />
                        </>
                    }

                    <Footer footerClass="main-footer bg-dark-blue" />
                </div>
            </MainLightLayout>
        </>
    )
}

export default Talech;