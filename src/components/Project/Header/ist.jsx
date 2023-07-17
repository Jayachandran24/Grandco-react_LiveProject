import headerData from '../../../data/project/header.json';

const IST = () => {
    return (
        <section className="works-header bg-img parallaxie d-flex align-items-end" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1556742077-0a6b6a4a4ac4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80')" }} data-overlay-dark="6">
            <div className="container">
                <div className="row">
                    <div className="col-lg-7 col-md-9">
                        <div className="cont mb-40">
                            <h6>Tetra Series</h6>
                            <h2>Ingenico Smart Terminals</h2>
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

export default IST