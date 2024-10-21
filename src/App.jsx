import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './Components/Home/Home';
import PTPR from './Components/PTPR/PTPR';
import COV from './Components/COV/COV';
import Order from './Components/Order/Order';
import NGA from './Components/Home/NGA/NGA';
import TCP_Public from './Components/TCP_Public/TCP_Public';
import Paymongo from './Components/Paymongo/Paymongo';
import BillCollectorDashboard from './Components/BillCollectorDashboard/BillCollectorDashboard';
import CsawCertificate from './Components/Certificate/Csaw_certificate';
import COVCertificate from './Components/Certificate/COV_certificate';
import PTPRCertificate from './Components/Certificate/PTPR_certificate';
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
        <Route path="/chainsaw-certificate" element={<CsawCertificate />} />
        <Route path="/certificate-of-verification" element={<COVCertificate />} />
        <Route path="/private-tree-plantation-registration" element={<PTPRCertificate />} />
      </Routes>
    </Router>
  );
}

export default App;
