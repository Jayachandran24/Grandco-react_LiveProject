
import { useEffect } from 'react';
//= Layout
import MainLightLayout from '../../layouts/main-light';
//= Components
import StickyBar from '../../components/Common/StickyBar';
import FixedSearch from '../../components/Common/FixedSearch';
import Footer from "../../components/Footers/MainFooter";

const LegalNotice = () => {
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
            
                <title>Legal Notice</title>
           

            <MainLightLayout>
                <StickyBar />
                <FixedSearch />
                <div className="wrapper">
                    <section className="works-header bg-img parallaxie d-flex align-items-end " style={{ backgroundImage: "url('img/portfolio/project2/legalnotice.jpg')" }} data-overlay-dark="7">
                        <div className="container">
                            <div className="row">
                                <div className="col-lg-7 col-md-9">
                                    <div className="cont mb-40">
                                        <h2 style={{fontSize:'50px'}}>Legal Notice</h2>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </section>
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-12">
                                <div className="main-post mt-50 md-mb50">
                                    <div className="item pb-60">
                                        <div className="unorder-list mb-30">
                                            <h6 className="fw-600 mb-15">Legal Notice</h6>
                                            <ul className="rest">
                                                <li className='underline'>
                                                    <a href="https://www.canada.ca/en/financial-consumer-agency/services/merchants/credit-debit-code-conduct.html" target="_blank" rel="noreferrer noopener">Credit and debit card industry - Code of Conduct</a>
                                                </li>
                                                <li className='underline'>
                                                    <a href="https://www.canada.ca/en/financial-consumer-agency/services/merchants/rights-merchant.html" target="_blank" rel="noreferrer noopener">Merchant rights under the Code of Conduct for the Credit and Debit Card Industry in Canada</a>
                                                </li>
                                                <li className='underline'>
                                                    <a href="https://www.canada.ca/en/financial-consumer-agency/services/merchants/choose-payment-provider.html" target="_blank" rel="noreferrer noopener">Choosing a payment service provider: tips for merchants</a>
                                                </li>
                                                <li className='underline'>
                                                    <a href="https://www.canada.ca/en/financial-consumer-agency/services/merchants/payment-industry-basics.html" target="_blank" rel="noreferrer noopener">Payment card industry: the basics for merchants</a>
                                                </li>
                                                <li className='underline'>
                                                    <a href="https://www.canada.ca/en/financial-consumer-agency/services/merchants/overview-card-payment.html" target="_blank" rel="noreferrer noopener">How card payments work: overview for merchants</a>
                                                </li>
                                                <li className='underline'>
                                                    <a href="https://www.canada.ca/en/financial-consumer-agency/services/merchants/overview-code-conduct-credit-debit.html" target="_blank" rel="noreferrer noopener">What does the Code of conduct mean for merchants</a>
                                                </li>
                                                <li className='underline'>
                                                    <a href="https://www.canada.ca/en/financial-consumer-agency/services/merchants/make-complaint.html" target="_blank" rel="noreferrer noopener">Credit and debit card industry: merchant questions and dispute resolution</a>
                                                </li>
                                                <li className='underline'>
                                                    <a href="https://www.canada.ca/en/financial-consumer-agency/services/merchants/credit-fees-merchant.html" target="_blank" rel="noreferrer noopener">Merchant surcharges, service and convenience fees, and discounts</a>
                                                </li>
                                                <li className='underline'>
                                                    <a href="https://www.canada.ca/en/financial-consumer-agency/services/merchants/glossary.html" target="_blank" rel="noreferrer noopener">Glossary – Payment card industry</a>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <Footer footerClass="main-footer bg-dark-blue" />
                </div>
            </MainLightLayout>
        </>
    )
}

export default LegalNotice;