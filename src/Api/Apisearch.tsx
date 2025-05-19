
import axios from "axios";
import { useRef } from "react";

const Apisearch = () => {
    const ref1 = useRef<HTMLInputElement>(null);
    const ref2 = useRef<HTMLHeadingElement>(null);

    const searchuser = () => {
        axios
            .get(`https://dummyjson.com/users/${ref1.current!.value}`)
            .then((res) => {
                if (ref2.current) {
                    ref2.current.innerHTML = `
                    <div class="container mt-3">           
                        <table class="table table-hover">
                            <thead>
                            <tr>
                                <th>Id</th>
                                <th>Email</th>
                                <th>Image</th>
                            </tr>
                            <tr>
                                <td>${res.data.id}</td>
                                <td>${res.data.email}</td>
                                <td><img src=${res.data.image} style="width:50px;height:50px;"/></td>
                            </tr>
                            </thead>
                            <tbody>
                            </tbody>
                        </table>
                    </div>`;
                }
            })
            .catch((err) => {
                console.log(err);
                if (ref2.current) {
                    ref2.current.innerHTML = `<h3>Invalid User Id </h3>`;
                }
            });
    };

    return (
        <>
            <label htmlFor="userIdInput">Enter UserId:</label>
            <input type="number" ref={ref1} placeholder="Enter ID" />
            <br />
            <button type="button" onClick={searchuser}>
                Search
            </button>
            <br />
            <h5 ref={ref2}></h5>
        </>
    );
};

export default Apisearch;

