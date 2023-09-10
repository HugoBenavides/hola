import React, {useState} from "react";
import { TextField, Button, Box} from "@mui/material";
import { validarApellidos, validarNombre, validarTelefono } from "./validacionesPersonales";
//import { toHaveAccessibleName } from "@testing-library/jest-dom/dist/matchers";

const DatosPersonales = ({updateStep}) => {

  const [name,setName] = useState({value:"", valid:null});
  const [lastname,setLastname] = useState({value:"", valid:null});
  const [telephone,setTelephone] = useState({value:"", valid:null});

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
        updateStep(2);
      }}
    >
      <TextField
        label="Nombre"
        variant="outlined"
        fullWidth
        margin="dense"
        type="text"
        value={name.value}
        onChange={(input)=>{
          const value = input.target.value
          const valid = validarNombre(value)
          setName({value, valid})
          console.log(value,valid)
        }}
        error={name.valid === false}
        helperText={name.valid === false && "Ingresa un nombre valido"}
      />
      <TextField
        label="Apellidos"
        variant="outlined"
        fullWidth
        margin="dense"
        type="text"
        value={lastname.value}
        onChange={(input)=>{
          const value = input.target.value
          const valid = validarApellidos(value);
          setLastname({value,valid})
          console.log(value,valid)

        }}
        error={lastname.valid === false}
        helperText={lastname.valid === false && "Ingrese sus apellidos"}
      />
      <TextField
        label="Número telefónico"
        variant="outlined"
        fullWidth
        margin="dense"
        type="number"
        inputProps={{ inputMode: "numeric", pattern: "[0-9]*" }}
        value={telephone.value}
        onChange={(input)=>{
          const value = input.target.value
          const valid = validarTelefono(value)
          setTelephone({value,valid})
          console.log(value,valid)
        }}
        error={telephone.valid===false}
        helperText={telephone.valid===false && "Ingrese un número de teléfono válido"}
      />
      <Button variant="contained" type="submit">
        Siguiente
      </Button>
    </Box>
  );
};

export default DatosPersonales;
