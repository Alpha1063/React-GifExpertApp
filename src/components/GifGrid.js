import React, {Fragment} from "react";
import { GifGridItem } from "./GifGridItem";
//import { getGifs } from "../helpers/getGifs";
import { useFetchGifs } from "../hooks/useFetchGifs";

export const GifGrid = ({category}) => {

    //const [images, setImages] = useState([]);

    const {data:images, loading} = useFetchGifs(category);

    /* useEffect(()=>{
        getGifs(category)
            .then(setImages);
    }, [category]) */

    
    return (
        <>
            <h3 className="titulo animate__animated animate__fadeIn">{category}</h3>

            {loading && <p className="loading animate__animated animate__flash">Loading</p>}

            <div className={'card-grid'}>
                {/* <ol>
                    {
                        images.map( ({id,title}) => (
                            <li key={id}> {title} </li> //-> forma antigua de hacerlo
                        ))
                    }
                </ol> */}
                {
                    images.map( img => (
                        <GifGridItem
                            key = {img.id}
                            {...img}
                        />
                    ))
                }
            </div>
        </>
        )
}