import {
  Box,
  Card,
  CardContent,
  CardMedia,
  Typography,
  Button,
} from "@mui/material";
import { useEffect, useState } from "react";

const Sitios = (props) => {
  const [flag, setFlag] = useState(false);
  const [sites, setListSites] = useState();
  //console.log(sitios);

  const refresh = async () => {
    if (flag) {
      fetch("http://localhost:8000/locations", { mode: "cors" })
        .then((response) => response.json())
        .then((sites) => {
          setListSites(sites);
        })
        .catch(() => console.log("Algo falló"));
    } else {
      setFlag(true);
    }
  };

  useEffect(() => {
    fetch("http://localhost:8000/locations", { mode: "cors" })
      .then((response) => response.json())
      .then((sites) => {
        setListSites(sites);
      })
      .catch(() => console.log("Algo falló"));
  }, []);

  return (
    <div className="lista">
      <Button
        onClick={() => {
          refresh();
        }}
        variant="contained"
      >
        refresh
      </Button>
      {sites ? (
        sites.map((sitio) => {
          console.log(sitio);
          return (
            <Box
              key={sitio.id}
              sx={{ marging: "10px" }}
            >
              <Card sx={{ maxWidth: 345, marging: "10px" }}>
                <CardMedia
                  sx={{ height: 140 }}
                  image={sitio.img}
                  alt={sitio.img}
                />
                <CardContent>
                  <Typography
                    gutterBottom
                    variant="h5"
                    component="div"
                  >
                    {sitio.location}
                  </Typography>
                </CardContent>
              </Card>
            </Box>
          );
        })
      ) : (
        <></>
      )}
    </div>
  );
};

export default Sitios;
