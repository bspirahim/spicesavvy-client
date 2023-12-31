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
        fetch(`https://spicesavvy-server-bspirahim.vercel.app/chef-food/${id}`)
            .then(res => res.json())
            .then(data => setAllFood(data))
            .catch(error => {
                toast.error(error.message)
            })
    }, [])


    return (
        <div>

            <div className='col-12 banner d-flex align-items-center pt-5 mb-5'>

                <Container>
                    <div>
                        <Row className=' d-flex align-items-center'>
                            <Col className='col-12 col-md-6 mb-4'>
                                <img height='400' className=' w-100 card-img-top  rounded' src={img} alt="" />
                            </Col>
                            <Col className='text-light col-12 col-md-6 '>
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