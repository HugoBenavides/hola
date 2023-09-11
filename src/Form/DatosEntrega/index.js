import React, { useState } from "react";
import { TextField, Button, Box } from "@mui/material";
import { validarDireccion,validarCiudad,validarEstado } from "./validacionesDatosEntrega";
import SelectInput from "@mui/material/Select/SelectInput";

const DatosEntrega = ({updateStep}) => {

  const [address,setAddress] = useState({value:"", valid:null})
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
        value={address.value}
        onChange={(input)=>{
          const value = input.target.value
          const valid = validarDireccion(value)
          setAddress({value,valid})
          console.log(value,valid)
        }}
        error={address.valid === false}
        helperText={address.valid === false && "Ingrese una dirección válida"}
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
        error={city.valid === false}
        helperText={city.valid === false  && "Favor de ingresar una ciudad"}
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
        error={estado.valid === false}
        helperText={estado.valid === false && "Ingrese un estado por favor"}
      />
      <Button variant="contained" type="submit">
        Crear cuenta
      </Button>
    </Box>
  );
};

export default DatosEntrega;
