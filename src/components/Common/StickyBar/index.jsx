import { useEffect } from 'react';
import Link from 'next/link';

const StickyBar = () => {

  useEffect(() => {
    const sticky_bar = document.querySelector('.sticky-bar');
    if (window.pageYOffset > 600) {
      sticky_bar.classList.add("active");
    } else {
      sticky_bar.classList.remove("active");
    }

    window.addEventListener("scroll", () => {
      if (window.pageYOffset > 600) {
        sticky_bar.classList.add("active");
      } else {
        sticky_bar.classList.remove("active");
      }
    });
  }, []);

  return (
    <div className="sticky-bar">
      <div className="left-bar">
        <Link href="/contact">
          <a className="contact-butn">
            <span>Contact Us</span>
            <span className="icon ml-10">
              <i className="far fa-comment"></i>
            </span>
          </a>
        </Link>
      </div>
      <div className="right-bar">
        <div className="social-text fz-13">
          <span className="text">Follow Us</span>
          <a href="https://www.facebook.com/Grandco-101187061352022/" target='_blank' rel="noreferrer noopener">Fa.</a>
          <i>/</i>
          <a href="https://twitter.com/Grandco5" target='_blank' rel="noreferrer noopener">Tw.</a>
          <i>/</i>
          <a href="https://www.instagram.com/grandco_1/" target='_blank' rel="noreferrer noopener">In.</a>
        </div>
      </div>
    </div>
  )
}

export default StickyBar