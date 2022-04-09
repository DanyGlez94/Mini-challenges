import { Link } from "react-router-dom";
import { BiHome } from "react-icons/bi";

const ReturnHome = () => {
  return (
    <Link to="/">
      <button className="home__button">
        <i><BiHome/></i>
      </button>
    </Link>
  );
};

export { ReturnHome };
