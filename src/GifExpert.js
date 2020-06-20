import React, { useState } from 'react';
import AddCategory from './componentes/AddCategory';
import GifGrid from './componentes/GifGrid';

const GifExpert = () => {

    // const categoria = ['One punch', 'Samurai', 'One Piece'];

    const [categoria, setCategoria] = useState(['One Piece'])
    // const addCat = () => {
    //     setCategoria([...categoria, 'Hunter'])
    //     setCategoria( cat => [...cat, 'One piece'])

    // }
    
    return (
        <>
            <h2>Gif-Expert App</h2>
            <AddCategory setCategoria={setCategoria} />
            
            <ul>
                {
                    categoria.map((cat, i) =>(
                            <GifGrid
                                key={cat}
                                category={cat}
                            />
                        )
                    )
                }
            </ul>
        </>
    );
}

export default GifExpert;
