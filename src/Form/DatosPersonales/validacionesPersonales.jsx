export const validarNombre = (name)=>{
    
    const length = name.length;
    return (length >1 && length<30)? true : false;
}

export const validarApellidos = (lastname)=>{
    const length = lastname.length
    return (length >1 && length<50) ? true : false; 
}

export const validarTelefono = (telephone)=>{
    const length = telephone.length
    return (length ===10) ? true : false;
}