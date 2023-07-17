import { useState } from "react";
import { SlideDown } from 'react-slidedown';
import 'react-slidedown/lib/slidedown.css';
import accordionsData from '../../../data/project/pcc-accordion.json';

const IntroIst = () => {
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
                            <h4>Innovation Meets Convenience</h4>
                        </div>
                    </div>
                    <div className="col-lg-8 offset-lg-1 col-md-8">
                        <div className="text js-scroll__content">
                            <p className="fz-18 fw-300">
                                TETRA terminals give you the ability to accept payments at
                                the counter or on-the-go.
                            </p>
                            <p className="fz-18 fw-300">Satisfy the most demanding customer payment expectations with both countertop and wireless
                                solutions. The TETRA devices support a variety of payment options while meeting the most up-to-date
                                security requirements.</p>

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

export default IntroIst