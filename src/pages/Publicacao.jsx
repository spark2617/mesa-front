import { Link } from "react-router-dom"


export default function Publicacao({ titulo,id }) {

    return (
        <>
        {
            //recebe valores da home e coloca na <li>

            // o id esta sendo colocado na url como parametro que sera pego pelo useParams,
            //porque foi definido um parametro na rota, pode ver isso no arquivo App.jsx

            //esse <li> é uma lista de titulo, e o TO esta dizendo que cada elemento da lista
            //esta linkada para uma url /PublicacaoDetalhes/${id} >>>>> ${id} == id do elemento

        
        }
        <li><Link to={`/PublicacaoDetalhes/${id}`}>{titulo}</Link></li>
        </>
        
    )
}