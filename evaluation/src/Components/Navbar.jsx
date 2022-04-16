import { Link } from "react-router-dom";

export const Navbar = () => {
  return (
    <>
      <Link to="/">Home</Link>
      <Link to="/add_country">Country</Link>
      <Link to="/add_city">City</Link>
    </>
  );
};
