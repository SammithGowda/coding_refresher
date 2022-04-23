import { Link } from "react-router-dom";
export const Navbar = () => {
  return (
    <div
      style={{
        width: "15%",
        margin: "auto",
        display: "flex",
        justifyContent: "space-between",
      }}
    >
      <Link to="/">Home</Link>

      <Link to="/listing/create">Create Entiry</Link>
    </div>
  );
};
