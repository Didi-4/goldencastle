import Values from "../components/Values";
import Footer from "../layout/Footer";

import { FaEye } from "react-icons/fa";
import { FaBullseye } from "react-icons/fa";
import { FaBrain } from "react-icons/fa";



const  aboutImage = "https://res.cloudinary.com/dadane1xo/image/upload/q_auto/f_auto/v1777222544/shoolfrontgate_x1klhb.png";
// NAV CALL
import Header from "../layout/Header"

export default function About() {
  return (
        <>
            <Header/>
              <div className="w-full p-10 bg-background">
            
                <div className=" grid grid-cols-1 md:grid-cols-2 gap-4 mt-8  text-xl">
                    <div className="h-full w-full">
                        <img src={aboutImage} alt="School Front Gate" className="w-full h-full object-cover"/>
                    </div>
                    
                    <div className="space-y-5 text-secondary text-lg">
                      
                        <p className="first-letter:text-5xl">At Golden Castle International School, we are committed to nurturing future leaders through quality education, strong moral values, and global learning standards. Located in the heart of Oba, our school provides a safe, supportive, and intellectually stimulating environment where every child is empowered to excel.</p>

                        <p>We combine academic excellence with character development, ensuring our students grow into confident, responsible, and innovative individuals ready to thrive in a competitive world.</p>
                    
                    </div>
                </div>
             </div>

             <div className="w-full grid grid-cols-1 gap-3 bg-background p-10 md:grid-cols-3 gap-3">
                  <div className="bg-secondary text-primary p-4 text-center flex flex-col gap-4 shadow-lg shadow-black/50">
                     
                     <div className="w-full flex items-center justify-center gap-5 text-3xl">
                       <h1>Our Vision  </h1>
                       <FaEye />
                     </div>
                      <p>To be a leading international school recognized for academic excellence, innovation, and the development of morally upright global citizens.</p>
                  </div>

                  <div className="bg-secondary text-primary p-4 text-center flex flex-col gap-4 shadow-lg shadow-black/50">
                    
                    <div className="w-full flex items-center justify-center gap-5 text-3xl">
                         <h1>Our Mission</h1>
                         <FaBullseye />
                    </div>
                     
                      <p>To provide a high-quality international education that fosters academic excellence, personal growth, and social responsibility, preparing students to become effective leaders and contributing members of the global community.</p>
                   </div>

                  <div className="bg-secondary text-primary p-4 text-center flex flex-col gap-4 shadow-lg shadow-black/50">

                      <div className="w-full flex items-center justify-center gap-5 text-3xl">
                          <h1>Our Philosophy </h1>
                          <FaBrain />
                      </div>  
                          
                          <p>We believe in holistic education that nurtures the intellectual, emotional, and social development of each student, fostering a lifelong love of learning and a commitment to ethical leadership.</p>
                      
                  </div>
              </div>

              <div className=" px-10 pb-10 bg-background">
                    <div className="h-full w-full bg-secondary p-5 grid grid-cols-1 md:grid-cols-2 gap-4 text-primary shadow-lg shadow-black/50">
                        <div className="border-b-2 md:border-b-0 pb-10 md:pb-0 ">
                            <h1 className="text-2xl font-bold text-center mt-10 ">Our Chant</h1>
                            <p className="text-center  text-lg mt-5">I love my school (X2) <br /> Golden castle the best school in town X2 <br /> We are Champions(x3) <br />Everyday <br />Call: golden castle <br /> Response: reach for gold <br /> Call: Golden castle <br /> Response: God in heaven we praise</p>
                        </div>

                        <div className="border-l-0  md:border-l-2 ">
                            <h1 className="text-2xl font-bold text-center mt-10 ">School Anthem </h1>
                            <p className="text-center  text-lg mt-5">Golden castle (X2) <br />A mountain of horses and chariots <br />We are planted by destiny on this castle of  <br /> knowledge and Godly wisdom  <br />Everyday <br />Oh with great passion in all fields of  <br /> knowledge we thrive our dreams in all we do <br /> Triumphing everyday as we reach for gold <br /></p>
                        </div>
                    </div>
              </div>

              <Footer />
        </>
  )
}
