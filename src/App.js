// import logo from './logo.svg';
import './App.css'
import { Container } from '@mui/material'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Navbar from './components/NewNav/Modal';
import Patrimonio from './components/Patrimonio/Patrimonio';
import DiaDelCirco from './components/DiaDelCirco/DiaDelCirco';
import Mausoleo from './components/Mausoleo/Mausoleo';
import Campeonato from './components/Campeonato/Campeonato';
import CircoEnPandemia from './components/Circo_en_pandemia/CircoEnPandemia';
import Footer from './components/Footer/Footer';
import Sindicato from './components/Sindicato/Sindicato';
import Festival from './components/Festival/Festival';
import ViiFestival from './components/ViiFestival/ViiFestival';
import ViiiFestival from './components/ViiiFestival/ViiiFestival';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <Container>

          <Routes>
            <Route path="/" element={<Festival />} />
            <Route path="/sindicato" element={<Sindicato />} />
            <Route path="/patrimonio" element={<Patrimonio />} />
            <Route path="/dia-del-circo" element={<DiaDelCirco />} />
            <Route path="/mausoleo" element={<Mausoleo />} />
            <Route path="/circo-en-pandemia" element={<CircoEnPandemia />} />
            <Route path="/campeonato-circense" element={<Campeonato />} />
            <Route path="/vii-festival" element={<ViiFestival />} />
            <Route path="/viii-festival" element={<ViiiFestival />} />
          </Routes>
        </Container>
        <Footer />
      </BrowserRouter >
    </div>
  );
}

export default App;
