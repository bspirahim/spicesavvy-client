import React, { useEffect, useState } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { useLoaderData, useParams } from 'react-router-dom';
import './ViewRecipe.css'
import FoodCard from '../FoodCard/FoodCard';

const ViewRecipe = () => {
    const { id } = useParams()
    const chef = useLoaderData()
    const { name, img, short_bio } = chef;

    const [foods, setAllFood] = useState([])

    useEffect(() => {
        fetch(`http://localhost:5000/chef-food/${id}`)
            .then(res => res.json())
            .then(data => setAllFood(data))
            .catch(error => {
                toast.error(error.message)
            })
    }, [])


    return (
        <div>

            <div className='banner d-flex align-items-center mb-5'>

                <Container>
                    <div>
                        <Row className='d-flex align-items-center'>
                            <Col className=''>
                                <img height='400' className='w-100 card-img-top  rounded' src={img} alt="" />
                            </Col>
                            <Col className='text-light'>
                                <h3>{name}</h3>
                                <p>Experience : {chef.experience} Years <br /> Number of Recipes : {chef.recipes} <br /> Likes : {chef.likes}</p>
                                <p><small> {short_bio}</small></p>
                            </Col>
                        </Row>
                    </div>
                </Container>
            </div>

            <Container>
                <h3 className='mb-5'>{name}'s Recipes </h3>
                <div className='row'>

                {
                        foods.map(food => <FoodCard
                            key={food.id}
                            food={food}
                        >

                        </FoodCard>)
                    }

                </div>
            </Container>


        </div>


    );
};

export default ViewRecipe;