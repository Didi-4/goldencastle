import Nav from "../components/Nav.jsx";
import Logo from "../components/Logo.jsx";

const Header = () => {
    console.log('Header component rendered');
    return(
        <div className="flex justify-between p-4 bg-secondary text-white">
            <Logo/>
            <Nav />
        </div>
    )}

export default Header;    