import React from 'react';
import GifItem from './GifItem';
import { useFetchGifs } from '../hooks/useFetchGifs';

const GifGrid = ({ category }) => {

    // const [images, setImages] = useState([])


    const { data: images, loading } = useFetchGifs(category)



    return (
        <>
            <h3 className="animate__animated animate__fadeIn">{category}</h3>
            <hr/>

            {loading && <p className="animate__animated animate__flash">Loading...</p>}
            <div className="card-grid">

                {images.map(img => (
                    <GifItem
                        key={img.id}
                        {...img}
                    />
                )
                )
                }

            </div>
        </>
    );
}

export default GifGrid;
