import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

import Header from "../layout/Header"
import Footer from '../layout/Footer';

const Image1 = "https://res.cloudinary.com/dadane1xo/image/upload/q_auto/f_auto/v1777225411/IMG-20240311-WA0021_v5qowf.jpg";
const Image2 = "https://res.cloudinary.com/dadane1xo/image/upload/q_auto/f_auto/v1777225378/IMG-20240309-WA0029_hi7lqj.jpg";
const Image3 = "https://res.cloudinary.com/dadane1xo/image/upload/q_auto/f_auto/v1777225378/IMG-20240309-WA0050_golcro.jpg";
const Image4 = "https://res.cloudinary.com/dadane1xo/image/upload/q_auto/f_auto/v1777225377/IMG-20240309-WA0052_se4ma7.jpg";
const Image5 = "https://res.cloudinary.com/dadane1xo/image/upload/q_auto/f_auto/v1777225375/IMG-20240309-WA0048_ovu8cu.jpg";
const Image6 = "https://res.cloudinary.com/dadane1xo/image/upload/q_auto/f_auto/v1777225362/IMG-20240309-WA0040_etjxdf.jpg";
const Image7 = "https://res.cloudinary.com/dadane1xo/image/upload/q_auto/f_auto/v1777225359/IMG-20240309-WA0041_racgny.jpg";
const Image8 = "https://res.cloudinary.com/dadane1xo/image/upload/q_auto/f_auto/v1777225333/IMG-20240309-WA0025_bg7koo.jpg";
const Image9 = "https://res.cloudinary.com/dadane1xo/image/upload/q_auto/f_auto/v1777225354/IMG-20240309-WA0026_h6ss1i.jpg";
// import Image10 from '../assets/IMG-20250327-WA0004.jpg';
// import Image11 from '../assets/IMG-20250327-WA0005.jpg';
// import Image12 from '../assets/IMG-20250327-WA0006.jpg';
// import Image13 from '../assets/IMG-20250327-WA0007.jpg';

export default function Gallery() {
  return (
    <>
        <Header/>
         <Carousel  autoPlay infiniteLoop={true} showThumbs={true} showStatus={true} interval={3000} className="p-10 bg-background" >
              <div className="after:absolute after:inset-0 after:bg-black/50">
                      <img loading="lazy" width="100%" height="100%" src={Image1} alt="Slide 1" />
              </div>

              <div className="after:absolute after:inset-0 after:bg-black/50">
                      <img loading="lazy" width="100%" height="100%" src={Image2} alt="Slide 1" />
              </div>

              <div className="after:absolute after:inset-0 after:bg-black/50">
                      <img loading="lazy" width="100%" height="100%"  src={Image3} alt="Slide 1" />
              </div>

              <div className="after:absolute after:inset-0 after:bg-black/50">
                      <img loading="lazy" width="100%" height="100%" src={Image4} alt="Slide 1" />
              </div>

              <div className="after:absolute after:inset-0 after:bg-black/50">
                      <img loading="lazy" width="100%" height="100%" src={Image5} alt="Slide 1" />
              </div>

              <div className="after:absolute after:inset-0 after:bg-black/50">
                      <img loading="lazy" width="100%" height="100%" src={Image6} alt="Slide 1" />
              </div>

              <div className="after:absolute after:inset-0 after:bg-black/50">
                      <img loading="lazy" width="100%" height="100%" src={Image7} alt="Slide 1" />
              </div>

              <div className="after:absolute after:inset-0 after:bg-black/50">
                      <img loading="lazy" width="100%" height="100%" src={Image8} alt="Slide 1" />
              </div>

              <div className="after:absolute after:inset-0 after:bg-black/50">
                      <img loading="lazy" width="100%" height="100%" src={Image9} alt="Slide 1" />
              </div>

              

         </Carousel>
         <Footer/>
      </>
  )
}
