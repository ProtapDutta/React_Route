import { useEffect,useState } from "react";
import axios from "axios";

const Apidropdown=()=>{
    const [info, setInfo] = useState<any[]>([]);

    useEffect(()=>{
        setTimeout(()=>{
            axios.get('https://dummyjson.com/users')
            .then((res)=>{setInfo(res.data.users);})
            .catch((err)=>{console.log(err);})
        },1000)
    },[])
    return(
        <>
            {
                info.length > 0 ? (
                    <select>
                        <option value="">Select city</option>
                        {
                            info.map((v: any) => (
                                <option key={v.address.stateCode} value={v.address.stateCode}>
                                    {v.address.state}
                                </option>
                            ))
                        }
                    </select>
                ) : (
                    <h3> Please Wait....</h3>
                )
            }
        </>
    )
}
export default Apidropdown;