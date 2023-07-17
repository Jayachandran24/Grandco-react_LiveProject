import { Link } from "react-router-dom"

const IstNextPrev = () => {
    return (
        <section className="nex-prv">
            <div className="prv">
                <div className="img bg-img" style={{ backgroundImage: "url('img/portfolio/project2/bg.jpg')" }}>
                    <div className="text-center">
                        <h5>
                            <Link to="/IngenicoSmartTerminals"><a>Ingenico Smart Terminals</a></Link>
                        </h5>
                        <span className="sub-title">Prev Project</span>
                    </div>
                    <div className="overly gr-purple-red-bg"></div>
                </div>
            </div>
            <div className="nxt">
                <div className="img bg-img" style={{ backgroundImage: "url('img/portfolio/project2/bg1.jpg')" }}>
                    <div className="text-center">
                        <h5>
                            <Link to="/PayontConnectedCommerce"><a>Poynt for connected commerce</a></Link>
                        </h5>
                        <span className="sub-title">Next Project</span>
                    </div>
                    <div className="overly gr-purple-red-bg"></div>
                </div>
            </div>
        </section>
    )
}

export default IstNextPrev