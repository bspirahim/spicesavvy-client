import React from 'react';
import Lottie from "lottie-react";
import reader from "/public/error-page.json";
import { Link } from 'react-router-dom';
import { FaAngleRight } from 'react-icons/fa';

const Error = () => {
    return (
        <div className='w-50 m-auto text-center'>
            <Lottie animationData={reader} loop={true} />
            <p className='fw-bold fs-4'>Sorry! this page doesn't exists</p>
            <Link className='text-decoration-none' to='/'>Go Back To Home <FaAngleRight></FaAngleRight> </Link>
        </div>
    );
};

export default Error;