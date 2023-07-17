import { useState } from "react";
import { SlideDown } from 'react-slidedown';
import 'react-slidedown/lib/slidedown.css';
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

                            <div className="accordion bord mt-50">
                                {
                                    accordions.map((accordion, idx) => (
                                        <div className={`item ${idx == 1 ? 'active' : ''}`} id={`accordion-${idx}`} key={idx} onClick={openAccordion}>
                                            <div className="title">
                                                <h6 className="fz-15">{accordion.title}</h6>
                                                <span className="ico"></span>
                                            </div>
                                            <SlideDown className="accordion-info active" closed={accordion.closed}>
                                                <p>{accordion.details}</p>
                                            </SlideDown>
                                        </div>
                                    ))
                                }
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default IntroPg