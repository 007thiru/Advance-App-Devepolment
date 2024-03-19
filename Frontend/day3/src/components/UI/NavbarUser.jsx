import { Link } from 'react-router-dom';
import '../../assets/Design/NavbarUser.css';

const NavbarUser =() => {
  return (
    <section className="navbar-user">
      <h1>Welcome</h1>
      <ul>
        <li><Link to="/">Enrolled Courses</Link></li>
        <li><Link to="/logout">Logout</Link></li>
      </ul>
    </section>
  );
};


export default NavbarUser;
