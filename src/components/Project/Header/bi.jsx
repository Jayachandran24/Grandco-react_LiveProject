import headerData from '../../../data/project/header.json';

const BiHeader = () => {
    return (
        <section className="works-header bg-img parallax ie d-flex align-items-end" style={{ backgroundImage: "url('https://images.pexels.com/photos/7688187/pexels-photo-7688187.jpeg?auto=compress&cs=tinysrgb&w=1600')" }} data-overlay-dark="6">
            <div className="container">
                <div className="row">
                    <div className="col-lg-7 col-md-9">
                        <div className="cont mb-40">
                            <h6>Streamline payments and improve cash flow</h6>
                            <h2>Billing and Invoicing</h2>
                        </div>
                    </div>
                </div>
                {/* <div className="row">
                    <div className="col-lg-3">
                        <div className="item mt-30">
                            <h6>Client</h6>
                            <p><a href="#0">{headerData.client}</a></p>
                        </div>
                    </div>
                    <div className="col-lg-3">
                        <div className="item mt-30">
                            <h6>Date</h6>
                            <p>{headerData.date}</p>
                        </div>
                    </div>
                    <div className="col-lg-3">
                        <div className="item mt-30">
                            <h6>Categories</h6>
                            <p>
                                {
                                    headerData.categories.map((category, idx) => (<a href="#0" key={idx}>{category}{idx !== headerData.categories.length - 1 ? <> ,</> : null}</a>))
                                }
                            </p>
                        </div>
                    </div>
                    <div className="col-lg-3">
                        <div className="item mt-30">
                            <h6>Tags</h6>
                            <p>
                                {
                                    headerData.tags.map((tags, idx) => (<a href="#0" key={idx}>{tags}{idx !== headerData.tags.length - 1 ? <> , </> : null}</a>))
                                }
                            </p>
                        </div>
                    </div>
                </div> */}
            </div>
        </section>
    )
}

export default BiHeader