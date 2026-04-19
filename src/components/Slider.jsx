import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";



import slideImage1 from '../assets/imageslider1.png';
import slideImage2 from '../assets/imageslider2.png';
import slideImage3 from '../assets/imageslider3.png';





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
