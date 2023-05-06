import React, { useEffect, useState } from 'react';
import { Button, Card, Col, Container, Row } from 'react-bootstrap';
import { useLoaderData, useParams } from 'react-router-dom';

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

            <div>
                <Container style={{backgroundColor: 'rgb(248, 26, 92)'}} className=' text-light p-3 rounded my-5'>
                    <Row className='d-flex align-items-center'>
                        <Col className=''>
                            <img height='300px' className='w-75 ms-auto rounded' src={img} alt="" />
                        </Col>
                        <Col>
                            <h4>{name}</h4>
                            <p>Experience : {chef.experience} Years</p>
                            <p>Number of Recipes : {chef.recipes}</p>
                            <p>Likes : {chef.likes}</p>
                            <p>Description : <small> {short_bio}</small></p>
                        </Col>
                    </Row>
                </Container>
            </div>

           <Container>
           <div className='row'>
                
                {
                    allRecipe.map(recipe =>

                        <div className="col-md-4 mb-5">
                            <Col>
                                <Card>
                                    <Card.Img variant="top" height='300px' className='w-100 p-3' src={recipe.img} />
                                    <Card.Body>
                                        <Card.Title>{recipe.recipe_name}</Card.Title>
                                        <p><span className='fw-bold'>Ingredients</span> : {recipe.ingredients}</p>
                                        <p><span className='fw-bold'>Cooking Method</span> : {recipe.cooking_method}</p>
                                        <p>Ratings : {recipe.rating}</p>
                                        <Button className='primary-btn text-light' variant="info">Favorite</Button>
                                    </Card.Body>
                                </Card>
                            </Col>
                        </div>

                    )
                }
          
        </div>
           </Container>


        </div>


    );
};

export default ViewRecipe;