import { useState } from "react";

const Register = () => {

const [ username, setUsername ] = useState("");
const [ email, setEmail ] = useState("");
const [ password, setPassword ] = useState("");
const [ confirmPassword, setConfirmPassword ] = useState("");
const [ errores, setErrores] = useState([])

const validarForm = () =>{
  const errores = [];

  if(!username){ errores.push({ campo: "username", mensaje: "Nombre de usuario requerido"})};
  if(!email){ errores.push({ campo: "email", mensaje: "Debes proporcionar un email"})};
  if(!password){ errores.push({ campo: "password", mensaje: "Debes proporcionar una contraseña"})};
  if(!confirmPassword){ errores.push({ campo: "confirmPassword", mensaje: "Necesitas confirmar tu contraseña"})};
  if(password.length < 6){ errores.push({ campo: "password", mensaje: "La contraseña debe tener un minimo de 6 caracteres"})};
  if( password !== confirmPassword ){ errores.push({ campo: "confirmPassword", mensaje: "Las contraseñas no coinciden"})};

  setErrores(errores);
  return errores.length === 0;
}

const handleSubmit = (e) => {
  e.preventDefault(); // evita que el formulario se recargue y se envie

  const esValido = validarForm();

  if (esValido) {
    alert("Registro Completado con Exito")
  }
}

const obtenerMensajeError = (campo)=> {
  for (let i = 0; i < errores.length; i++) {
    if(errores[i].campo === campo){
      return errores[i].mensaje
    }
    
  }
  return null
  
};
  console.log("errores:", errores);
  console.log("errorMessage", obtenerMensajeError("username"));
  return(
    <div className="container mt-5">
      <div className="card mx-auto shadow-sm" style={{maxWidth: "400px"}}>
        <div className="card-body">
          <h2 className="card-title text-center mb-4"> Registrate</h2>
          <form onSubmit ={handleSubmit}>
            <div className="mb-3">
              <input 
                type="text"
                placeholder="Nombre de Usuario"
                className={`form-control ${obtenerMensajeError("username") ? "is-invalid": ""}`}
                value={username}
                onChange={(e)=> setUsername(e.target.value)}
              />
              { obtenerMensajeError("username") && ( 
                <div className="invalid-feedback"> {obtenerMensajeError("username")} </div>
              ) }
            </div>
            <div className="mb-3">
              <input 
                type="email"
                placeholder="Email"
                className={`form-control ${obtenerMensajeError("email") ? "is-invalid": ""}`}
                value={email}
                onChange={(e)=> setEmail(e.target.value)}
              />
              { obtenerMensajeError("email") && ( 
                <div className="invalid-feedback"> {obtenerMensajeError("email")} </div>
              ) }
            </div>
            <div className="mb-3">
              <input 
                type="password"
                placeholder="Password"
                className={`form-control ${obtenerMensajeError("password") ? "is-invalid": ""}`}
                value={password}
                onChange={(e)=> setPassword(e.target.value)}
              />
               { obtenerMensajeError("password") && ( 
                <div className="invalid-feedback"> {obtenerMensajeError("password")} </div>
              ) }
            </div>
            <div className="mb-3">
              <input 
                type="password"
                placeholder="confirme password"
                className={`form-control ${obtenerMensajeError("confirmPassword") ? "is-invalid": ""}`}
                value={confirmPassword}
                onChange={(e)=> setConfirmPassword(e.target.value)}
              />
              { obtenerMensajeError("confirmPassword") && ( 
                <div className="invalid-feedback"> {obtenerMensajeError("confirmPassword")} </div>
              ) }
            </div>
            <button type="submit" className="btn btn-primary w-100">
              Registrate
            </button>
          </form>
        </div>
      </div>
    </div>
  )
}

export default Register