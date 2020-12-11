import React from 'react';
import nutrition1 from "../../images/sport-nutrition-1.jpg";
import proteininlviv from "../../images/sport-nutrition-2.jpg";
import myprotein from "../../images/sport-nutrition-3.jpg";

export const SportNutrition = () => {
    return (
        <div className="album py-5 bg-light">
            <div className="container">
                <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3">
                    <div className="col">
                        <div className="card shadow-sm">
                        <img src={nutrition1} alt="img"/>
                        <a href="https://sport-nutrition.be/shop/category/health-wellness-1937" 
                        target="_blank"
                        rel="noreferrer"
                        className="link-secondary">
                            Health & Wellness
                        </a>
                        </div>
                    </div>
                    <div className="col">
                        <div className="card shadow-sm">
                        <img src={proteininlviv} alt="img"/>
                        <a href="https://proteininlviv.com/ua/g5415684-vitamini-minerali?sort=-price" 
                        target="_blank"
                        rel="noreferrer"
                        className="link-secondary">
                           Proteininlviv
                        </a>
                        </div>
                    </div>
                    <div className="col">
                        <div className="card shadow-sm">
                        <img src={myprotein} alt="img"/>
                        <a href="https://www.myprotein.com/" 
                        target="_blank"
                        rel="noreferrer"
                        className="link-secondary">
                            Myprotein
                        </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}