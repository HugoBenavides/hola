import React, { useState } from "react";
import { TextField, Button, Box } from "@mui/material";
import { validarDireccion,validarCiudad,validarEstado } from "./validacionesDatosEntrega";
import SelectInput from "@mui/material/Select/SelectInput";

const DatosEntrega = ({updateStep}) => {

  const [adress,setAdress] = useState({value:"", valid:null})
  const [city,setCity] = useState({value: "", valid:null})
  const [estado,setEstado] = useState({value:"", valid:null})

  return (
    <Box
      component="form"
      autocomplete="off"
      sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        flexDirection: "column",
      }}
      onSubmit={(e)=>{
        e.preventDefault();
        updateStep(3)
      }}
    >
      <TextField
        label="Dirección"
        variant="outlined"
        fullWidth
        margin="dense"
        type="text"
        value={adress.value}
        onChange={(input)=>{
          const value = input.target.value
          const valid = validarCiudad(value)
          setAdress({value,valid})
          console.log(value,valid)
        }}
      />
      <TextField
        label="Ciudad"
        variant="outlined"
        fullWidth
        margin="dense"
        type="text"
        value={city.value}
        onChange={(input)=>{
          const value = input.target.value
          const valid = validarCiudad(value)
          setCity({value,valid})
          console.log(value,valid)
        }}
      />
      <TextField
        label="Estado/Provincia"
        variant="outlined"
        fullWidth
        margin="dense"
        type="text"
        value={estado.value}
        onChange={(input)=>{
          const value = input.target.value
          const valid = validarEstado(value)
          setEstado({value,valid})
          console.log(value,valid)
        }}
      />
      <Button variant="contained" type="submit">
        Crear cuenta
      </Button>
    </Box>
  );
};

export default DatosEntrega;
