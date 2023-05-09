import React, { useState } from 'react';
import { Button, Card } from 'react-bootstrap';
import { FaRegStar, FaStar } from 'react-icons/fa';
import Rating from 'react-rating';
import FoodModal from '../FoodModal/FoodModal';
import { toast } from 'react-toastify';

const FoodCard = ({ food }) => {
    const [favorite, setFavorite] = useState(false)
    console.log(food)
    const { name, img, rating, ingredients, instructions } = food

    let ingredientElement = '';
    for (const ingredient of ingredients) {
        let ingredientValues = ingredient.name + ': ' + ingredient.quantity + ', ';
        ingredientElement = ingredientElement + ingredientValues
    }

    let newInstruction = '';
    for (const instruction of instructions) {
        newInstruction = newInstruction + ' ' + instruction
    }

    const handleFavorite = (event) =>{
        setFavorite(event.target)
        toast('This recipe is my favorite');
    }

    return (

        <div className="col-md-4 mb-5 d-flex align-items-stretch">
            <Card className=' p-0'>
                <Card.Img variant="top" height='250' className='w-100 card-img-top' src={img} />
                <Card.Body>
                    <Card.Title>{name}</Card.Title>
                    <div className='pe-none mb-2'>
                        <Rating
                            placeholderRating={rating}
                            emptySymbol={<FaRegStar></FaRegStar>}
                            placeholderSymbol={<FaStar className='text-warning'></FaStar>}
                            fullSymbol={<FaStar></FaStar>}
                        ></Rating>
                    </div>
                    <p><span className='fw-bold'>Ingredients</span> : {ingredientElement.slice(0, -2)}.</p>

                </Card.Body>
                <div className='px-3 d-flex justify-content-between ali'>
                    <Button onClick={handleFavorite} disabled={favorite} className=' primary-btn text-light mb-4' variant="danger">Favorite</Button>

                    <FoodModal
                        instruction={newInstruction}>
                    </FoodModal>
                </div>
            </Card>
        </div>
    );
};

export default FoodCard;