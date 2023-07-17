
import { useEffect } from 'react';
//= Layout
import MainLightLayout from '../../layouts/main-light';
//= Components
import StickyBar from '../../components/Common/StickyBar';
import FixedSearch from '../../components/Common/FixedSearch';
import Footer from "../../components/Footers/MainFooter";
import { Link } from 'react-router-dom';




const PrivacyPolicy = () => {
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
           
                <title>Privacy Policy</title>
            

            <MainLightLayout>
                <StickyBar />
                <FixedSearch />
                <div className="wrapper">
                    <section className="works-header bg-img parallaxie d-flex align-items-end" style={{ backgroundImage: "url('img/portfolio/project2/privacypolicy.jpg')" }} data-overlay-dark="5">
                        <div className="container">
                            <div className="row">
                                <div className="col-lg-7 col-md-9">
                                    <div className="cont mb-40">
                                        <h2>Privacy Policy</h2>
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
                                        <div className="text mb-40">
                                            <p>
                                                At Grandco we respect your online privacy and ensure that we are protecting any
                                                Personal information that you share with us.  Our Privacy Policy sets out how we use
                                                that information.  As a condition to use Grandco’s services, you agree to the terms of
                                                the Privacy Policy Statement as it may be updated from time to time.  This privacy
                                                policy applies to <Link href="/" ><span className='text-decoration-underline cursor-pointer'>www.grandco.ca</span></Link>                                            </p>
                                        </div>
                                        <div className="unorder-list mb-30">
                                            <h6 className="fw-600 mb-15">Personal Information</h6>
                                            <ul className="rest">
                                                <li>
                                                    <p>When you use Grandco’s services, we collect information sent to us by your computer,
                                                        mobile phone or other access device.  The information sent to us, but is not limited to,
                                                        the following: Name, Email Address, Unique User Name and password, data about the
                                                        pages you access, computer ID address, device ID or unique identifier, device type,
                                                        mobile network information, statistics on page views, traffic to and from the sites,
                                                        referral URL, ad data and standard web log data and other information.  We also collect
                                                        anonymous information through our use of cookies and web beacons.  </p>
                                                </li>
                                                <li>
                                                    <p>
                                                        We post user testimonials on our website.  These testimonials may include names and
                                                        other personal information and we acquire permission from our users prior to posting
                                                        these on our website.  Grandco is not responsible for the personal information users
                                                        elect to post within their testimonials.
                                                    </p>
                                                </li>
                                                <li>
                                                    <p>
                                                        Information you provide to us: We may collect and store information you provide us
                                                        when you use Grandco Services, information such as contact information, financial
                                                        information and detailed personal information such as your date of birth, national ID
                                                        number, credit bureaus, SIN number or Business/Corporation Number.
                                                    </p>
                                                </li>
                                                <li>
                                                    <p>
                                                        We may also collect information from or about you from other sources, such as your
                                                        contact us, our independent sales reps, customer support team, technical support team.
                                                    </p>
                                                </li>
                                                <li>
                                                    <p>
                                                        Using your mobile device: We may offer the ability to connect with Grandco’s Services
                                                        using a mobile voice, either through a mobile application or via a mobile optimized
                                                        website.  The provisions of this Privacy Policy apply to all such mobile access and use of
                                                        mobile devices.
                                                    </p>
                                                </li>
                                                <li>
                                                    <p>Payment/Refund, Upgrading and Downgrading information: Services requiring
                                                        payment, we request a valid credit card or other payment account information, which
                                                        will be used solely for processing payments.  Your financial information will not be
                                                        stored by us except the name and address of cardholder, the expiry date and the last 4
                                                        digits of the Credit Card number.  Subject to your prior consent and where necessary
                                                        for processing future payments, your financial information will be stored in an
                                                        encrypted form on secure servers of our reputed payment gateway service provider.</p>
                                                </li>
                                                <li>
                                                    <p>
                                                        For monthly plans you are billed 30 days in advance for the Service.  If you don’t
                                                        upgrade/downgrade/renew/cancel that account within 30 days, your account shall be
                                                        deemed to be inactive and will be closed after notifying you of the same.  The Service is
                                                        billed in advance on a monthly, quarterly or annual basis and is non-refundable.  There
                                                        will be no refunds for partial months of Service, upgrade/downgrade refunds or refunds
                                                        for months of unused with an open account.  An exception is
                                                        10-day money-back guarantee on new accounts.  All fees are exclusive of taxes, levies,
                                                        or duties imposed by taxing authorities, and you shall be responsible for payment of all
                                                        such taxes, levies or duties.
                                                    </p>
                                                </li>
                                                <li>
                                                    <p>
                                                        Termination: You agree that Grandco may terminate your member account and access
                                                        to the Services for reasons including, but not limited to, breaches or violations of the
                                                        Terms or Grandco’s Privacy Policy, a request by you to terminate the account,
                                                        discontinuance or material modification to the Services, unexpected technical issues or
                                                        problems, and requests by law enforcement, payment agencies or government bodies.
                                                    </p>
                                                </li>
                                            </ul>
                                        </div>


                                        <div className="unorder-list mb-30">
                                            <h6 className="fw-600 mb-15">How We Use Cookies and other Tracking Technologies</h6>
                                            <ul className="rest">
                                                <li>
                                                    <p>We use temporary and permanent cookies to enhance your experience of Grandco’s
                                                        Services.  Temporary cookies will be removed from your computer each time you close
                                                        your browser.  Grandco may also use other technologies such as beacons, tags, scripts,
                                                        pixel tags, e-tags, “flash cookies”.  We use these technologies to recognize you as a
                                                        customer, customize Grandco’s Services, advertising, and to help ensure that your
                                                        account security is not compromised, mitigate risk and fraud.   </p>
                                                </li>

                                            </ul>
                                        </div>

                                        <div className="unorder-list mb-30">
                                            <h6 className="fw-600 mb-15">How we share Personal Information and with Whom</h6>
                                            <ul className="rest">
                                                <li>
                                                    <p>Grandco will not sell any information to advertisers or other third parties.</p>
                                                </li>

                                                <li>
                                                    <p>Who we share information with: others working for Grandco.  Grandco uses other third
                                                        parties to help us provide, improve, protect and promote our Services.  These third
                                                        parties will access your information only to perform tasks on our behalf and in
                                                        compliance with this Privacy Policy.</p>
                                                </li>
                                                <li>
                                                    <p>When transacting with others, we may provide those parties with information about you
                                                        necessary to complete the transaction, such as your name, account MID, contact
                                                        details, shipping and billing address, or other information needed to promote the
                                                        reliability and security of the transaction.  If a transaction fails, or is later invalidated,
                                                        we may also provide details of the unsuccessful transaction.</p>
                                                </li>
                                                <li>
                                                    <p>Please note that merchants, users or contracts will have their own privacy policies,
                                                        Grandco is not responsible for their actions, including their information protection
                                                        practices.</p>
                                                </li>
                                                <li>
                                                    <p>Grandco will never disclose your credit card number or bank account number except
                                                        with your express permission or if we are required to do so to comply with payment
                                                        regulators, a subpoena or other legal process.</p>
                                                </li>
                                                <li>
                                                    <p>By using this site, you represent that you are at least the age of majority in your state or
                                                        province of residence.  Grandco does not knowingly collect Personal Information from
                                                        users who are under the age of majority in their respective state or province.</p>
                                                </li>

                                            </ul>
                                        </div>


                                        <div className="unorder-list mb-30">
                                            <h6 className="fw-600 mb-15">How we Protect Your Information</h6>
                                            <ul className="rest">
                                                <li>
                                                    <p>Grandco uses industry appropriate data collection, storage and processing practices
                                                        and security measures, as well as adhering to PCI DSS rules and regulations.</p>
                                                </li>

                                                <li>
                                                    <p>
                                                        Accessing or Changing your Personal Information: You can review and edit your
                                                        personal information at any time by logging into your account and reviewing your
                                                        account settings and profile.  You can also close your account through the Grandco
                                                        website.  If you close your account, we will mark your account in our database as
                                                        “closed”, but may retain personal information from your account for a certain period of
                                                        time and disclose it in a manner consistent with our practices under this Privacy Policy
                                                        for accounts that are not closed.  We may retain personal information from your
                                                        account to collect any fees owed, resolve disputes, troubleshoot problems, assist with
                                                        any investigations, prevent fraud, or take other actions as required or permitted by law.
                                                    </p>
                                                </li>
                                            </ul>
                                        </div>



                                        <div className="unorder-list mb-30">
                                            <h6 className="fw-600 mb-15">How You Can Contact Us About Privacy Questions</h6>
                                            <ul className="rest">
                                                <li>
                                                    <p>
                                                        If you have any questions or concerns regarding this Privacy Policy, please contact us at <Link href="mailto:info@grandco.ca" ><span className='text-decoration-underline cursor-pointer'> info@grandco.ca</span></Link> We shall respond to all inquiries within 30 days of receipt.
                                                    </p>
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

export default PrivacyPolicy;