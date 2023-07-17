// import descriptionData from '../../../data/project/ist-description.json';
import descriptionData from '../../../data/project/tr-description.json';

const IstDescription = () => {
    return (
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
                                                        <div className="col-sm-3 mt-20 text-center" key={idx}>
                                                            <p className='text-black mb-2'>{featureicon.title}</p>
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
                    <div className="row mb-30">
                        {
                            descriptionData.Desk1500.map((Desk1500, idx) => (
                                <div className="col-lg" key={idx}>
                                    <div className="item flex" style={{ justifyContent: 'space-evenly', width: '100%' }}>
                                        <div className="fz-40 mr-30 lf-culm" style={{ width: '50%' }}>

                                            <h5 className=" mb-10 fw-600">{Desk1500.title}</h5>
                                            {/* <span className="numb">{feature.numb}</span> */}
                                        </div>
                                        <div className="cont" style={{ width: '100%' }}>
                                            <p className='fz-18'>{Desk1500.details}</p>

                                            <div className='row'>
                                                {
                                                    descriptionData.Desk1500icon.map((Desk1500icon, idx) => (
                                                        <div className="col-sm-3 mt-20 text-center" key={idx}>
                                                            <p className='text-black mb-2'>{Desk1500icon.title}</p>
                                                            <img src={Desk1500icon.icon} alt="icon" style={{ width: '50px', marginBottom: '10px' }} />
                                                            <p className='text-black'>{Desk1500icon.icondes}</p>
                                                            <p>{Desk1500icon.lookingfor}</p>
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
                    <div className="row mb-30">

                        {
                            descriptionData.move500.map((move500, idx) => (
                                <div className="col-lg" key={idx}>
                                    <div className="item flex" style={{ justifyContent: 'space-evenly', width: '100%' }}>
                                        <div className="fz-40 mr-30 lf-culm" style={{ width: '50%' }}>

                                            <h5 className=" mb-10 fw-600">{move500.title}</h5>
                                            {/* <span className="numb">{feature.numb}</span> */}
                                        </div>
                                        <div className="cont" style={{ width: '100%' }}>
                                            <p className='fz-18'>{move500.details}</p>

                                            <div className='row'>
                                                {
                                                    descriptionData.move5000icon.map((move5000icon, idx) => (
                                                        <div className="col-sm-3 mt-20 text-center" key={idx}>
                                                            <p className='text-black mb-2'>{move5000icon.title}</p>
                                                            <img src={move5000icon.icon} alt="icon" style={{ width: '50px', marginBottom: '10px' }} />
                                                            <p className='text-black'>{move5000icon.icondes}</p>
                                                            <p>{move5000icon.lookingfor}</p>
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
                <div className="circle-pattern bottom right"></div>
            </div>
        </section>
    )
}

export default IstDescription