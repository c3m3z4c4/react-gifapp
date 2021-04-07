import React, { useState } from 'react'
import { AddCategory } from './AddCategory'
import { GifGrid } from './GifGrid'

const GifExpertApp = () => {

    // const categories = ['One Punch', 'Samurai X', 'Dragon Ball'];
    const [categories, setCategories] = useState(['One Punch'])
    // const handleAdd = (e) => {
    //     setCategories([...categories, 'arifureta'])
    // }

    return (
        <div>
            <h2>GifExpertApp</h2>
            <AddCategory setCategories={ setCategories }/>

            <hr />

            <ol>
                {
                    categories.map(category =>
                    (<GifGrid
                        category={category}
                        key={category}
                    />
                    ))
                }
            </ol>
        </div>
    )
}

export default GifExpertApp
