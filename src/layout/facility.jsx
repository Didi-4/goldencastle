const imageFacility1 = "https://res.cloudinary.com/dadane1xo/image/upload/q_auto/f_auto/v1777221804/facility1_skxrq2.jpg";
const  imageFacility2 = "https://res.cloudinary.com/dadane1xo/image/upload/q_auto/f_auto/v1777221835/facility2_puyjbx.jpg";
const  imageFacility3 = "https://res.cloudinary.com/dadane1xo/image/upload/q_auto/f_auto/v1777221842/facility3_oy5msk.jpg";



export default function facility() {
  return (
    <div className="bg-secondary py-4">
        <h1 className="text-3xl font-bold text-center text-primary ">Our Facility</h1>
            <div className="w-full grid grid-cols-1 md:grid-cols-3 gap-8  p-10  items-center text-xl">
                <div className="w-full  text-secondary font-bold flex flex-col items-center shadow-lg shadow-black/50">
                    <img src={imageFacility1}  alt="Facility 1" />
                    <div className="w-full p-4 bg-primary">
                        <h2 className="text-center mt-3">ICT Laboratory</h2>
                        
                    </div>
                </div>
                <div className="w-full  text-secondary font-bold flex flex-col items-center shadow-lg shadow-black/50">
                    <img src={imageFacility2} alt="Facility 2"/>
                    <div className="w-full p-4 bg-primary">
                        <h2 className="text-center mt-3">Modern Boarding House</h2>
                        
                    </div>
                </div>
                <div className="w-full  text-secondary font-bold flex flex-col items-center shadow-lg shadow-black/50">
                    <img src={imageFacility3} alt="Facility 3" />
                    <div className="w-full p-4 bg-primary">
                        <h2 className="text-center mt-3">Ventilated Classroom</h2>
                    </div>
                </div>
            </div>
    </div>
  )
}
