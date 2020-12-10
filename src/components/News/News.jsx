import React from 'react';
import './style.scss';
import pull from '../../images/pull-upbar.jpg';
import athlete from '../../images/young-athlete.jpeg';
import strong from '../../images/strong-man.jpg';
import yates from '../../images/yates.jpg';
import dexter from '../../images/dexter.jpg';
import calum from '../../images/calum.jpg';


export const News = () => {
    return (
        <div className="album py-5 bg-light">
            <div className="container">
                <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3">
                    <div className="col">
                        <div className="card shadow-sm">
                        <img src={pull} alt="img"/>
                        <a href="https://www.menshealth.com/uk/gym-wear/g34847432/best-pull-up-bars/" 
                        target="_blank"
                        rel="noreferrer"
                        className="link-secondary">
                            The 10 Best Pull-up Bars for Home Workouts
                        </a>
                        </div>
                    </div>
                    <div className="col">
                        <div className="card shadow-sm">
                        <img src={athlete} alt="img"/>
                        <a href="https://www.menshealth.com/uk/fitness/a34902611/calisthenics-workout-beginner-mistakes-minus-the-gym/" 
                        target="_blank"
                        rel="noreferrer"
                        className="link-secondary">
                            9 Calisthenics Mistakes Beginners Should Avoid
                        </a>
                        </div>
                    </div>
                    <div className="col">
                        <div className="card shadow-sm">
                        <img src={strong} alt="img"/>
                        <a href="https://www.menshealth.com/uk/workouts/a34893364/home-workout-arms1/" 
                        target="_blank"
                        rel="noreferrer"
                        className="link-secondary">
                            Build Strongman Bulk and Pump Up Your Arms At Home
                        </a>
                        </div>
                    </div>
                        <div className="col">
                        <div className="card shadow-sm">
                        <img src={dexter} alt="img"/>
                        <a href="https://generationiron.com/dexter-jackson-retirement-2/" 
                        target="_blank"
                        rel="noreferrer"
                        className="link-secondary">
                            Dexter Jackson Confirms His Retirement After 2020 Olympia
                        </a>
                        </div>
                    </div>
                    <div className="col">
                        <div className="card shadow-sm">
                        <img src={calum} alt="img"/>
                        <a href="https://generationiron.com/calum-von-moger-training-pro-card/" 
                        target="_blank"
                        rel="noreferrer"
                        className="link-secondary">
                            Calum Von Moger Details His Training & Contest Prep That Earned Him His Pro Card
                        </a>
                        </div>
                    </div>
                    <div className="col">
                        <div className="card shadow-sm">
                        <img src={yates} alt="img"/>
                        <a href="https://generationiron.com/dorian-yates-super-heavy-lifting-risks/" 
                        target="_blank"
                        rel="noreferrer"
                        className="link-secondary">
                            Dorian Yates: Super Heavy Lifting In Bodybuilding Is Too Risky With No Benefit | GI...
                        </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}