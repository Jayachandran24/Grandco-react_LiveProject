import descriptionData from '../../../data/project/bi-description.json';

const BiDescription = () => {
    return (
        // <section className="intro-section section-padding pt-0">
        //     <div className="container">
        //         <div className="row">
        //             <div className="col-lg-3 col-md-4">
        //                 <div className="htit">
        //                     <h4>Billing & Invoicing</h4>
        //                 </div>
        //             </div>
        //             <div className="col-lg-8 offset-lg-1 col-md-8 mb-30">
        //                 <div className="text">
        //                     <p className="fz-18 fw-300">{descriptionData.description}</p>
        //                 </div>
        //             </div>
        //         </div>
        //     </div>
        //     <div className="features-process position-re mt-50">
        //         <div className="container">
        //             <div className="row">
        //                 {
        //                     descriptionData.features.map((feature, idx) => (
        //                         <div className="col-lg-4" key={idx}>
        //                             <div className="item flex">
        //                                 <div className="fz-40 mr-30 lf-culm">
        //                                     <span className="numb">{feature.numb}</span>
        //                                 </div>
        //                                 <div className="cont">
        //                                     <h6 className="mb-10 fw-600">{feature.title}</h6>
        //                                     <p>{feature.details}</p>
        //                                 </div>
        //                             </div>
        //                         </div>
        //                     ))
        //                 }
        //             </div>
        //         </div>
        //         <div className="circle-pattern bottom right"></div>
        //     </div>
        // </section>


        <section className="intro-section section-padding pt-0">
        <div className="container">
            <div className="row">
                <div className="col-lg col-md-4">
                    <div className="htit">
                        <h4>Countertop</h4>
                    </div>
                </div>
                <div className="col-lg offset-lgcol mb-30">
                    <div className="text">
                        <p className="fz-18 fw-300">{descriptionData.description}</p>
                    </div>
                </div>
            </div>
        </div>
        <div className="features-process position-re mt-50">
            <div className="container">
            <div className="row mb-30">
                        {
                            descriptionData.features.map((feature, idx) => (
                                <div className="col-lg" key={idx}>
                                    <div className="item flex" style={{ justifyContent: 'space-evenly', width: '100%' }}>
                                        <div className="fz-40 mr-30 lf-culm" style={{ width: '50%' }}>

                                            <h5 className=" mb-10 fw-600">{feature.title}</h5>
                                            {/* <span className="numb">{feature.numb}</span> */}
                                        </div>
                                        <div className="cont" style={{ width: '100%' }}>
                                            <p className='fz-18'>{feature.details}</p>

                                            <div className='row'>
                                                {
                                                    descriptionData.featureicon.map((featureicon, idx) => (
                                                        <div className="col-sm-4 mt-20 text-center" key={idx}>
                                                            <img src={featureicon.icon} alt="icon" style={{ width: '50px', marginBottom: '10px' }} />
                                                            <p className='text-black'>{featureicon.icondes}</p>
                                                            <p>{featureicon.lookingfor}</p>
                                                        </div>

                                                    ))
                                                }
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ))

                        }

                    </div>
                </div>
                </div>
                </section>
    )
}

export default BiDescription