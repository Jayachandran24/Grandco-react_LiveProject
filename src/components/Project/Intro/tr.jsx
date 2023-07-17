import { useState } from "react";
// import { SlideDown } from 'react-slidedown';
// import 'react-slidedown/lib/slidedown.css';
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


                            <div class="accordion accordion-flush" id="accordionFlushExample title">
                                <div class="accordion-item">
                                    <h2 class="accordion-header" id="flush-headingOne">
                                        <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseOne" aria-expanded="false" aria-controls="flush-collapseOne">
                                            Features Include
                                        </button>
                                    </h2>
                                    <div id="flush-collapseOne" class="accordion-collapse collapse" aria-labelledby="flush-headingOne" data-bs-parent="#accordionFlushExample">
                                        <div class="accordion-body">
                                            <p>
                                            • 15.6” merchant-facing display, <br></br>
                                            • 10” optional touch-enabled customer display,<br></br>
                                            • Includes supported Lane3000 payment device,<br></br>
                                            • Complete suite of peripherals from Star Micronics,<br></br>
                                            • Fully branded with the talech logo,<br></br>
                                            • Supports talech Credit Card Surcharge*,<br></br>
                                            • Seamless out-of-box experience <br></br>
                                            </p>                                   </div>
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

export default IntroIst