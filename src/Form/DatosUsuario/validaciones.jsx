import React from "react";
import { useState } from "react";


export const validarEmail = (email)=>{
    
    const length = email.length
    if(length > 8 && length <50 && email.includes("@"&&".com")){return true} 
    else {
        return false
    }
    
}

export function validarPassword (password){ //cuidado con la sintaxis de function, no es la misma que la de una const
    const length = password.length
    if(length > 8 && length <15){return true} 
    else {
        return false
    }
}   