import { NavLink, useParams } from "react-router-dom";

const Navbar = () => {
  let params = useParams();
  console.log(params);
  const activeStyle = {
    textDecoration: "underline",
    color: "white",
  };
  return (
    <nav className="flex justify-around items-center h-16 bg-blue-500 text-2xl font-sans font-semibold ">
      <NavLink
        to="/"
        className="hover:text-gray-700"
        style={({ isActive }) => (isActive ? activeStyle : undefined)}
      >
        Home
      </NavLink>
      <NavLink
        to="/breathing"
        className="hover:text-gray-700"
        style={({ isActive }) => (isActive ? activeStyle : undefined)}
      >
        Breathing
      </NavLink>
    </nav>
  );
};

export default Navbar;
