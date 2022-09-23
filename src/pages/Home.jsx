
import { useEffect } from "react";
import { useState } from "react";
import { useParams } from "react-router-dom";

import Publicacao from './Publicacao';






export default function Home() {

    useEffect(()=>{
        fetch(`https://jsonplaceholder.typicode.com/posts/`).then((response)=>response.json().then((date)=>{
            definirArtigos(date)
        }))

    },[])

    const [artigos, definirArtigos] = useState([
        {
            id: 1,
            title: 'ABC'
        },
        {
            id: 2,
            title: 'DEF'
        },
        {
            id: 3,
            title: 'GHI'
        }
    ]);

   

    return (
        <>
            <h1>Publicações</h1>
            <ul>
                
                {artigos.map(artigo => <Publicacao titulo={artigo.title} id={artigo.id} />)}
                
            </ul>
        </>
    )
}
