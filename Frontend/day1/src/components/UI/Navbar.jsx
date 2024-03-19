import { Link } from 'react-router-dom';
import '../../assets/Design/Navbar.css'; // Import navbar styles

const Navbar = () => {
  return (
    <nav className="navbar">
      <h1>Yoga Academy</h1>
      <ul className="navbar-list">
        <li><Link to="/">Home</Link></li>
        {/* <li><Link to="/login">Login</Link></li> */}
      </ul>
    </nav>
  );
};

export default Navbar;
