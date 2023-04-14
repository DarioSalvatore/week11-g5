import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import MyHome from "./Components/MyHome";
import MyAlbum from "./Components/MyAlbum";
import MyArtist from "./Components/MyArtist";
import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<MyHome />} />
          <Route path="/a" element={<MyAlbum />} />
          <Route path="/b" element={<MyArtist />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
