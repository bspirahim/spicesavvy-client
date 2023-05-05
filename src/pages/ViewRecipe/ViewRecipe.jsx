import React, { useEffect, useState } from 'react';
import { useLoaderData, useParams } from 'react-router-dom';

const ViewRecipe = () => {
    const {id} = useParams()
    const chef = useLoaderData()

    useEffect(()=>{
        fetch(`http://localhost:5000/recipe/${id}`)
        .then(res => res.json())
        .then(data => console.log(data))
    }, [])

    console.log(chef)
    return (
        <div>
            <h1>view recipe</h1>
        </div>
    );
};

export default ViewRecipe;