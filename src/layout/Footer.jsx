import Logo from "../components/Logo"

import { FaFacebookF, FaWhatsapp, FaYoutube, FaMapMarkerAlt, FaPhoneAlt } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

export default function Footer() {
  return (
    <>
        <div className="bg-secondary p-10 grid grid-cols-1 md:grid-cols-3 gap-5">
          <Logo />

          <div className="w-full border-l-2 text-primary pl-10">
            <h1 className="text-primary mb-5 font-bold text-2xl">Contact Us</h1>
            <div className="text-primary mb-2  flex items-center gap-2">
              <FaMapMarkerAlt className="text-2xl" />
              <p>#2Adiobele Along Onitsha - Owerri Rd Oba, Nigeria</p>
            </div>

            <div className="text-primary flex mb-2 items-center gap-2">
              <FaPhoneAlt className="text-2xl" />
              <div>
                <p>+234 803 5008 212</p>
                <p>+234 703 6400 522</p>
              </div>
            </div>
            <div className="text-primary flex  items-center gap-2">
              <MdEmail className="text-2xl" />
              <p >goldencastlegci@gmail.com</p>
            </div>
            
          </div>

          <div className="border-l-2 text-primary pl-10 ">
            <h1 className="text-primary font-bold mb-5 text-2xl">Follow Us</h1>
            <div className="text-primary mt-2 flex items-center gap-2 mb-3">
              <FaFacebookF className="text-2xl"/>
              <p>@GoldenCastleIntl</p>
            </div>
            <div className="text-primary mt-1 flex items-center gap-2 mb-3">
            <FaWhatsapp className="text-2xl"/> 
              <p>@GoldenCastleIntl</p>
            </div>
            <div className="text-primary mt-1 flex items-center gap-2 mb-3">
              <FaYoutube className="text-2xl"/>
              <p>@GoldenCastleIntl</p>
            </div>
          </div>
      
        </div>
        <p className="text-center text-primary pt-5 bg-button">Copyright © 2024 Golden Castle International School. All rights reserved.</p>
    </>
  )
}



