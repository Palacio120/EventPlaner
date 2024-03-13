
import './App.css';
import Sitios from './Components/sitios';
import NuevoSitio from './Components/nuevoSitio';
import { useEffect, useState } from 'react';

function App() {
  const [listSites, setListSites]=useState(null);
  const [newSite, setNewSite]=useState(false);
    
  useEffect(() => {
    fetch('http://localhost:8000/locations', {mode: 'cors'})
      .then((response) => response.json())
      .then((sites)=>{
        setListSites(sites.location);
      })
      .catch(() => console.log("Algo falló"))
    
  },[])
  

  return (
    <div className="App">
      <div>
        <button onClick={() => { setNewSite(!newSite) }}>nuevo site</button>
      </div>
      {newSite ? <NuevoSitio/> : <Sitios sitios={listSites}/>}

    </div>
  );
}

export default App;
