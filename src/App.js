import { Routes, Route } from 'react-router-dom';
import Dashbord from './components/Dashbord';
import Avoire from './components/Avoire';
import Bl from './components/Bl';
import Devis from './components/Devis';
import Factur from './components/Factur';
import Login from './components/Login';


// https://managementstock.herokuapp.com/
// http://127.0.0.1:5000/

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/dashboard" element={<Dashbord />} />
        <Route path="/avoire" element={<Avoire />} />
        <Route path="/bl" element={<Bl />} />
        <Route path="/devis" element={<Devis />} />
        <Route path="/facture" element={<Factur />} />
      </Routes>
    </>
  );
}

export default App;