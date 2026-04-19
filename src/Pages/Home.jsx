import Header from "../layout/Header";  
import Hero from "../layout/Hero";
import Values from "../components/Values";
import Facility from "../layout/facility";
import Location from "../layout/location";
import Footer from "../layout/Footer";
const Home = () => {
    console.log('Home component rendered');
    return (
        <>
            <Header/>
            <Hero/>
            <Values/>
            <Facility/>
            <Location/>
            <Footer/>
        </>
    )
}

export default Home;