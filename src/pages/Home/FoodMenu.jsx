import React, { useEffect, useState } from 'react';
import { Card } from 'react-bootstrap';
import { useLoaderData, useParams } from 'react-router-dom';
import FoodCard from '../FoodCard/FoodCard';

const FoodMenu = () => {
    const id = useParams()
    const foods = useLoaderData()

    const [category, setCategory] = useState([]);
    useEffect(()=>{
        fetch(`http://localhost:5000/category/${id}`)
        .then(res => res.json())
        .then(data => console.log(data))
    }, [])

    return (
        <div>

            <section>
                <img src="/public/images/menu-banner/bg-food.jpg" alt="" className='w-100' />
            </section>

            <section className='container my-5'>
                <div className="row">
                    {
                        foods.map(food => <FoodCard
                            key={food.id}
                            food={food}
                        >

                        </FoodCard>  )
                    }
                </div>
            </section>

        </div>
    );
};

export default FoodMenu;