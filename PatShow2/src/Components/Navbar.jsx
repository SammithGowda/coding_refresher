import { Link } from "react-router-dom";
export const Navbar = () => {
  return (
    <div
      style={{
        width: "30%",
        margin: "auto",
        display: "flex",
        justifyContent: "space-between",
      }}
    >
      <Link to="/login">Login</Link>
      <Link to="/signup">Signup</Link>
      <Link to="/admin">Admin logon</Link>
      <Link to="/">Home</Link>
      <Link to="/listing/create">Create Entiry</Link>
    </div>
  );
};
