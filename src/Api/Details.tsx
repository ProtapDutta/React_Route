import { useState, useRef, useEffect } from "react";
import { useNavigate } from "react-router-dom";

interface Test {
  email: string;
  age: string;
  loc: string;
}

const Details = () => {
  const [form, setForm] = useState<Test>({ email: "", age: "", loc: "" });
  const [data, setData] = useState<Test[]>([]);
  const ref1 = useRef<HTMLInputElement>(null);
  const navigate = useNavigate();

  useEffect(() => {
    const stored = localStorage.getItem("userData");
    if (stored) setData(JSON.parse(stored));
  }, []);

  useEffect(() => {
    localStorage.setItem("userData", JSON.stringify(data));
  }, [data]);

  const valupd = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  const addData = () => {
    if (form.email && form.age && form.loc) {
      setData([...data, form]);
      setForm({ email: "", age: "", loc: "" });
    }
  };

const del = (index: number) => {
    const newData = [...data];
    newData.splice(index, 1);
    setData(newData);
};

  const viewdata = () => {
    navigate("/view");
  };

  return (
    <>
      <form>
        <div className="mb-3 mt-3">
          <label htmlFor="email" className="form-label"> Email : </label>
          <input type="email" className="form-control" placeholder="Enter email" value={form.email} name="email" onChange={valupd} ref={ref1}/>
        </div>
        <div className="mb-3">
          <label htmlFor="age" className="form-label"> Age: </label>
          <input type="text" className="form-control" placeholder="Enter Age" value={form.age} name="age" onChange={valupd}/>
        </div>
        <div className="mb-3">
          <label htmlFor="loc" className="form-label">Location :</label>
          <input
            type="text" className="form-control" placeholder="Enter Location" value={form.loc} name="loc" onChange={valupd}/>
        </div>
        <button type="button" className="btn btn-primary" onClick={addData}>Add</button>
      </form>
      {data.length > 0 ? (
        <table className="table mt-4">
          <thead>
            <tr>
              <th>No</th>
              <th>Email</th>
              <th>Age</th>
              <th>Location</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {data.map((item, index) => (
              <tr key={index}>
                <td>{index + 1}</td>
                <td>{item.email}</td>
                <td>{item.age}</td>
                <td>{item.loc}</td>
                <td>
                    <button type="button" className="btn btn-success btn-sm" onClick={viewdata}>View</button>
                      <button type="button" className="btn btn-danger btn-sm" onClick={() => del(index)}>Delete</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      ) : (
        <h4 className="mt-4">No User Data</h4>
      )}
    </>
  );
};
export default Details;