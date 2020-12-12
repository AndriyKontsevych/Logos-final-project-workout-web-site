import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Comments } from '../../components/Comments/Comments';
import instance from "../../instance.js"
import { GET_COMMENTS } from '../../store/types';
import "./style.scss";

class Connect extends Component {
    state = {
        comment: "",
        mail: "workuot@gmail.com",
    }

    handleSend(e){
        let comment = {};
        comment[this.props.curentU.firstName] = this.state.comment;

        if(e.code === "Enter"){
            if(this.state.comment.length > 0){
            
                instance.post("/comments.json", {comment})
                    .then( res => {
                        console.log(res);
                        this.setState({comment: ""});
                        let comments = this.props.commentS;
                        comments.push(comment);
                        this.props.getComments(comments);
                        let commJson = JSON.stringify(comments);
                        sessionStorage.setItem("comments", commJson);
                    })
                    .catch(err => console.log(err));
            }
        }
    }

    handleChange(e){
        let reg = /[A-Za-z]/;
        if(reg.test(e.target.value)){
            let text = e.target.value;
            this.setState({comment: text});
        }
    }

    render(){
        return(
            <>
            <div className="container pt-1">
                <div className="connect">
                    <div className="info">
                        <p>
                        If You have some ideas as to improve our workout program or you have some question. <br/>
                        Please email us :
                        </p>
                        <input type="text" value={this.state.mail} readOnly={true}/>
                    </div>
                </div>
                {this.props.curentU && 
                <>
                   <div className="comments">
                    Comments
                    </div>
                    <div className="album py-5 bg-light">
                        {this.props.commentS.map((com, index) => {
                            return  <Comments props={com} key={index}/>
                        })}
                        <div className="form-floating">
                            <textarea className="form-control"
                                value={this.state.comment} 
                                placeholder="Leave a comment here" 
                                id="floatingTextarea2" 
                                style={{height: "100px"}} 
                                onChange={(e)=> this.handleChange(e)}
                                onKeyPress={(e) => this.handleSend(e)}/>
                        </div>
                    </div>
                </>
                }
             
            </div>
            <footer>&copy; 2020 All rights reserved</footer>
            </>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        curentU: state.curentUser,
        commentS: state.comments
    }
  }
  
const mapDispatchToProps = (dispatch) => {
    return {
        getComments: (obj) => dispatch({type: GET_COMMENTS, payload: obj})
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Connect);