import React from 'react';

const FoodCard = ({ food }) => {
    console.log(food)
    const {name, type, img, cuisine, ingredients, instructions} = food

    let ingredientElement = '';
   for (const ingredient of ingredients){
     let ingredientValues = ingredient.name + ': ' + ingredient.quantity + ', ';
     ingredientElement = ingredientElement + ingredientValues
   }

   let newInstruction = '';
   for(const instruction of instructions){
    newInstruction = newInstruction + instruction 
   }
   console.log(newInstruction)






    


    return (
        <section className="container">
            <div className="card mb-3" >
                <div className="row g-0 d-flex align-items-center">
                    <div className="col-md-4">
                        <img src={img} className="img-fluid rounded-start" alt="..."/>
                    </div>
                    <div className="col-md-8">
                        <div className="card-body ps-5">
                            <h5 className="card-title">{name}</h5>
                            <p><span className='fw-bold'>Type: </span>{type}</p>
                            <p> <span className='fw-bold'>Ingredients: </span>{ingredientElement}</p>
                            <p> <span className='fw-bold'>Cuisine: </span>{cuisine}</p>
                            <p> <span className='fw-bold'>Instraction: </span>{newInstruction}</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default FoodCard;