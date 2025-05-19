import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";

interface Test {
  email: string;
  age: string;
  loc: string;
}

const View = () => {
  const [data, setData] = useState<Test[]>([]);
  const navigate = useNavigate();

  useEffect(() => {
    const stored = localStorage.getItem("userData");
    if (stored) setData(JSON.parse(stored));
  }, []);

  const back = () => {
    navigate("/details");
  };

  return (
    <>
      <h3>User Data</h3>
      {data.length > 0 ? (
        <table className="table mt-4">
          <thead>
            <tr>
              <th>No</th>
              <th>Email</th>
              <th>Age</th>
              <th>Location</th>
            </tr>
          </thead>
          <tbody>
            {data.map((item, idx) => (
              <tr key={idx}>
                <td>{idx + 1}</td>
                <td>{item.email}</td>
                <td>{item.age}</td>
                <td>{item.loc}</td>
              </tr>
            ))}
          </tbody>
        </table>
      ) : (
        <h4>No User Data</h4>
      )}
      <button className="btn btn-secondary mt-3" onClick={back}>
        Back
      </button>
    </>
  );
};
export default View;