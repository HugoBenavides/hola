import React, {useState} from "react";
import { TextField, Button, Box, Input } from "@mui/material";
import { validarEmail,validarPassword } from "./validaciones";

const DatosUsuario = ()=> {

  const [email,setEmail] = useState({value: "", valid: null});
  const [password,setPassword] = useState({value: "", valid: null});

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
        e.preventDefault()
        console.log(email,"Este es el password",password);
        if(email.valid && password.valid){console.log("Siguiente formulario")}else{console.log("Aun no puedes pasar al siguiente formulario")}
      }}
    >
      <TextField
        label="Correo electrónico"
        variant="outlined"
        fullWidth
        margin="dense"
        type="email"
        error={email.valid === false}
        helperText={email.valid === false && "Ingresa un correo electrónico válido" }
        value={email.value}
        onChange={(input)=>{
          const email = input.target.value
          const valido = validarEmail(email)
          setEmail({value: email, valid: valido })} // se optimizo el codigo para actualizar el valid dependiendo de las const y function importadas desde otro componente
        }
      />
      <TextField
        label="Contraseña"
        variant="outlined"
        fullWidth
        margin="dense"
        type="password"
        error={password.valid === false}
        helperText={password.valid === false && "Ingresa un password"}
        value={password.value}
        onChange={(input)=>{
          const password = input.target.value
          const valido = validarPassword(password)
          setPassword({value: password, valid: valido })} // se optimizo el codigo para actualizar el valid dependiendo de las const y function importadas desde otro componente
        }
      />
      <Button variant="contained" type="submit" >
        Siguiente
      </Button>
    </Box>
  );

  
}

export default DatosUsuario;
