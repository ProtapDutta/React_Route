
import { useParams, useNavigate } from "react-router-dom";
import Navbar from "./Navbar";
import { getUsers } from "./UserStroage";

const View = ({ signout }: { signout: () => void }) => {
  const { id } = useParams();
  const navigate = useNavigate();
  const users = getUsers();
  const user = users.find((u: any) => u.id === Number(id));

  if (!user) {
    return (
      <div>
        <Navbar signout={signout} />
        <div className="container mt-3">
          <h2>User Not Found</h2>
          <button className="btn btn-secondary" onClick={() => navigate("/menu")}>Back</button>
        </div>
      </div>
    );
  }

  return (
    <div>
      <Navbar signout={signout} />
      <div className="container mt-3">
        <h2>User Details</h2>
        <p><strong>Name:</strong> {user.name}</p>
        <p><strong>Age:</strong> {user.age}</p>
        <p><strong>Location:</strong> {user.location}</p>
        <button className="btn btn-secondary" onClick={() => navigate("/new")}>Back</button>
      </div>
    </div>
  );
};
export default View;