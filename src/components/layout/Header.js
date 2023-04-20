import { Link } from "react-router-dom";

function Header() {
  return (
    <header>
      <nav>
        <ul>
          <li>
            <Link className="link" to="/pics">
              Kattay Pics
            </Link>
          </li>
          <li>
            <Link className="link" to="#">
              Kattay Bio
            </Link>
          </li>
          <li>
            <Link className="link" to="#">
              Kattay Games
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
