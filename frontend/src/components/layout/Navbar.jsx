import { Link } from "react-router-dom";
import Logo from "../common/Logo";
import Button from "../ui/Button";

function Navbar() {
  return (
    <nav className="flex items-center justify-between px-10 py-6">
      <Logo />

      <div className="flex items-center gap-4">
        <Link to="/login">
          <Button variant="secondary">
            Login
          </Button>
        </Link>

        <Link to="/signup">
          <Button>
            Sign Up
          </Button>
        </Link>
      </div>
    </nav>
  );
}

export default Navbar;