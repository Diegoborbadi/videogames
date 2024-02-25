import { useState } from "react";
import {useDispatch} from "react-redux";
import { postVideoGame } from "../../redux/actions/actions";
import "./create.style.css"
const Create = () => {

  const dispatch = useDispatch()


  const [state, setState] = useState({
    name: "",
    description: "",
    image:"",
    Release:"",
    rating: "",
  });
  const [errors, setErrors] = useState({
    name: "",
    description: "",
    image:"",
    Release:"",
    rating: "",
  });

  const validate = (state, name) => {
    if (name === "name") {
      if (state[name] === "") setErrors({ ...errors, name: "El nombre es requerido" });
      else if (state.name.length >= 8) setErrors({ ...errors, name: "El nombre es muy largo" });
      else setErrors({ ...errors, name: "" });
    }
    if (name === "description") {
      if (state[name] === "") setErrors({ ...errors, description: "La Description es requerida" });
      else if (state.description.length >= 30) setErrors({ ...errors, description: "La Description es muy larga" });
      else if (state.description.length <= 3) setErrors({ ...errors, description: "La Description es muy corta" });
      else setErrors({ ...errors, description: "" });

      if (name === "image") {
        if (state[name] === "") setErrors({ ...errors, image: "El image es requerido" });
        else if (state.image.length >= 8) setErrors({ ...errors, image: "El image es muy largo" });
        else setErrors({ ...errors, image: "" });
    }  
      if (name === "rating") {
      if (state[name] === "") setErrors({ ...errors, rating: "El rating es requerido" });
      else if (state.rating.length >= 13) setErrors({ ...errors, rating: "El rating es muy largo" });
      else setErrors({ ...errors, rating: "" });
    }
    }
    if (name === "release") {
      const releaseRegex = /^[0-9/]*$/;
      if (!releaseRegex.test(state.release)) {
        setErrors({ ...errors, release: "Formato de fecha inválido. Solo se permiten números y '/'." });
      } else if (state.release.length >= 11) {
        setErrors({ ...errors, release: "Solo se permite una longitud máxima de 10 caracteres." });
      } else {
        setErrors({ ...errors, release: "" });
      }
    }
  };

  const handleChange = (event) => {
    console.log(event.target.value);
    console.log(event.target.name);

    setState({
      ...state,
      [event.target.name]: event.target.value,
    });
    
    
    // re-renderizado
    validate(
      {
        ...state,
        [event.target.name]: event.target.value,
      },
      event.target.name);   
    };



    const handleSubmit = (event)=>{
      event.preventDefault();
      dispatch(postVideoGame(state))
    }
    


    const buttonDisabled = () => {
      let disableAux = true;
      for (let error in errors) {
        if (errors[error] === "") {
          disableAux = false;
        } else {
          disableAux = true;  
          break
        }
      }
      return disableAux;
    };

  return (
    <div className="container">
      {console.log(errors)}
      <form onSubmit={handleSubmit}>
        <input className="inputField"  onChange={handleChange} type="text" name="name" placeholder="Name" />
        <span className="error">{errors.name}</span>
        <input className="inputField"  onChange={handleChange} type="text" name="description" placeholder="Description" />
        <span className="error">{errors.description}</span>
        <input className="inputField"  onChange={handleChange} type="text" name="image" placeholder="image" />
        <span className="error">{errors.image}</span>
        <input className="inputField"  onChange={handleChange} type="text" name="rating" placeholder="rating" />
        <span className="error">{errors.rating}</span>
        <input className="inputField"  onChange={handleChange} type="text" name="release" placeholder="release: mm/dd/yyyy" />
        <span className="error">{errors.release}</span>
        <input  className="submitButton" disabled={buttonDisabled()} type="submit" />
      </form>
    </div>
  );
};

export default Create;