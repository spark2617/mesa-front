import { Link } from "react-router-dom"

export default function Publicacao({ titulo,id }) {

    return (
        <li><Link to={`/PublicacaoDetalhes/${id}`}>{titulo}</Link></li>
    )
}