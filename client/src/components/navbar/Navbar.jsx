import "./navbar.css"
import {Link} from "react-router-dom"
import { useContext } from "react";
import { AuthContext } from "../../context/AuthContext";
import { useNavigate } from "react-router-dom";



const Navbar = () => {
  const { user } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleClick = () => {
      navigate("/login");
  };

  const handleClickRegistracija = () => {
    navigate("/login");
};

  return (
    <div className="navbar">
    <div className="navContainer">
      <Link to="/" style={{ color: "inherit", textDecoration: "none" }}>
        <span className="logo">SerbiaBooking</span>
      </Link>
      {user ? 
      
      (
        <div>
{user.username }
<button onClick={handleClick} className="navButton" >Odjavi se</button>

          </div>

        
        
        
        )  : (
        <div className="navItems">
          <button onClick={handleClickRegistracija} className="navButton">Registracija</button>
          <button onClick={handleClick} className="navButton" >Prijava</button>
        </div>
      )}
    </div>
  </div>
  )
}

export default Navbar