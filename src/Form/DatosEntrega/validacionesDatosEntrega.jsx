export const validarDireccion = (adress)=>{
    
    const length = adress.length;
    return (length >1 && length<50)? true : false;
}

export const validarCiudad = (city)=>{
    const length = city.length
    return (length >3 && length<50) ? true : false; 
}

export const validarEstado = (estado)=>{
    const length = estado.length
    return (length > 3 && length <40) ? true : false;
}