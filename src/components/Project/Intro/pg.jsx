import { useState } from "react";
// import { SlideDown } from 'react-slidedown';
// import 'react-slidedown/lib/slidedown.css';
import accordionsData from '../../../data/project/pg-accordion.json';

const IntroPg = () => {
    const [accordions, setAccordions] = useState(accordionsData);

    const openAccordion = (e) => {
        document.querySelectorAll('.accordion.bord .item').forEach(accordion => accordion.classList.remove('active'))

        let item = e.target.closest('.item');
        item.classList.add('active');

        let newAccordions = accordions.map((accordion, idx) => {
            if (item.id.split('-')[1] == idx) accordion.closed = false;
            else accordion.closed = true;

            return accordion;
        });

        setAccordions(newAccordions);
    }

    return (
        <section className="section-padding">
            <div className="container">
                <div className="row">
                    <div className="col-lg-3 col-md-4">
                        <div className="htit">
                            <h4>Payment Gateway</h4>
                        </div>
                    </div>
                    <div className="col-lg-8 offset-lg-1 col-md-8">
                        <div className="text js-scroll__content">
                            <p className="fz-18 fw-300">
                                Converge® is a hosted solution that allows
                                businesses of all types to accept payments
                                quickly and securely wherever they take place.
                                Accept everything from debit and credit cards to
                                PayPal, electronic checks, and digital wallets.
                            </p>
                            <p className="fz-18 fw-300">
                                Manage all payment activity easily and securely
                                from anywhere with any browser connected device.
                                Accept payments using Converge’s friendly portal
                                or integrate with your websites, accounting and
                                CRM systems via easy-to-use developer tools.
                            </p>

                            <div class="accordion accordion-flush" id="accordionFlushExample">
                                <div class="accordion-item">
                                    <h2 class="accordion-header" id="flush-headingOne">
                                        <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseOne" aria-expanded="false" aria-controls="flush-collapseOne">
                                        In-Person
                                        </button>
                                    </h2>
                                    <div id="flush-collapseOne" class="accordion-collapse collapse" aria-labelledby="flush-headingOne" data-bs-parent="#accordionFlushExample">
                                        <div class="accordion-body">
                                        Connect an EMV payment device to take payments via swipe, dip or tap.                                           </div>
                                    </div>
                                </div>
                                <div class="accordion-item">
                                    <h2 class="accordion-header" id="flush-headingTwo">
                                        <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseTwo" aria-expanded="false" aria-controls="flush-collapseTwo">
                                        Online
                                        </button>
                                    </h2>
                                    <div id="flush-collapseTwo" class="accordion-collapse collapse" aria-labelledby="flush-headingTwo" data-bs-parent="#accordionFlushExample">
                                        <div class="accordion-body">
                                        Accept payments or donations on your website via a buy button, hosted payment page or integrated shopping cart.
                                        
                                        </div>
                                    </div>
                                </div>
                                <div class="accordion-item">
                                    <h2 class="accordion-header" id="flush-headingThree">
                                        <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseThree" aria-expanded="false" aria-controls="flush-collapseThree">
                                        In an App
                                        </button>
                                    </h2>
                                    <div id="flush-collapseThree" class="accordion-collapse collapse" aria-labelledby="flush-headingThree" data-bs-parent="#accordionFlushExample">
                                        <div class="accordion-body">Support payments made through digital wallets like PayPal and Apple Pay on your website or mobile app.</div>
                                    </div>
                                </div>
                                <div class="accordion-item">
                                    <h2 class="accordion-header" id="flush-headingFour">
                                        <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseFour" aria-expanded="false" aria-controls="flush-collapseFour">
                                        Over the Phone
                                        </button>
                                    </h2>
                                    <div id="flush-collapseFour" class="accordion-collapse collapse" aria-labelledby="flush-headingFour" data-bs-parent="#accordionFlushExample">
                                        <div class="accordion-body">Use any browser-connected device to enter card details for mail and phone orders.</div>
                                    </div>
                                </div>
                                <div class="accordion-item">
                                    <h2 class="accordion-header" id="flush-headingFive">
                                        <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseFive" aria-expanded="false" aria-controls="flush-collapseFive">
                                        In the Office
                                        </button>
                                    </h2>
                                    <div id="flush-collapseFive" class="accordion-collapse collapse" aria-labelledby="flush-headingFive" data-bs-parent="#accordionFlushExample">
                                        <div class="accordion-body">Manage customers, set up recurring payments, and email electronic invoices.</div>
                                    </div>
                                </div>
                            </div> 
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default IntroPg