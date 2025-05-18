import { useState } from "react";
import axios from "axios";


const Api2=()=>{
    const [info, setInfo] = useState<any>("");
    
    const apiget=()=>{
        axios.get('https://jsonplaceholder.typicode.com/users/1')
        .then(
            (res)=>{
                setInfo(res.data);
                console.log(res.data);
            })
        .catch(
            (err)=>{console.log(err);})
    }

    return(
        <>
        <h3>Api Testing</h3>
        <button onClick={apiget}>Api Call</button>
        {
            info && <ul>
                <li>Name : {info.name}</li>
                <li>Email : {info.email}</li>
                <li>Street: {info.address.street}</li>
                <li>City : {info.address.city}</li>
                <li>Lat : {info.address.geo.lat}</li>
                <li>Long : {info.address.geo.lng}</li>
                <li>Company Name : {info.company.name}</li>
            </ul>
        }
        </>
    )
}
export default Api2;