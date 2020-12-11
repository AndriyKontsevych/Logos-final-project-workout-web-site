import React from "react";
import foodPlate from '../../images/food-plate.jpg'
import "./style.scss"

export const Food = (props) => {
    let food = props.props;

    return (
        <div className="card mb-3" style={{maxWidth: "100%"}}>
            <div className="row g-0">
                <div className="col-md-4">
                <img src={foodPlate} alt="img" className="plate"/>
                </div>
                <div className="col-md-8">
                <div className="card-body">
                    <h5 className="card-title">{food.name} (Original name)</h5>
                    <ul>
                        <li>Carbohydrates: {food.carbohydrates}</li>
                        <li>Fat: {food.fat}</li>
                        <li>Protein: {food.protein}</li>
                        <li>Energy: {food.energy}</li>
                    </ul>
                </div>
                </div>
            </div>
            </div>

    )
}