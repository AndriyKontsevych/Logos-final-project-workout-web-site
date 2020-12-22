import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Comments } from '../../components/Comments/Comments';
import instance from "../../instance.js"
import { GET_COMMENTS } from '../../store/types';
import "./style.scss";

class Connect extends Component {
    state = {
        comment: "",
        mail: "workout@gmail.com",
    }

    send(){
        let comment = {};
        comment[this.props.curentU.firstName] = this.state.comment;

        if(this.state.comment.length > 0){
            
            instance.post("/comments.json", {comment})
                .then( () => {
                    instance.get("/comments.json")
                            .then( res => {
                                let arrComment = [];
                                for(let i in res.data){
                                    arrComment.push(res.data[i].comment);
                                }
                                let storege = JSON.stringify(arrComment)
                                this.props.getComments(arrComment);
                                sessionStorage.setItem("comments", storege);
                                this.setState({comment: ""})
                            })
                            .catch(err => console.log(err))
                })
                .catch(err => console.log(err));
        }
    }

    handleSendEnter(e){
        if(e.code === "Enter"){
            this.send();
        }
    }
    
    handleSendBtn(){
        this.send();
    }

    handleChange(e){
        let text = "";
        let reg = /[A-Za-z]/;
        if(reg.test(e.target.value)){
            text = e.target.value;
        }
        this.setState({comment: text});
    }

    commentsUpdate(){
        instance.get("/comments.json")
            .then( res => {
                let arrComment = [];
                for(let i in res.data){
                    arrComment.push(res.data[i].comment);
                }
                let storege = JSON.stringify(arrComment)
                this.props.getComments(arrComment);
                sessionStorage.setItem("comments", storege);
            })
            .catch(err => console.log(err))
    }

    componentDidMount(){
        this.interval = setInterval(()=>{
            this.commentsUpdate();
        }, 2000);
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
                    <div className="album py-4 px-3 bg-light">
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
                                onKeyPress={(e) => this.handleSendEnter(e)}
                                resize="none"/>
                                <button className="send-btn"
                                onClick={()=> this.handleSendBtn()}
                                ><i className="fas fa-share"></i></button>
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