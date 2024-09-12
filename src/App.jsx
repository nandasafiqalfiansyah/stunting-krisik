import CekImt from "./pages/CekImt";
import LandingPage from "./pages/LandingPage";
import Konsultasi from "./pages/Konsultasi";
import { Route, Routes } from "react-router-dom";
import IsianArtikel from "./pages/IsianArtikel";
import Artikel from "./pages/Artikel";
import NotFound from "./pages/Notound";

import ChatBox from "./pages/ChatBox";
import LoginRegister from "./pages/LoginRegister";
import "./App.css";
import { UserProvider } from "./context/UserContex";

function App() {
  return (
    <>
      <UserProvider>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/" index element={<LandingPage />} />
          <Route path="/konsultasi" element={<Konsultasi />} />
          <Route path="/cekgizi" element={<CekImt />} />
          <Route path="/chat" element={<ChatBox />} />
          <Route path="/artikel" element={<Artikel />} />

          <Route path="/artikel/:id" element={<IsianArtikel />} />
          {/* <Route path="/chat" element={<ChatBox />} /> */}

          <Route path="*" element={<NotFound />} />

          <Route path="/login" element={<LoginRegister />} />
          <Route path="/register" element={<LoginRegister />} />
        </Routes>
      </UserProvider>
    </>
  );
}

export default App;
