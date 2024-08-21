import "./App.css";
import Sitios from "./Components/sitios.js";
import NuevoSitio from "./Components/nuevoSitio.js";
import { useEffect, useState } from "react";
import Calendario from "./Components/Calendario.js";
import Header from "./Components/Header.js";

function App() {
  const [listSites, setListSites] = useState();
  const [siteSelected, setSiteSelected] = useState([]);
  const [newSite, setNewSite] = useState(false);

  return (
    <div className="App">
        <Header site={{setNewSite}}/>
      <div>
        <Calendario />
      </div>
      <div className="mainPart">
        <Sitios/>
      </div>
    </div>
  );
}

export default App;
