import React from 'react';
import ReactDom from 'react-dom';

import './index.css';

function Tweet() {
    return (
        <div className="tweet">
            <Avatar />
            <div className="content">
                <Author />
                <Time />
                <Message />
                <div className="buttons">
                    <ReplyButton />
                    <RetweetButton />
                    <LikeButton />
                    <MoreOptionsButton />
                </div>
            </div>
        </div>
    )
}

function Avatar() {
    return (
        <img src="https://www.gravatar.com/avatar/nothing" alt="Avatar" className="avatar" />
    )
}

function Message() {
    return (
        <div className="message">
            Nigeria is a blessed country with corrupt leaders
        </div>
    )
}

function Author() {
    return (
        <span className="author" >
            <span className="name" > Bashir Hamza </span>
            <span className="handle" > @Bamoohaa </span>
        </span>
    )
}

const Time = () => (
    <span className="time" > 3h ago </span>
);

const ReplyButton = () => (
    <i className="fa fa-reply reply-button" />
);

const RetweetButton = () => (
    <i className="fa fa-retweet retweet-button" />
);

const LikeButton = () => (
    <i className="fa fa-heart like-button" />
);

const MoreOptionsButton = () => (
    <i className="fa fa-ellipsis-h more-options-button" />
);

ReactDom.render(<Tweet />, document.querySelector('#root'))