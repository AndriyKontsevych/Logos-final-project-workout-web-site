import React, { Component } from "react";
import { connect } from "react-redux";
import { CLOSE_ALERT } from "../../store/types";
import "./style.scss"


class Alerts extends Component {
    
    render(){
        return(
            <div className="alerts">
                <div className={ this.props.props.success ? "alert alert-success" : "alert alert-danger"} role="alert">
                {this.props.props.text}
                </div>
                <button onClick={()=> this.props.closeAlert()}>X</button>
            </div>
        )
    }
   
}

const mapDispatchToProps = (dispatch) => {
    return {
        closeAlert: () => dispatch({type: CLOSE_ALERT})
    }
}

export default connect(null, mapDispatchToProps)(Alerts);