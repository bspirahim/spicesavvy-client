import { key } from 'localforage';
import React, { useEffect, useState } from 'react';
import { Button, CardGroup, Col, Container, Image, Row } from 'react-bootstrap';
import Marquee from "react-fast-marquee";
import Card from 'react-bootstrap/Card';
import { FaStar } from 'react-icons/fa';
import { Link, useLoaderData } from 'react-router-dom';

const Home = () => {
    const foods = useLoaderData()
    const [chefs, setChefs] = useState([])

    useEffect(() => {
        fetch('http://localhost:5000/chef')
            .then(res => res.json())
            .then(data => setChefs(data))
            .catch(error => {
                console.log(error)
            })
    }, [])
    return (
        <div>
            <section className="main">
                <div className="container py-5">
                    <div className="row py-4 ">
                        <div className="col-lg-7 pt-5 text-center ">
                            <h1 className="pt-5">Nature Has Always Cared For us</h1>
                            <button className="btn1 mt-3">More Tips</button>
                        </div>
                    </div>
                </div>
            </section>

            <section className='container my-5 py-5'>
                <h2 className='text-center mb-5'>Category items</h2>
                <div className="row">
                    {
                        foods.map(food =>

                            <div className="col-md-2 text-center">
                                <div className='bg-image hover-overlay hover-zoom hover-shadow ripple'>
                                   <Link to={`/category/${food.id}`}>
                                   <img src={food.img} className='w-75  rounded-circle' /></Link>
                                </div>
                                <h5 className='mt-3'>{food.category_name}</h5>
                            </div>
                            

                        )
                    }
                </div>
            </section>

            <section className='container mb-5'>
                <h2 className='text-center my-5 '>Member of Chef</h2>
                <div className="row">
                    {
                        chefs.map(chef =>


                            <div className="col-md-4 mb-4">
                                <Card className='p-0'>
                                    <Card.Img variant="top" height='250px' className='w-100' src={chef.img} />
                                    <Card.Body className=''>
                                        <Card.Title>{chef.name}</Card.Title>
                                        <p>Experience : {chef.experience} Years</p>
                                        <p>Number of Recipes : {chef.recipes}</p>
                                        <p>Likes : {chef.likes}</p>
                                        <Link to={`/chef/${chef.id}`}>
                                            <Button className='primary-btn text-light w-100' variant="info">View Recipe</Button>
                                        </Link>
                                    </Card.Body>
                                </Card>
                            </div>

                        )
                    }
                </div>
            </section>


            <section className=' container my-5 py-5'>
                <h2 className='text-center my-5 '>Review's</h2>
                <hr />
                <Marquee>
                    <Container>
                        <div className="row">
                            <div className="col-md-3 py-4">
                                <Card className='shadow-lg border border-0'>
                                    <div className='d-flex justify-content-between align-items-center'>
                                        <Card.Img className='w-25' src="/public/images/customers/comma.png" />
                                        <div className='d-flex align-items-center bg-warning  px-2 rounded-pill'>
                                            <span className='px-1 fw-bold'>4.7</span>
                                            <span className='pb-1'><FaStar></FaStar></span>
                                        </div>
                                    </div>
                                    <Card.Body>
                                        <Card.Text>
                                            Some quick example text to build on the card title and make up the
                                            bulk of the card's content.
                                        </Card.Text>
                                    </Card.Body>
                                    <div className='d-flex align-items-center'>
                                        <Card.Img className='w-25' src="/public/images/customers/player-1.png" />
                                        <div className='px-3 lh-1'>
                                            <p className='fw-bold'>Jhon Smith</p>
                                            <span>Google</span>
                                        </div>
                                    </div>
                                </Card>
                            </div>
                            <div className="col-md-3 py-4">
                                <Card className='shadow-lg border border-0 '>
                                    <div className='d-flex justify-content-between align-items-center'>
                                        <Card.Img className='w-25' src="/public/images/customers/comma.png" />
                                        <div className='d-flex align-items-center bg-warning  px-2 rounded-pill'>
                                            <span className='px-1 fw-bold'>4.7</span>
                                            <span className='pb-1'><FaStar></FaStar></span>
                                        </div>
                                    </div>
                                    <Card.Body>
                                        <Card.Text>
                                            Some quick example text to build on the card title and make up the
                                            bulk of the card's content.
                                        </Card.Text>
                                    </Card.Body>
                                    <div className='d-flex align-items-center'>
                                        <Card.Img className='w-25' src="/public/images/customers/player-1.png" />
                                        <div className='px-3 lh-1'>
                                            <p className='fw-bold'>Jhon Smith</p>
                                            <span>Google</span>
                                        </div>
                                    </div>
                                </Card>
                            </div>
                            <div className="col-md-3 py-4">
                                <Card className='shadow-lg border border-0'>
                                    <div className='d-flex justify-content-between align-items-center'>
                                        <Card.Img className='w-25' src="/public/images/customers/comma.png" />
                                        <div className='d-flex align-items-center bg-warning  px-2 rounded-pill'>
                                            <span className='px-1 fw-bold'>4.7</span>
                                            <span className='pb-1'><FaStar></FaStar></span>
                                        </div>
                                    </div>
                                    <Card.Body>
                                        <Card.Text>
                                            Some quick example text to build on the card title and make up the
                                            bulk of the card's content.
                                        </Card.Text>
                                    </Card.Body>
                                    <div className='d-flex align-items-center'>
                                        <Card.Img className='w-25' src="/public/images/customers/player-1.png" />
                                        <div className='px-3 lh-1'>
                                            <p className='fw-bold'>Jhon Smith</p>
                                            <span>Google</span>
                                        </div>
                                    </div>
                                </Card>
                            </div>
                            <div className="col-md-3 py-4">
                                <Card className='shadow-lg border border-0'>
                                    <div className='d-flex justify-content-between align-items-center'>
                                        <Card.Img className='w-25' src="/public/images/customers/comma.png" />
                                        <div className='d-flex align-items-center bg-warning  px-2 rounded-pill'>
                                            <span className='px-1 fw-bold'>4.7</span>
                                            <span className='pb-1'><FaStar></FaStar></span>
                                        </div>
                                    </div>
                                    <Card.Body>
                                        <Card.Text>
                                            Some quick example text to build on the card title and make up the
                                            bulk of the card's content.
                                        </Card.Text>
                                    </Card.Body>
                                    <div className='d-flex align-items-center'>
                                        <Card.Img className='w-25' src="/public/images/customers/player-1.png" />
                                        <div className='px-3 lh-1'>
                                            <p className='fw-bold'>Jhon Smith</p>
                                            <span>Google</span>
                                        </div>
                                    </div>
                                </Card>
                            </div>
                        </div>
                    </Container>
                </Marquee>
            </section>



        </div>
    );
};

export default Home;