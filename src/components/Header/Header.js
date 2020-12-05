import "./Header.css";
import Logo from "../../assets/logo.png";
const Header = () => {
    return (
        <div className="header_container">
            <img src={Logo} alt="Picturest Logo"/>
        </div>
    );
}
export default Header;