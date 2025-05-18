import { NavLink } from "react-router-dom";

const Navbar = ({ signout }: { signout: () => void }) => (
  <nav className="navbar navbar-expand navbar-light bg-success mb-3">
    <div className="container">
      <NavLink className="navbar-brand" to="/menu" style={({ isActive }) => ({ color: isActive ? 'white' : 'black' })}>Home</NavLink>
      <div className="navbar-nav">
        <NavLink className="nav-link" to="/api-users" style={({ isActive }) => ({ color: isActive ? 'white' : 'black' })}>API Users</NavLink>
        <NavLink className="nav-link" to="/new" style={({ isActive }) => ({ color: isActive ? 'white' : 'black' })}>New User</NavLink>
      </div>
      <button type="button" className="btn btn-danger ms-auto" onClick={signout}>Logout</button>
    </div>
  </nav>
);
export default Navbar;