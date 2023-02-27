// This is is where users will be directed if they navigate to an invalid route
import { Link, useNavigate } from 'react-router-dom';
import notFoundPic from '../assets/404_image.jpeg';

const NotFound = () => {
  const navigate = useNavigate();
  return (
    <div id="not-found" className="master-font">
      <div id="not-found-container">
        <img
          id="not-found-img"
          alt="Funny picture of Mabel's dog Cora with .5 zoom lens for 404 error page"
          src={notFoundPic}
        />
        <p>
          404 Error.
          <br />
          Oops, there is no page with that url.
        </p>
        <Link to={'/'}>
          <div className="go-home-button">Go Home</div>
        </Link>
        <button onClick={() => navigate(-1)} className="go-back-button">
          Go to previous route
        </button>
      </div>
    </div>
  );
};

export default NotFound;
