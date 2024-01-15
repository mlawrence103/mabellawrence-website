import { Link } from 'react-router-dom';

const Menu = () => {
  return (
    <div id="menu">
      <div id="menu-items">
        <Link to="/" className="menu-link">
          About Me
        </Link>
        {/* <p className="menu-link">Projects</p> */}
        <Link to="/resume" className="menu-link">
          Projects
        </Link>
      </div>
    </div>
  );
};

export default Menu;
