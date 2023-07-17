import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import { Routes, Route } from "react-router-dom";


import { useEffect, useState } from 'react';

import { getboutique } from './redux/boutiqueslice';
import { useDispatch } from 'react-redux';
import Boutiquelist from './components/Boutiquelist';
import Boutiquedetails from './components/Boutiquedetails';



function App() {
  const dispatch =useDispatch();
  
  const [ping, setping] = useState(false);
  useEffect(() => {dispatch(getboutique());
   }, [ping]);
  return (
    <div className="App">
 
   <Routes>
        <Route path="/" element={ <Boutiquelist ping={ping} setping={setping} /> } />
        <Route path="/boutique/:id" element={<Boutiquedetails/>   } />
        
      </Routes>
    </div>
  );
}

export default App;
