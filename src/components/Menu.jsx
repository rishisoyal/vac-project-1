import { NavLink } from "react-router-dom";
import { FaHome, FaMicroblog, FaSuitcase } from "react-icons/fa";
import { IoPersonSharp, IoMail } from "react-icons/io5";
import { useLocation } from "react-router-dom";

const Menu = () => {
  const location = useLocation();
  console.log(location);
  return (
    <div className="menu">
      <nav>
        <ul>
          <li>
            <NavLink
              to="/"
              end // like old `exact`
              className={({ isActive }) =>
                isActive ? "nav-item active" : "nav-item"
              }
            >
              <FaHome size={25} />
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/about"
              className={({ isActive }) =>
                isActive ? "nav-item active" : "nav-item"
              }
            >
              <IoPersonSharp size={25} />
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/portfolio"
              className={({ isActive }) =>
                isActive ? "nav-item active" : "nav-item"
              }
            >
              <FaSuitcase size={25} />
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/contact"
              className={({ isActive }) =>
                isActive ? "nav-item active" : "nav-item"
              }
            >
              <IoMail size={25} />
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/blog"
              className={({ isActive }) =>
                isActive ? "nav-item active" : "nav-item"
              }
            >
              <FaMicroblog size={25} />
            </NavLink>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Menu;
