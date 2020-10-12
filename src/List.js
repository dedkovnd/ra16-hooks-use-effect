import React, {useState,useEffect} from 'react'
import {Details} from "./Details";

export function List() {
    const [users,setUsers] = useState([])
    const [info,setInfo] = useState({
        id: "",
        name: ""
    })
    const [details, setDetails] = useState([])

    useEffect(()=>{
        fetch(`https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/hooks-context/use-effect/data/users.json`)
                .then(response=> response.json())
                .then(json => setUsers(json))
    }, [])

    useEffect(()=>{
        if(info.id !== "") {
            fetch(`https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/hooks-context/use-effect/data/${info.id}.json`)
                .then(response=> response.json())
                .then(result => setDetails(result))
        }
    }, [info])

    function findUser(name) {
        return user => user.name === name
    }

    const itemHandler = evt => {
        const eventUser = users.filter(findUser(evt.target.innerHTML))
        setInfo({id: eventUser[0].id, name: eventUser[0].name})
    }


    return (
        <div>
            <ul>
                {users.map((user,i)=><li key={i} onClick={itemHandler}>{user.name}</li>)}
            </ul>
            <Details props={details}/>
        </div>
    )
}

