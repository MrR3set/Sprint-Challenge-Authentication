import React, { useState, useEffect } from "react";
import {axiosWithAuth} from "../utils/axiosWithAuth";

const FriendList = () => {
    const [data,setData] = useState([]);
    const getData = () => {
        
    }

    useEffect(() => {
        axiosWithAuth().get('/api/jokes').then(res=>{
            setData(res.data);
        }).catch(err => console.log(err))
      }, []);

    return (
        <div className="joke-list-wrapper">
            <div className="joke-list">
                {data.map(joke=>{
                    return <div className="joke" key={joke.id}>
                        ·{joke.joke}
                    </div>
                })}
            </div>
        </div>
    )
}

export default FriendList;
