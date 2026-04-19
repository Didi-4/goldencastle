import imageFacility1 from "../assets/facility1.png";
import imageFacility2 from "../assets/facility2.png";
import imageFacility3 from "../assets/facility3.png";



export default function facility() {
  return (
    <div className="bg-secondary py-5">
        <h1 className="text-3xl font-bold text-center text-primary ">Our Facility</h1>
            <div className="w-full grid grid-cols-1 md:grid-cols-3 gap-8  p-10  items-center text-xl">
                <div className="w-full  text-secondary font-bold flex flex-col items-center shadow-lg shadow-black/50">
                    <img src={imageFacility1} alt="Facility 1" className="w-full h-full object-cover transition-transform duration-300 ease-in-out hover:scale-105 cursor-pointer" />
                    <div className="w-full p-4 bg-primary">
                        <h2 className="text-center mt-3">ICT Laboratory</h2>
                        
                    </div>
                </div>
                <div className="w-full  text-secondary font-bold flex flex-col items-center shadow-lg shadow-black/50">
                    <img src={imageFacility2} alt="Facility 2" className="w-full h-full object-cover transition-transform duration-300 ease-in-out hover:scale-105 cursor-pointer"/>
                    <div className="w-full p-4 bg-primary">
                        <h2 className="text-center mt-3">Modern Boarden House</h2>
                        
                    </div>
                </div>
                <div className="w-full  text-secondary font-bold flex flex-col items-center shadow-lg shadow-black/50">
                    <img src={imageFacility3} alt="Facility 3" className="w-full h-full object-cover transition-transform duration-300 ease-in-out hover:scale-105 cursor-pointer" />
                    <div className="w-full p-4 bg-primary">
                        <h2 className="text-center mt-3">Ventilated Classroom</h2>
                    </div>
                </div>
            </div>
    </div>
  )
}
