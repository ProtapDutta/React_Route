import { useEffect, useState } from "react";
import axios from "axios";

const Apilist=()=>{
    const [info, setInfo] = useState<any[]>([]);
    
    useEffect(()=>{
        setTimeout(() => {
            axios.get('https://jsonplaceholder.typicode.com/users')
        .then(
            (res)=>{
                setInfo(res.data);
                console.log(res.data);
            })
        .catch(
            (err)=>{console.log(err);})
        },1000);
    },[])

    return (
    <>
      
      {info.length > 0 ? (
        <>
            <h3>User List - Total ({info.length})</h3>
            {
                info.map((user, index) => (
                <ul key={index} style={{ border: "1px solid", margin: "5px", padding: "5px" }}>
                    <li><strong>User Id : {user.id}</strong></li>
                    <li>Name: {user.name}</li>
                    <li>Email: {user.email}</li>
                    <li>Street: {user.address.street}</li>
                    <li>City: {user.address.city}</li>
                    <li>Lat: {user.address.geo.lat} & Long: {user.address.geo.lng}</li>
                    <li>Company Name: {user.company.name}</li>
                </ul>
                ))
            }
        </>
        ) : (
        <h3 style={{ color: "red" }}>Loading.....</h3>
      )}
    </>
  );
};
export default Apilist;