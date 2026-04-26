import Slider from "../components/Slider"
import { FaArrowRightFromBracket } from "react-icons/fa6";
import { FaRegUser } from "react-icons/fa6";

export default function Hero() {
  return (
    <>
    <div className="relative w-full h-full">
        <div className="absolute z-5 w-full h-full gap-4 px-5 font-logoFont text-accent text-base flex flex-col justify-center gap-2 lg:w-3/4">
            <h1 className="text-xl sm:text-4xl  md:text-5xl lg:text-6xl font-bold ">Build Future Leaders with Excellence and Integrity
            </h1>
            <p className="hidden sm:block md:text-xl md:w-3/4 lg:w-3/4">At Golden Castle International School Oba, we provide a world class education that nurtures creativity, discipline and academic excellence</p>

            <div className="flex gap-4">
                <button type="button"  className="bg-button p-3 cursor-pointer flex items-center gap-2">
                    <div>Log in</div>
                    <FaRegUser />
                </button>
                <button type="button" className="bg-button  p-3 cursor-pointer flex items-center gap-2">
                    <div>Enroll Now</div> 
                    <FaArrowRightFromBracket />
                </button>
            </div>
        </div>
      
        <Slider/>
    </div>
</>
  )
}
