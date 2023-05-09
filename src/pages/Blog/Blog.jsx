import React from 'react';
import { Button, Card, Container } from 'react-bootstrap';
import Pdf from "react-to-pdf";


const ref = React.createRef();

const Blog = () => {
    return (
        <div>
            <Container className='my-5'>
                <h3 className='text-center mb-4'>Latest Blogs</h3>
                <div className='text-center'>
                    <Pdf targetRef={ref} filename="blog.pdf" className="m-auto">
                    {({ toPdf }) => <Button className='mx-auto mb-5 primary-btn' onClick={toPdf}>Download Pdf</Button>}
                    </Pdf>
                </div>
                <div ref={ref} className="row text-start">
                    <div className="col col-md-4 d-flex align-items-stretch">
                        <Card className='mb-5'>
                            <Card.Img variant="top" className='blog-card-img mb-3' src="/images/blog/blog-1.png" />
                            <Card.Body>
                                <Card.Title>What is the differences between uncontrolled and controlled components ?</Card.Title>
                                <Card.Text>
                                    In React, controlled components refer to components that have their state and behavior controlled by the parent component. These components rely on props passed down from the parent component to update their state and behavior. Uncontrolled components refer to components that manage their own state internally.
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </div>
                    <div className="col col-md-4  d-flex align-items-stretch">
                        <Card className='mb-5'>
                            <Card.Img variant="top" className='blog-card-img mb-3' src="/images/blog/blog-2.jpg" />
                            <Card.Body>
                                <Card.Title>How to validate React props using PropTypes</Card.Title>
                                <Card.Text>
                                    Usually, you need to define some custom validation logic for component props, for example, to ensure that a prop is passed a valid email address. prop-types allows you to define custom validation functions that you can use for type checking props.
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </div>
                    <div className="col col-md-4 d-flex align-items-stretch">
                        <Card className='mb-5'>
                            <Card.Img variant="top" className='blog-card-img mb-3' src="/images/blog/blog-3.webp" />
                            <Card.Body>
                                <Card.Title>what is difference between nodejs and express js ?</Card.Title>
                                <Card.Text>
                                    Express is a minimal and flexible node. js web application framework, providing a robust set of features for building single and multi-page, and hybrid web applications. On the other hand, Node. js is detailed as "A platform built on Chrome's JavaScript runtime for easily building fast, scalable network applications".
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </div>
                    <div className="col col-md-4 d-flex align-items-stretch m-auto">
                        <Card className='mb-5'>
                            <Card.Img variant="top" className='blog-card-img mb-3' src="/images/blog/blog-4.png" />
                            <Card.Body>
                                <Card.Title>What is a custom hook, and why will you create a custom hook?</Card.Title>
                                <Card.Text>
                                    Custom React JS hooks offer reusability as when a custom hook is created, it can be reused easily, which makes the code cleaner and reduces the time to write the code. It also enhances the rendering speed of the code as a custom hook does not need to be rendered again and again while rendering the whole code
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </div>
                </div>
            </Container>
        </div>
    );
};

export default Blog;