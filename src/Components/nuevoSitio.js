import { Button, Container, Input, Paper, TextField } from "@mui/material";
import { useState } from "react";

const NuevoSitio = (props) => {
    const [loading, setLoading]= useState(false);
    const [location, setLocation]= useState();
    const [img, setImg]= useState();

  const Submit = () => {
    setLoading(true);
    fetch("http://localhost:8000/locations", { mode: "cors", method: "POST" , body:{location:location, img:img}})
      .then((response) => response.json())
      .then((sites) => {
        console.log("post working");
        setLoading(false);
    })
      .catch(() => console.log("Algo falló"));

  };
  return (
    <>
      <Paper elevation={3}>
        {
            loading ? <h1>test</h1>:
            <Container maxWidth="sm">
          <TextField
            label="Location"
            required="true"
            value={location}
            onChange={()=>{setLocation()}}
          ></TextField>
          <Input
            type="file"
            required="true"
            value={img}
            onChange={()=>{setImg()}}
          ></Input>
          <Button
            onClick={() => {
              Submit();
            }}
          >
            Submit
          </Button>
        </Container>
        }
        
      </Paper>
    </>
  );
};

export default NuevoSitio;
