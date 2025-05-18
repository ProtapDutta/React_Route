import Navbar from "./Navbar";

const Menu = ({ signout }: { signout: () => void }) => {
  return (
    <div>
      <Navbar signout={signout} />
      <div className="container mt-3">
        <h2>Welcome back!</h2>
      </div>
    </div>
  );
};
export default Menu;