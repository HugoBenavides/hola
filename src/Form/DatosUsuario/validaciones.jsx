export const validarEmail = (email)=>{
    
    const length = email.length
    if(length >= 3 && length <60 && email.includes("@")){return true} 
    else {
        return false
    }
    
}

export function validarPassword (password){ //cuidado con la sintaxis de function, no es la misma que la de una const
    const length = password.length
    if(length >= 3 && length <15){return true} 
    else {
        return false
    }
}   