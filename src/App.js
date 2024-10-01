import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './Components/Home/Home'; // Corrected path
import PTPR from './Components/PTPR/PTPR';
import COV from './Components/COV/COV';
import Order from './Components/Order/Order';
import NGA from './Components/NGA/NGA';


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        {/* Route for PTPR page */}
        <Route path="/ptpr" element={<PTPR />} />
        <Route path="/cov" element={<COV/>}/>
        <Route path="/order" element={<Order/>}/>
        <Route path="/nga" element={<NGA/>}/>


      </Routes>
    </Router>
  );
}

export default App;
