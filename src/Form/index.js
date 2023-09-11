import React, {useState} from "react";
import { Box, Typography } from "@mui/material";
import { LogoSpace, FormSpace, Img } from "./styles";
import DatosUsuario from "./DatosUsuario";
import DatosPersonales from "./DatosPersonales";
import DatosEntrega from "./DatosEntrega";
//import { toBePartiallyChecked } from "@testing-library/jest-dom/dist/matchers";
import Complete from "./Complete";
import Stepper from "../Stepper";

const Form = () => {

  const [step,setStep] = useState(2); // se crea un useState para guargar un valor que sera usado con un switch case


  const updateStep = ()=>{
    console.log("actualizar paso", step)
    setStep(step)
  }


  const steps = { 
    0: <DatosUsuario updateStep={updateStep}/>,
    1: <DatosPersonales updateStep={updateStep}/>,
    2: <DatosEntrega updateStep={updateStep}/>,
    3: <Complete/>
  } // se simplifica el codigo al hacer una OBJETO "steps" con sus keys de modulos y se manda a llamar con un hook que almacena la posición
  // cuando se usa const para regresar un objetos con keys de modulos no es necesario usar return
  // es mucho mas limpio trabajar asi y no tienes que preocuparte por el orden de la keys del objeto
  return (
    <Box
      sx={{
        padding: "30px",
        display: "flexbox",
        flexDirection: "column",
      }}
    >
      <LogoSpace>
        <Img src={"/favicon.png"} />
        <Typography variant="h3">AluraFood</Typography>
      </LogoSpace>
      <FormSpace>
        {step < 3 &&  <Stepper step={step} />} 
        {/*<DatosUsuario />
        <DatosPersonales />
        <DatosEntrega /> */}

        {steps[step]}

      </FormSpace>
    </Box>
  );
};

export default Form;
