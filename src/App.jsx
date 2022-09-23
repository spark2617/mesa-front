
import Home from './pages/Home';
import { Route, Routes, } from "react-router";
import Publicacao from './pages/Publicacao';
import PublicacaoDetalhes from './pages/PublicacaoDetalhes';

export default function App() {


	return (
		<>
		
		<Routes>
        	<Route path="/" element={<Home />} />
			<Route path="/PublicacaoDetalhes:id" element={<PublicacaoDetalhes/>}/>
        	
      </Routes>

		</>


	)
}
