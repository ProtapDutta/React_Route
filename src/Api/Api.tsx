import { useState } from "react";
import axios from "axios";


const Api=()=>{
    const [info, setInfo] = useState<any>("");
    
    const apiget=()=>{
        axios.get('https://jsonplaceholder.typicode.com/posts/1')
        .then(
            (res)=>{
                setInfo(res.data);
                console.log(res.data);
                console.log(res.data.id);
                console.log(res.data.body);
            }
        ).catch(
            (err)=>{console.log(err);}
        )
    }

    return(
        <>
        <h3>Api Testing</h3>
        <button onClick={apiget}>Api Call</button>
        {
            info && <ul>
                <li>Id : {info.id}</li>
                <li>User Id: {info.userId}</li>
                <li>Body : {info.body}</li>
                <li>Title : {info.title}</li>
            </ul>
        }
        </>
    )
}
export default Api;