import React, {useState,useEffect} from 'react'


export function Details ({props}) {
    const [results, setResults] = useState([])

    useEffect(()=>{
        if(props !== null) {
            fetch(`https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/hooks-context/use-effect/data/${props.id}.json`)
                .then(response=> response.json())
                .then(json => setResults(json))
        }
    }, [props])

   if (props !== null) {
       return (
           <div>
               <img src={results.avatar} alt=''/>
               <ul>
                   <li>{results.name}</li>
                   {/*<li>{results.details.city}</li>*/}
               </ul>
           </div>
       )
   }

   return null

}