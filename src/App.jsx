import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './Components/Home'; // Adjusted path
import PTPR from './ApplicationForms/PTPR'; // Adjusted path
import COV from './ApplicationForms/COV'; // Adjusted path
import Order from './Components/Order'; // Adjusted path
import NGA from './ApplicationForms/NGA'; // Adjusted path
import TCP_Public from './ApplicationForms/TCP_Public'; // Adjusted path
import Paymongo from './Components/Paymongo'; // Adjusted path
import BillCollectorDashboard from './Components/BillCollectorDashboard'; // Adjusted path

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/ptpr" element={<PTPR />} />
        <Route path="/cov" element={<COV />} />
        <Route path="/order" element={<Order />} />
        <Route path="/nga" element={<NGA />} />
        <Route path="/tcp_public" element={<TCP_Public />} />
        <Route path="/paymongo" element={<Paymongo />} />
        <Route path="/bill-collector-dashboard" element={<BillCollectorDashboard />} />
      </Routes>
    </Router>
  );
}

export default App;
