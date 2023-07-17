import { useState } from "react";
import { SlideDown } from 'react-slidedown';
import 'react-slidedown/lib/slidedown.css';
// import accordionsData from '../../../data/project/pcc-accordion.json';
import accordionsData from '../../../data/project/tr-accordion.json';

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
                            <h4>An innovative point-of-sale that
                                exceeds expectations</h4>
                        </div>
                    </div>
                    <div className="col-lg-8 offset-lg-1 col-md-8">
                        <div className="text js-scroll__content">
                            <p className="fz-18 fw-300">
                                The future of
                                payment acceptance appears to be a lot closer than you think. Introducing
                                talech Register, the latest Android offering in our hardware lineup. Allow
                                your customers to comfortably take payments with a seamless, all-in-one
                                design that looks great on the counter and makes the process of checking
                                out much more efficient. With talech Register, all Restaurant, Retail and
                                Service-based talech customers can offer a complete solution that is
                                aesthetically pleasing and drives the core talech payment functionality that
                                has become standard.
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
                                                {accordion.details.map((detail, index) => (
                                                    <p key={index}>{detail}</p>
                                                ))}
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