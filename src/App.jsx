import { HashRouter as Router, Routes, Route } from "react-router-dom";
import Main_Page from "./App/Pages/Main/Main_Page.jsx";
import KF_Page from "./App/Pages/KF/KF_Page.jsx";
import MEH_Main_Page from "./App/Pages/MEH/MEH_Main_Page.jsx";
import TGR_Page from "./App/Pages/TGR/TGR_Page.jsx";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Main_Page />} />
        <Route path="/kf" element={<KF_Page />} />
        <Route path="/meh" element={<MEH_Main_Page />} />
        <Route path="/tgr" element={<TGR_Page />} />
      </Routes>
    </Router>
  );
}

export default App;
