import React from 'react';
import "./style.scss";

export const Exercise = (props) => {

    const exersiceArr = props.props;
    const exercises = Object.keys(exersiceArr);

    return (
        <>
        { exercises.map( exercise => {
            return(
                <div className="card mb-3 my-1" style={{maxWidth: "100%"}} key={exersiceArr[exercise].exerciseId}>
                <div className="row g-0">
                    <div className="col-md-4">
                        <img src={exersiceArr[exercise].img} alt="exercise" />
                    </div>
                    <div className="col-md-8">
                        <div className="card-body">
                            <h5 className="card-title">{exersiceArr[exercise].title}</h5>
                            <p className="card-text">{exersiceArr[exercise].description}</p>
                            <p className="card-text">Sets: {exersiceArr[exercise].sets}</p>
                            <p className="card-text">Reps: {exersiceArr[exercise].reps}</p>
                            <p className="card-text">Weight: {exersiceArr[exercise].weight} Kg.</p>
                        </div>
                    </div>
                </div>
            </div>
            )
        })}
        </>
    )
}