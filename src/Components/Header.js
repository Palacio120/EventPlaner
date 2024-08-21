import { Button } from "@mui/material";
import { useState } from "react";

const Header = () => {
  const [newSite, setNewSite] = useState(false);
  return (
    <header className="header">
      <img
        src="../../public/logo192.png"
        alt="Company Logo"
        className="logo"
      />
      <div style={{ display: "flex" }}>
        <Button
          onClick={() => {
            setNewSite(!newSite);
          }}
          variant="contained"
        >
          nuevo site
        </Button>
        <Button
          onClick={() => {}}
          variant="contained"
        >
          nuevo evento
        </Button>
      </div>
    </header>
  );
};

export default Header;
