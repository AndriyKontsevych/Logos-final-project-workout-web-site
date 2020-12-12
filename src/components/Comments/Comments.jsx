import React from "react";

export const Comments = (props) => {

    const userComment = Object.entries(props.props);

    return (
        <figure>
            <blockquote className="blockquote">
                <p>{userComment[0][0]}</p>
            </blockquote>
            <figcaption className="blockquote-footer">
                {userComment[0][1]}
            </figcaption>
        </figure>
    )
}