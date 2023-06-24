import React from "react";
import Comment from "./Comment";

const comments = [
    {
        name:"릴보이",
        comment:"리액트",
    },
    {
        name:"루이",
        comment:"officially missing you",
    },
    {
        name:"재키와이",
        comment:"하하",
    },
    {
        name:"mmm",
        comment:"vanila JS",
    }
];

function CommentList(props){
    return (
        <div>
            {
                comments.map((comment) => {
                    return (
                        <Comment name={comment.name} comment={comment.comment}></Comment>
                    );
                })
            }
        </div>
    )
}

export default CommentList;