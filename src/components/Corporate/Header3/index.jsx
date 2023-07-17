import { useEffect } from 'react';
import parallaxie from '../../../common/parallaxie';

const Header = () => {
  useEffect(() => {
    new parallaxie('.pg-header-bus.bg-img.parallaxie');
  }, []);

  return (
    <header className="pg-header-bus bg-img parallaxie valign" data-background="img/background/servicebg.jpg" style={{ filter: 'contrast(90%)' }} data-overlay-dark="5">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-10 col-md-10">
            <div className="caption text-center">
              <h1 className="fz-50 fw-600">We Help Businesses Accept Payments And Grow Their Business</h1>
            </div>
          </div>
        </div>
      </div>
    </header>
  )
}

export default Header