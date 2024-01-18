import { useNavigate, Link } from "react-router-dom";
import { Button } from "antd";

function Navbar() {
  const navigate = useNavigate();

  return (
    <nav className="Navbar">
      <div>
        <Link to="/prova-web">
          <Button className="clubs" type="link">
            Clubs
          </Button>
        </Link>
      </div>
    </nav>
  );
}

export default Navbar;
