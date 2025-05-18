import { Link } from "react-router-dom";

const Navbar = ({ signout }: { signout: () => void }) => (
  <nav className="navbar navbar-expand navbar-light bg-success mb-3">
    <div className="container">
      <Link className="navbar-brand" to="/menu">Home</Link>
      <div className="navbar-nav">
        <Link className="nav-link" to="/api-users">API Users</Link>
        <Link className="nav-link" to="/new">New User</Link>
      </div>
      <button className="btn btn-danger ms-auto" onClick={signout}>Logout</button>
    </div>
  </nav>
);
export default Navbar;