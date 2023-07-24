import { useState } from "react";
// import { SlideDown } from 'react-slidedown';
// import 'react-slidedown/lib/slidedown.css';
import accordionsData from '../../../data/project/bi-accordion.json';

const IntroBi = () => {
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
                            <h4>Billing and Invoicing Solutions</h4>
                        </div>
                    </div>
                    <div className="col-lg-8 offset-lg-1 col-md-8">
                        <div className="text js-scroll__content">
                            <p className="fz-18 fw-300">
                                Drive
                                efficiencies and save money with smart payment collection
                            </p>

                            <div class="accordion accordion-flush mt-3" id="accordionFlushExample">
                                <div class="accordion-item">
                                    <h2 class="accordion-header" id="flush-headingOne">
                                        <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseOne" aria-expanded="false" aria-controls="flush-collapseOne">
                                        Billing & Invoicing
                                        </button>
                                    </h2>
                                    <div id="flush-collapseOne" class="accordion-collapse collapse" aria-labelledby="flush-headingOne" data-bs-parent="#accordionFlushExample">
                                        <div class="accordion-body">
                                        <p className="fz-18 fw-300">Login to Converge from anywhere to create a quote or an invoice featuring your brand. Simply enter the amount due, associate it with a customer’s prole or work order, and include item details, taxes, due date, or other instructions. A PDF of the invoice is created and emailed to recipients. A simple click takes them to a hosted payment page featuring your brand where they securely enter payment details. Receipts are automatically sent, and invoice status is tracked through the Converge dashboard. Capture an initial payment and securely save details in the Converge Customer Manager for future invoices.   </p>                                       </div>
                                    </div>
                                </div>
                                <div class="accordion-item">
                                    <h2 class="accordion-header" id="flush-headingTwo">
                                        <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseTwo" aria-expanded="false" aria-controls="flush-collapseTwo">
                                        Pay now button
                                        </button>
                                    </h2>
                                    <div id="flush-collapseTwo" class="accordion-collapse collapse" aria-labelledby="flush-headingTwo" data-bs-parent="#accordionFlushExample">
                                        <div class="accordion-body">
                                        <p className="fz-18 fw-300">Easily add a payment button or link to your website, social sites, or emails to make payments quick and easy for your customers. Use it for collecting invoice payments, taking deposits, or requesting donations via a hosted payment page featuring your brand. Customize the button name and colors to match your brand</p>
                                        
                                        </div>
                                    </div>
                                </div>
                                <div class="accordion-item">
                                    <h2 class="accordion-header" id="flush-headingThree">
                                        <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseThree" aria-expanded="false" aria-controls="flush-collapseThree">
                                        Recurring and batch payments
                                        </button>
                                    </h2>
                                    <div id="flush-collapseThree" class="accordion-collapse collapse" aria-labelledby="flush-headingThree" data-bs-parent="#accordionFlushExample">
                                        <div class="accordion-body">
                                        <p className="fz-18 fw-300">
                                            Securely store customer card details for automated future payments. Dene schedule and amount for daily, weekly, monthly, or periodic billing. Upload a CSV le of transactions for batch processing.</p></div>
                                    </div>
                                </div>
                                <div class="accordion-item">
                                    <h2 class="accordion-header" id="flush-headingFour">
                                        <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseFour" aria-expanded="false" aria-controls="flush-collapseFour">
                                        Credit card surcharge
                                        </button>
                                    </h2>
                                    <div id="flush-collapseFour" class="accordion-collapse collapse" aria-labelledby="flush-headingFour" data-bs-parent="#accordionFlushExample">
                                        <div class="accordion-body">
                                        <p className="fz-18 fw-300">Pass acceptance costs to customers who choose to make payments with a credit card. Converge ensures compliance with industry rules and allows customers to avoid the fee by switching their payment method.</p></div>
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

export default IntroBi