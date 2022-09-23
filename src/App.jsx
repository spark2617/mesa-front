
import Home from './pages/Home';
import { Route, Routes, } from "react-router";
import Publicacao from './pages/Publicacao';
import PublicacaoDetalhes from './pages/PublicacaoDetalhes';

export default function App() {


	return (
		<>
		{
			//aqui esta as rotas
		}
		<Routes>
        	<Route path="/" element={<Home />} />

			{
				//:id é um parametro que será pego pelo useParams
			}
			<Route path="/PublicacaoDetalhes/:id" element={<PublicacaoDetalhes/>}/>
        	
      </Routes>

		</>


	)
}
