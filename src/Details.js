import React from 'react'

export function Details ({props}) {
   console.log(props.details)
    return (
        <div>
            <img src={props.avatar} alt=''/>
        <ul>
            <li>{props.name}</li>
        </ul>
        </div>
    )
}