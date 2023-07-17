import React from 'react';
import { Helmet } from 'react-helmet';

import "../src/styles/globals.css"
import ProgressScroll from "../src/components/Progress-Scroll/index";
import Home from '../src/pages/home/index'
import Products from '../src/pages/products/index';
import Affiliates from './pages/Affiliates/index';
import Services from '../src/pages/services/index';
import Blog from '../src/pages/blog/index';
import Contact from '../src/pages/contact/index';
import IngenicoSmartTerminals from './pages/ingenico-smart-terminals';
import TalechRegistor from './pages/talech-register';
import PayontConnectedCommerce from './pages/poynt-for-connected-commerce';
import BillingInvoice from './pages/billing-invoice';
import PaymentGateway from './pages/payment-gateway';
import NewlandPaymentTerminal from './pages/vision-source-members';
import PrivacyPolicy from './pages/privacy-policy';
import LegalNotice from './pages/legal-notice';
import {Routes, Route } from "react-router-dom";
// import "../public/js/bootstrap.bundle.min.js"
// import "../public/js/wow.min.js"
// import "../public/js/splitting.min.js"
// import "../public/js/simpleParallax.min.js"
// import "../public/js/isotope.pkgd.min.js"
// import "../public/js/parallax.min.js"
// import "../public/js/main.js"

function App({ Component, pageProps }) {
  return (
    
    <div className="App">
      {/* <Component {...pageProps} /> */}
      <ProgressScroll />
        <Helmet>
          <script src="/js/bootstrap.bundle.min.js" type="text/javascript" />
          <script src="/js/wow.min.js" type="text/javascript" />
          {/* <script src="/js/splitting.min.js" type="text/javascript" /> */}
          {/* <script src="/js/simpleParallax.min.js" type="text/javascript" /> */}
          <script src="/js/isotope.pkgd.min.js" type="text/javascript" />
          {/* <script src="/js/parallax.min.js" type="text/javascript" /> */}
          <script src="/js/main.js" type="text/javascript" />
          
        </Helmet>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path='/IngenicoSmartTerminals' element={<IngenicoSmartTerminals/>}/>
        <Route path='/TalechRegistor' element={<TalechRegistor/>}/>
        <Route path='/PayontConnectedCommerce' element={<PayontConnectedCommerce/>}/>
        <Route path='/BillingInvoice' element={<BillingInvoice/>}/>
        <Route path='/PaymentGateway' element={<PaymentGateway/>}/>
        <Route path='/NewlandPaymentTerminal' element={<NewlandPaymentTerminal/>}/>
        <Route path="/Products" element={<Products/>} />
        <Route path="/Services" element={<Services/>} /> 
        <Route path="/Affiliates" element={<Affiliates/>} /> 
        <Route path="/Contact" element={<Contact/>} />
        <Route path="/Blog" element={<Blog/>} /> 
        <Route path='/PrivacyPolicy' element={<PrivacyPolicy/>}/>
        <Route path='/LegalNotice' element={<LegalNotice/>}/>
      </Routes>
    </div>
  );
}

export default App;
