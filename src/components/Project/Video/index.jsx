import { useState, useEffect } from 'react';
import ModalVideo from "react-modal-video";
import "react-modal-video/css/modal-video.css";
import parallaxie from '../../../common/parallaxie';

const Video = () => {
  const [isOpen, setOpen] = useState(false);

  useEffect(() => {
    new parallaxie('.video-wrapper.bg-img.parallaxie');
  }, []);

  const openVideo = (e) => {
    e.preventDefault();
    setOpen(true);
  }

  return (
    <section>
      <div className="container-fluid">
        <div className="video-wrapper section-padding bg-img parallaxie valign" data-background="https://plus.unsplash.com/premium_photo-1681748777410-8439a0b41b22?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2071&q=80" data-overlay-dark="4">
          <div className="full-width text-center">
            <a className="vid" href="https://www.youtube.com/watch?v=Iqr3XIhSnUQ" onClick={openVideo}>
              <div className="vid-butn">
                <span className="icon">
                  <i className="fas fa-play"></i>
                </span>
              </div>
            </a>
          </div>
        </div>
      </div>
      {
        typeof window !== "undefined" &&
        (
          <ModalVideo
            channel="youtube"
            autoplay
            isOpen={isOpen}
            videoId="Iqr3XIhSnUQ"
            onClose={() => setOpen(false)}
          />
        )
      }
    </section>
  )
}

export default Video