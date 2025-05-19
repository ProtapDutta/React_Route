import { useEffect, useState } from "react";
import axios from "axios";

type User = {
    id: number;
    email: string;
    firstName: string;
    lastName: string;
    image: string;
};

const Apilist2 = () => {
    const [info, setInfo] = useState<User[]>([]);

    useEffect(() => {
        setTimeout(() => {
            axios.get('https://dummyjson.com/users')
                .then((res) => {
                    setInfo(res.data.users);
                    console.log(res.data.users);
                })
                .catch((err) => { console.log(err); })
        }, 1000);
    }, [])

    return (
        <div className="container mt-3">
            {info.length > 0 ? (
                <table className="table table-hover">
                    <thead>
                        <tr>
                            <th>User Id</th>
                            <th>Email</th>
                            <th>Name</th>
                            <th>Profile Picture</th>
                        </tr>
                    </thead>
                    <tbody>
                        {info.slice(0, 10).map((user) => (
                            <tr key={user.id}>
                                <td>{user.id}</td>
                                <td>{user.email}</td>
                                <td>{user.firstName} {user.lastName}</td>
                                <td>
                                    <img src={user.image} alt="img" width={50} height={50}/>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            ) : (
                <h3 style={{color:"red"}}>Loading.....</h3>
            )}
        </div>
    );
};
export default Apilist2;
