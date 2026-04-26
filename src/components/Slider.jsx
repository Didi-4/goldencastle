import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";



const  slideImage1 = "https://res.cloudinary.com/dadane1xo/image/upload/q_auto/f_auto/v1777222515/imageslider3_bd8xdu.png";
const  slideImage2 =  "https://res.cloudinary.com/dadane1xo/image/upload/q_auto/f_auto/v1777222145/imageslider1_ew3bwz.png";
const  slideImage3 =  "https://res.cloudinary.com/dadane1xo/image/upload/q_auto/f_auto/v1777222010/imageslider2_s6guyg.png";





export default function Slider() {
  return (
    <Carousel  autoPlay infiniteLoop={true} showThumbs={false} showStatus={false} interval={3000} showArrows={false}>
      <div className="after:absolute after:inset-0 after:bg-black/50">
        <img src={slideImage1} alt="Slide 1" />
      </div>
      <div className="after:absolute after:inset-0 after:bg-black/50">
        <img src={slideImage2} alt="Slide 2" />
      </div>
      <div className="after:absolute after:inset-0 after:bg-black/50">
        <img src={slideImage3} alt="Slide 3" />
      </div>
    </Carousel>
  )
}
