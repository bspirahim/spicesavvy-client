import React, { useEffect, useState } from 'react';
import { Card } from 'react-bootstrap';
import { useLoaderData, useParams } from 'react-router-dom';

const FoodMenu = () => {
    const id = useParams()
    const foods = useLoaderData()





    //ingredients value

    return (
        <div>

            <section>
                <img src="/public/images/menu-banner/bg-food.jpg" alt="" className='w-100' />
            </section>

            <section className='container my-5'>
                <div className="row">
                    {
                        foods.map(food =>

                            <div className="card mb-3">
                                <div className="row g-0">
                                    <div className="col-md-4">
                                        <img src={food.img} className="img-fluid rounded-start" alt="..." />
                                    </div>
                                    <div className="col-md-8">
                                        <div className="card-body">
                                            <h5 className="card-title">{food.name}</h5>
                                            <p>{food.cuisine}</p>
                                            <p className="card-text"><small className="text-body-secondary">Last updated 3 mins ago</small></p>
                                        </div>
                                    </div>
                                </div>
                            </div>

                        )
                    }
                </div>
            </section>

        </div>
    );
};

export default FoodMenu;