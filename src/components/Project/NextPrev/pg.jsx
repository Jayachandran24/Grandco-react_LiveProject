import Link from 'next/link';

const PgNextPrev = () => {
    return (
        <section className="nex-prv">
            <div className="prv">
                <div className="img bg-img" style={{ backgroundImage: "url('img/portfolio/project2/bg.jpg')" }}>
                    <div className="text-center">
                        <h5>
                            <Link href="/poynt-for-connected-commerce"><a>Poynt for Connected Commerce</a></Link>
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
                            <Link href="/billing-invoice"><a>Billing and Invoicing</a></Link>
                        </h5>
                        <span className="sub-title">Next Project</span>
                    </div>
                    <div className="overly gr-purple-red-bg"></div>
                </div>
            </div>
        </section>
    )
}

export default PgNextPrev