import { Link } from "react-router-dom";

export const Navbar = () => {
  return (
    <div style={{ margin: "5px" }}>
      <Link style={{ margin: "5px" }} to="/signup">
        Signup
      </Link>
      <Link style={{ margin: "5px" }} to="/">
        Login
      </Link>
      <Link style={{ margin: "5px" }} to="/login">
        Home
      </Link>

      <Link style={{ margin: "5px" }} to="/todocreate">
        todocreate
      </Link>
    </div>
  );
};
