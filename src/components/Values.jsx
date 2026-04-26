import { FaStar } from "react-icons/fa";
import { FaBalanceScale } from "react-icons/fa";
import { FaClipboardCheck } from "react-icons/fa";
import { MdLightbulb } from "react-icons/md";
import { FaHandshake } from "react-icons/fa";
import { FaQuoteLeft, FaQuoteRight } from "react-icons/fa";

import { NavLink } from "react-router-dom";
import About from "../Pages/About";


const  aboutImage = "https://res.cloudinary.com/dadane1xo/image/upload/q_auto/f_auto/v1777222544/shoolfrontgate_x1klhb.png";

export default function Values() {
  return (
    <>

        <div className="relative w-full p-10 bg-background">
            <div className="text-3xl text-secondary font-bold flex justify-center mb-4">
                <h1>Our Core Values</h1>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-8">
                    <div className="p-3 bg-secondary  shadow-lg shadow-black/50 text-primary font-bold flex flex-col items-center gap-2">
                        <FaStar className="text-4xl text-primary"/>
                        <h1 className="p-3 bg-secondary text-primary font-bold">Excellence</h1>
                    </div>
                    <div className="p-3 bg-secondary shadow-lg shadow-black/50 text-primary font-bold flex flex-col items-center gap-2">
                        <FaBalanceScale className="text-4xl text-primary"/>
                        <h1 className="p-3 bg-secondary text-primary font-bold">Integrity</h1>
                    </div>
                    <div className="p-3 bg-secondary shadow-lg shadow-black/50 text-primary font-bold flex flex-col items-center gap-2">
                        <FaClipboardCheck className="text-4xl text-primary"/>
                        <h1 className="p-3 bg-secondary text-primary font-bold">Discipline</h1>
                    </div>
                    <div className="p-3 bg-secondary shadow-lg shadow-black/50 text-primary font-bold flex flex-col items-center gap-2">
                        <MdLightbulb className="text-4xl text-primary"/>
                        <h1 className="p-3 bg-secondary text-primary font-bold">Innovation</h1>
                    </div>
                    <div className="p-3 bg-secondary shadow-lg shadow-black/50 text-primary font-bold flex flex-col items-center gap-2">
                        <FaHandshake className="text-4xl text-primary"/>
                        <h1 className="p-3 bg-secondary text-primary font-bold">Respect</h1>
                    </div>  
            </div>

            <div className=" grid grid-cols-1 md:grid-cols-2 gap-4 mt-8 items-center text-xl">
                <div className="h-full w-full">
                    <img src={aboutImage} alt="School Front Gate" className="w-full h-full object-cover"/>
                </div>
                <div className="space-y-5 text-secondary text-lg">
                   
                    <p className="first-letter:text-5xl">At Golden Castle International School, we are committed to nurturing future leaders through quality education, strong moral values, and global learning standards. Located in the heart of Oba, our school provides a safe, supportive, and intellectually stimulating environment where every child is empowered to excel.</p>

                    <p>We combine academic excellence with character development, ensuring our students grow into confident, responsible, and innovative individuals ready to thrive in a competitive world.</p>
                
                    <button className="px-4 py-2 bg-button text-secondary font-bold rounded hover:bg-secondary hover:text-primary transition duration-300 cursor-pointer"><NavLink to='/AboutUs'> Learn More </NavLink></button>
                </div>
                
            </div>
        </div>

    </>
  )
}
