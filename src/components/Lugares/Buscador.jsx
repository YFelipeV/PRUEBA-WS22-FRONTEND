import React, { useState } from 'react'
import { buscarLugares } from '../../data/Lugares';

function Buscador() {
    const [data, setdata] = useState();
    const handleOnsumbit = async (e) => {
        e.preventDefault();
        const response = await buscarLugares(data);
        console.log(response)
    };
    return (
        <form className="form-signin" onSubmit={handleOnsumbit}>
            <input
                type="text"
                className="form-control"
                placeholder="Buscar un lugar"
                onChange={(e) => setdata(e.target.value)}
            />
        </form>
    )
}

export default Buscador