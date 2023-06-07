import { useState } from "react";
import "./Campo.css"

const Campo = (props) => {


    const placeholderModificado = `${props.placeholder}...`
    //en caso de que type sea indefinido le podemos dar un valor por defecto.
    //Destructuración
    const { type = "text" } = props
    console.log(type)
    const manejarCambio = (e) => {

        props.actualizarValor(e.target.value)//actualizamos el estado con los datos que el evento recoge.
    }

    return <div className={`campo campo-${type}`}>
        <label>{props.titulo}</label>
        <input
            placeholder={placeholderModificado}
            required={props.required}
            value={props.valor}
            onChange={manejarCambio}
            type={type}
        />
    </div>
}
export default Campo