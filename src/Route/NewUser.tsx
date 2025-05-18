import React, { useState, useEffect } from "react";
import Navbar from "./Navbar";
import { getUsers, setUsers } from "./UserStroage";
import { Link } from "react-router-dom";

const NewUser = ({ signout }: { signout: () => void }) => {
  const [form, setForm] = useState({ name: "", age: "", location: "" });
  const [users, setUsersState] = useState<any[]>([]);

  useEffect(() => {
    setUsersState(getUsers());
  }, []);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const newUser = { id: Date.now(), ...form };
    const updated = [...users, newUser];
    setUsers(updated);
    setUsersState(updated);
    setForm({ name: "", age: "", location: "" });
  };

  const handleDelete = (id: number) => {
    const updated = users.filter(u => u.id !== id);
    setUsers(updated);
    setUsersState(updated);
  };

  return (
    <div>
      <Navbar signout={signout} />
      <div className="container mt-3">
        <h2>Add New User</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-3 mt-3">
            <label htmlFor="name">Name:</label>
            <input type="text" className="form-control" id="name" name="name" value={form.name} onChange={handleChange} />
          </div>
          <div className="mb-3">
            <label htmlFor="age">Age:</label>
            <input type="number" className="form-control" id="age" name="age" value={form.age} onChange={handleChange} />
          </div>
          <div className="mb-3">
            <label htmlFor="location">Location:</label>
            <input type="text" className="form-control" id="location" name="location" value={form.location} onChange={handleChange} />
          </div>
          <button type="submit" className="btn btn-primary">Add</button>
        </form>
        <h3 className="mt-4">User List</h3>
        {users.length > 0 && (
          <table className="table table-bordered">
            <thead>
              <tr>
                <th>Name</th><th>Age</th><th>Location</th><th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {users.map(user => (
                <tr key={user.id}>
                  <td>{user.name}</td>
                  <td>{user.age}</td>
                  <td>{user.location}</td>
                  <td>
                    <Link to={`/view/${user.id}`} className="btn btn-info btn-sm mx-1">View</Link>
                    <button className="btn btn-danger btn-sm mx-1" onClick={() => handleDelete(user.id)}>Delete</button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </div>
    </div>
  );
};
export default NewUser;