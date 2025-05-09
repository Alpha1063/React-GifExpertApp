import React, {Fragment, useState} from "react";
import { AddCategory } from "./components/AddCategory";
import { GifGrid } from "./components/GifGrid";

export const GifExpertApp = () => {
    
    //const categories = ['Rick and Morty','Doctor Stone','Solo Leveling']
    const [categories, setCategories] = useState(['Rick and Morty']);

    /* const handleAdd = () => {
        //setCategories( ['My Hero Academy', ...categories]);

        setCategories( cats => [...cats, 'My Hero Academy']);//otra vía
    } */

    return (
        <>
            <h2>GifExpertApp</h2>
            <AddCategory setCategories={setCategories}/>
            <hr/>

            {/* <button onClick={handleAdd}>Agregar</button> */}

            <ol>
                {
                    categories.map( category => (
                        /* <li key={category}> {category} </li> */
                        <GifGrid
                            key = {category}
                            category={category}
                        />
                    ))
                }
            </ol>
        </>
    )
}