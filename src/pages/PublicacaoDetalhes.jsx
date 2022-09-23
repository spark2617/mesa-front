import { useEffect } from "react";
import { useState } from "react"
import { Link, useParams } from "react-router-dom";

export default function PublicacaoDetalhes() {

    const [artigo,setArtigo]=useState([]);

    const { id } = useParams();

    useEffect(()=>{
        fetch(`https://jsonplaceholder.typicode.com/posts/${id}`).then((response)=>{
            response.json().then((date)=>{
                setArtigo(date)
            })
        })
    },[])

    return (
        <>
        <Link></Link>
        <h1>{artigo.title}</h1>
        <br />
        <p>{artigo.body}</p>

        </>
    )
}