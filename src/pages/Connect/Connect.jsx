import React  from 'react';
import "./style.scss"

const Connect = () => {
    let mail = "workuot@gmail.com" 

    return(
        <div className="connect">
            <div className="info">
                <p>
                If You have some ideas as to improve our workout program or you have some question. <br/>
                Please email us :
                </p>
                <input type="text" value={mail} readOnly={true}/>
            </div>
        </div>
    )
}

export default Connect;