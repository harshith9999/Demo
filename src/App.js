import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Accounts from "./components/Accounts";
import CorporateAccounts from "./components/CorporateAccount";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Accounts />}></Route>
        <Route path="/corporate" element={<CorporateAccounts />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
