import React, { useEffect, useState } from 'react';
import { Card } from 'react-bootstrap';
import { useLoaderData, useParams } from 'react-router-dom';
import FoodCard from '../FoodCard/FoodCard';

const Category = () => {
    const { id } = useParams()
    const foods = useLoaderData()

    const [category, setCategory] = useState([]);
    useEffect(() => {
        fetch(`https://spicesavvy-server-bspirahim.vercel.app/category/${id}`)
            .then(res => res.json())
            .then(data => setCategory(data))
    }, [])

    return (
        <div>

            <section>
                <div className='position-relative'>
                    <img src="/images/menu-banner/bg-food.jpg" alt="" className='w-100' />
                <h1 className='position-absolute top-50 start-50 translate-middle'>{category.category_name}</h1>
                </div>
            </section>

            <section className='container my-5'>
                <div className="row">
                    {
                        foods.map(food => <FoodCard
                            key={food.id}
                            food={food}
                        >

                        </FoodCard>)
                    }
                </div>
            </section>

        </div>
    );
};

export default Category;