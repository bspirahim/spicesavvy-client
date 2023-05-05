import { key } from 'localforage';
import React, { useEffect, useState } from 'react';
import { Button, CardGroup, Col } from 'react-bootstrap';
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';

const Home = () => {
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

            <section className='row my-5 py-5'>
                <h2 className='text-center mb-4'>Member of Chef</h2>
                <hr />
                {
                    chefs.map(chef =>
                      

                        <div className="col-md-4 mb-4">
                            <Col>
                                <Card>
                                    <Card.Img variant="top" height='300px' className='w-100 p-3' src={chef.img} />
                                    <Card.Body>
                                        <Card.Title>{chef.name}</Card.Title>
                                        <p>Experience : {chef.experience} Years</p>
                                        <p>Number of Recipes : {chef.recipes}</p>
                                        <p>Likes : {chef.likes}</p>
                                        <Link to=''>
                                            <Button className='primary-btn text-light' variant="info">View Recipe</Button>
                                        </Link>
                                    </Card.Body>
                                </Card>
                            </Col>
                        </div>

                    )
                }
            </section>
        </div>
    );
};

export default Home;