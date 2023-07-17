import Link from 'next/link';

const BiNextPrev = () => {
    return (
        <section className="nex-prv">
            <div className="prv">
                <div className="img bg-img" style={{ backgroundImage: "url('img/portfolio/project2/bg.jpg')" }}>
                    <div className="text-center">
                        <h5>
                            <Link href="/payment-gateway"><a>Mobile terminals</a></Link>
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
                            <Link href="/vision-source-members"><a>Newland Payment Terminal</a></Link>
                        </h5>
                        <span className="sub-title">Next Project</span>
                    </div>
                    <div className="overly gr-purple-red-bg"></div>
                </div>
            </div>
        </section>
    )
}

export default BiNextPrev