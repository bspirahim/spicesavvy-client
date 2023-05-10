import { key } from 'localforage';
import React, { useEffect, useState } from 'react';
import { Button, Container } from 'react-bootstrap';
import Marquee from "react-fast-marquee";
import Card from 'react-bootstrap/Card';
import { FaStar } from 'react-icons/fa';
import { Link, useLoaderData } from 'react-router-dom';
import LazyLoad from 'react-lazy-load';

const Home = () => {
    const foods = useLoaderData()
    const [chefs, setChefs] = useState([])

    useEffect(() => {
        fetch('https://spicesavvy-server-bspirahim.vercel.app/chef')
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
                            <Link to="/blog"><button className="btn1 mt-3">More Tips</button></Link>
                        </div>
                    </div>
                </div>
            </section>

            <section className='container my-5 py-5'>
                <h2 className='text-center mb-5'>Category items</h2>
                <div className="row">
                    {
                        foods.map(food =>

                            <div className="col-md-2 text-center"
                                key={food.id}
                            >
                                <div className='bg-image hover-overlay hover-zoom hover-shadow ripple'>
                                    <Link to={`/category/${food.id}`}>
                                        <img src={food.img} className='w-75  rounded-circle' /></Link>
                                </div>
                                <Link to={`/category/${food.id}`} className='text-decoration-none text-dark h5 mt-3 d-block'>
                                    {food.category_name}
                                </Link>
                            </div>


                        )
                    }
                </div>
            </section>

            <section className='container my-5 pb-5'>
                <h2 className='text-center mb-5 '>Member of Chef</h2>
                <LazyLoad>
                    <div className="row">
                        {
                            chefs.map(chef =>


                                <div className="col-md-4 mb-4"
                                    key={chef.id}
                                >
                                    <Card className='p-0'>
                                        <Card.Img variant="top" height='250px' className='w-100' src={chef.img} />
                                        <Card.Body className=''>
                                            <Card.Title>{chef.name}</Card.Title>
                                            <p>Experience : {chef.experience} Years</p>
                                            <p>Number of Recipes : {chef.recipes}</p>
                                            <p>Likes : {chef.likes}</p>
                                            <Link to={`/chef/${chef.id}`}>
                                                <Button className='primary-btn text-light w-100' variant="danger">View Recipe</Button>
                                            </Link>
                                        </Card.Body>
                                    </Card>
                                </div>

                            )
                        }
                    </div>
                </LazyLoad>
            </section>


            <section className=' container my-5 pb-5'>
                <h2 className='text-center mb-5 '>Review's</h2>
                <Container>
                    <div className="row">
                        <div className="col-12 col-md-3 py-4 d-flex align-items-stretch">
                            <Card className='shadow-lg border border-0'>
                                <div className='d-flex justify-content-between align-items-center'>
                                    <Card.Img className='w-25' src="/images/customers/comma.png" />
                                    <div className='d-flex align-items-center bg-warning  px-2 rounded-pill'>
                                        <span className='px-1 fw-bold'>4.7</span>
                                        <span className='pb-1'><FaStar></FaStar></span>
                                    </div>
                                </div>
                                <Card.Body>
                                    <Card.Text>
                                        A popular street food made with chickpeas, potatoes, tamarind sauce, and spices. It is often served in a bowl and eaten with a spoon.
                                    </Card.Text>
                                </Card.Body>
                                <div className='d-flex align-items-center'>
                                    <Card.Img className='w-25' src="/images/customers/player-1.png" />
                                    <div className='px-3 lh-1'>
                                        <p className='fw-bold mb-1'>Jhon Smith</p>
                                        <span>Google</span>
                                    </div>
                                </div>
                            </Card>
                        </div>
                        <div className="col-12 col-md-3 py-4 d-flex align-items-stretch">
                            <Card className='shadow-lg border border-0 '>
                                <div className='d-flex justify-content-between align-items-center'>
                                    <Card.Img className='w-25' src="/images/customers/comma.png" />
                                    <div className='d-flex align-items-center bg-warning  px-2 rounded-pill'>
                                        <span className='px-1 fw-bold'>4.7</span>
                                        <span className='pb-1'><FaStar></FaStar></span>
                                    </div>
                                </div>
                                <Card.Body>
                                    <Card.Text>
                                        A type of sweet or savory pastry made from rice flour and stuffed with a variety of fillings. It is often eaten as a snack or dessert.
                                    </Card.Text>
                                </Card.Body>
                                <div className='d-flex align-items-center'>
                                    <Card.Img className='w-25' src="/images/customers/player-6.png" />
                                    <div className='px-3 lh-1'>
                                        <p className='fw-bold mb-1'>Abu Sufian</p>
                                        <span>Google</span>
                                    </div>
                                </div>
                            </Card>
                        </div>
                        <div className=" col-12 col-md-3 py-4 d-flex align-items-stretch">
                            <Card className='shadow-lg border border-0'>
                                <div className='d-flex justify-content-between align-items-center'>
                                    <Card.Img className='w-25' src="/images/customers/comma.png" />
                                    <div className='d-flex align-items-center bg-warning  px-2 rounded-pill'>
                                        <span className='px-1 fw-bold'>4.7</span>
                                        <span className='pb-1'><FaStar></FaStar></span>
                                    </div>
                                </div>
                                <Card.Body>
                                    <Card.Text>
                                        A spicy beef curry made with onions, tomatoes, and a blend of spices. It is typically served with naan bread or rice.
                                    </Card.Text>
                                </Card.Body>
                                <div className='d-flex align-items-center'>
                                    <Card.Img className='w-25' src="/images/customers/player-5.png" />
                                    <div className='px-3 lh-1'>
                                        <p className='fw-bold  mb-1'>Mujahid</p>
                                        <span>Google</span>
                                    </div>
                                </div>
                            </Card>
                        </div>
                        <div className="col-12 col-md-3 py-4 d-flex align-items-stretch">
                            <Card className='shadow-lg border border-0'>
                                <div className='d-flex justify-content-between align-items-center'>
                                    <Card.Img className='w-25' src="/images/customers/comma.png" />
                                    <div className='d-flex align-items-center bg-warning  px-2 rounded-pill'>
                                        <span className='px-1 fw-bold'>4.7</span>
                                        <span className='pb-1'><FaStar></FaStar></span>
                                    </div>
                                </div>
                                <Card.Body>
                                    <Card.Text>
                                        A fragrant rice dish made with spices, meat, and sometimes vegetables. It is one of the most popular Bangladeshi dishes, and there are many regional variations.
                                    </Card.Text>
                                </Card.Body>
                                <div className='d-flex align-items-center'>
                                    <Card.Img className='w-25' src="/images/customers/player-3.png" />
                                    <div className='px-3 lh-1'>
                                        <p className='fw-bold  mb-1'>Maruf Ahmed</p>
                                        <span>Google</span>
                                    </div>
                                </div>
                            </Card>
                        </div>
                    </div>
                </Container>
            </section>



        </div>
    );
};

export default Home;