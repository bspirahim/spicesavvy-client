import React, { useEffect, useState } from 'react';
import { Button, Card, Col, Container, Row } from 'react-bootstrap';
import { useLoaderData, useParams } from 'react-router-dom';
import './ViewRecipe.css'
import Rating from 'react-rating';
import { FaRegStar, FaStar } from 'react-icons/fa';

const ViewRecipe = () => {
    const { id } = useParams()
    const chef = useLoaderData()
    const { name, experience, recipes, likes, img, short_bio } = chef;

    const [allRecipe, setAllRecipe] = useState([])

    useEffect(() => {
        fetch(`http://localhost:5000/recipe/${id}`)
            .then(res => res.json())
            .then(data => setAllRecipe(data))
            .catch(error => {
                console.log(error)
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
                        allRecipe.map(recipe =>

                            <div className="col-md-4 mb-5 d-flex align-items-stretch">
                                <Card className=' p-0'>
                                    <Card.Img variant="top" height='250' className='w-100 card-img-top' src={recipe.img} />
                                    <Card.Body>
                                        <Card.Title>{recipe.recipe_name}</Card.Title>
                                        <div className='pe-none mb-2'>
                                            <Rating
                                                placeholderRating={recipe.rating}
                                                emptySymbol={<FaRegStar></FaRegStar>}
                                                placeholderSymbol={<FaStar className='text-warning'></FaStar>}
                                                fullSymbol={<FaStar></FaStar>}
                                            ></Rating>
                                        </div>
                                        <p><span className='fw-bold'>Ingredients</span> : {recipe.ingredients.join(", ")}</p>
                                        <p><span className='fw-bold'>Cooking Method</span> : {recipe.cooking_method}</p>

                                    </Card.Body>
                                    <div className='px-3'>
                                        <Button className='w-100 primary-btn text-light mb-4' variant="info">Favorite</Button>
                                    </div>

                                </Card>
                            </div>

                        )
                    }

                </div>
            </Container>


        </div>


    );
};

export default ViewRecipe;