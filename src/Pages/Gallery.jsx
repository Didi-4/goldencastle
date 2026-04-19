import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

import Header from "../layout/Header"
import Footer from '../layout/Footer';

import Image1 from '../assets/IMG-20240309-WA0024.jpg';
import Image2 from '../assets/IMG-20240309-WA0025.jpg';
import Image3 from '../assets/IMG-20240309-WA0026.jpg';
import Image4 from '../assets/IMG-20240309-WA0029.jpg';
import Image5 from '../assets/IMG-20240309-WA0040.jpg';
import Image6 from '../assets/IMG-20240309-WA0050.jpg';
import Image7 from '../assets/IMG-20240309-WA0052.jpg';
import Image8 from '../assets/IMG-20240311-WA0021.jpg';
import Image9 from '../assets/IMG-20240309-WA0048.jpg';
// import Image10 from '../assets/IMG-20250327-WA0004.jpg';
// import Image11 from '../assets/IMG-20250327-WA0005.jpg';
// import Image12 from '../assets/IMG-20250327-WA0006.jpg';
// import Image13 from '../assets/IMG-20250327-WA0007.jpg';

export default function Gallery() {
  return (
    <>
        <Header/>
         <Carousel width="100%" autoPlay infiniteLoop={true} showThumbs={true} showStatus={true} interval={3000} >
              <div className="after:absolute after:inset-0 after:bg-black/50">
                      <img src={Image1} alt="Slide 1" />
              </div>

              <div className="after:absolute after:inset-0 after:bg-black/50">
                      <img src={Image2} alt="Slide 1" />
              </div>

              <div className="after:absolute after:inset-0 after:bg-black/50">
                      <img src={Image3} alt="Slide 1" />
              </div>

              <div className="after:absolute after:inset-0 after:bg-black/50">
                      <img src={Image4} alt="Slide 1" />
              </div>

              <div className="after:absolute after:inset-0 after:bg-black/50">
                      <img src={Image5} alt="Slide 1" />
              </div>

              <div className="after:absolute after:inset-0 after:bg-black/50">
                      <img src={Image6} alt="Slide 1" />
              </div>

              <div className="after:absolute after:inset-0 after:bg-black/50">
                      <img src={Image7} alt="Slide 1" />
              </div>

              <div className="after:absolute after:inset-0 after:bg-black/50">
                      <img src={Image8} alt="Slide 1" />
              </div>

              <div className="after:absolute after:inset-0 after:bg-black/50">
                      <img src={Image9} alt="Slide 1" />
              </div>

               {/* <div className="after:absolute after:inset-0 after:bg-black/50">
                      <img src={Image10} alt="Slide 1" />
              </div>

               <div className="after:absolute after:inset-0 after:bg-black/50">
                      <img src={Image11} alt="Slide 1" />
              </div>

               <div className="after:absolute after:inset-0 after:bg-black/50">
                      <img src={Image12} alt="Slide 1" />
              </div>
              <div className="after:absolute after:inset-0 after:bg-black/50">
                      <img src={Image13} alt="Slide 1" />
              </div> */}

         </Carousel>
         <Footer/>
      </>
  )
}
