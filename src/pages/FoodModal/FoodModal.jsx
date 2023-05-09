import React from 'react';
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { FaChevronRight } from 'react-icons/fa';

const FoodModal = ({ instruction }) => {

    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    return (
        <div>

            <a className='btn' role="button" onClick={handleShow}>Cooking Method <FaChevronRight></FaChevronRight></a>


            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Cooking Method </Modal.Title>
                </Modal.Header>
                <Modal.Body>{instruction}</Modal.Body>
                <Modal.Footer>
                    <Button className=' primary-btn text-light' variant="secondary" onClick={handleClose}>
                        Close
                    </Button>
                    
                </Modal.Footer>
            </Modal>
        </div>
    );
};

export default FoodModal;