import React, { useRef } from "react";
import { NavLink } from "react-router-dom";

const UploadPage = () => {
    const p = useRef(null);

    const handleChange = ({target}) => {
        const file = target.files[0];
        const { name } = file;

        const audio = new Audio(URL.createObjectURL(file));
        audio.play();

        p.current.textContent = name.split(/\.mp3$/)[0]
    }

    return (
        <>
            <NavLink to="/"><button>Voltar</button></NavLink><br /><br />
            <input type="file" onChange={handleChange} />
            <p ref={p}></p>
        </>
    );
}  

export default UploadPage;