import { useEffect } from "react";
import { useState } from "react"
import { Link, useParams } from "react-router-dom";

export default function PublicacaoDetalhes() {

    //use state esta sendo usado para definir o elemento da api
    const [artigo,setArtigo]=useState([]);

    //o useParams esta pegando o valor da url e colocando em uma variavel,
    //que no caso é o id. para ser mais especifico, na url estará /PublicacaoDetalhes/:id, 
    //no lugar do :id tera um numero, que sera pego pelo use params
    const { id } = useParams();


    
    useEffect(()=>{
        //faz a requisição por id, em outras palavras, GET
        fetch(`https://jsonplaceholder.typicode.com/posts/${id}`).then((response)=>{
            response.json().then((date)=>{
                setArtigo(date)
            })
        })
    },[])

    return (
        <>
        {
            //estrutura para colocar as informação da api na pagina para o usuario

            //o botão voltar é só para voltar na lista de titulo
        }
        <Link to="/"><button>voltar</button></Link>
        <h1>{artigo.title}</h1>
        <br />
        <p>{artigo.body}</p>

        </>
    )
}