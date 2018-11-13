import React from 'react';
import ReactDOM from 'react-dom';
import faker from 'faker';

import CommentDetail from './CommentDetail';
import ApprovalCard from './ApprovalCard';


const App = () => {
    return (
        <div className="ui container comments">
            <ApprovalCard>
                <div>
                    <h4>Pretty Cool</h4>
                    This will work. If div omitted it wouldnt work
                </div>
            </ApprovalCard>
            <ApprovalCard>
                {/* Nested component available as props.children in parent component */}
                <CommentDetail 
                    author="Sam" 
                    timeAgo="Today at 4:45PM"
                    comment="React is pretty cool"
                    avatar={faker.image.avatar()}
                />
            </ApprovalCard>
            <ApprovalCard>
                {/* 
                    -Nesting CommentDetail component
                    -passing author/timeAgo/comment prop
                */}
                <CommentDetail 
                    author="George" 
                    timeAgo="Yesterday at 3:12AM"
                    comment="Yes, finally i can have a nice modular codebase for my front end"
                    avatar={faker.image.avatar()}
                />
            </ApprovalCard>
            <ApprovalCard>
                <CommentDetail 
                    author="Jenna" 
                    timeAgo="Feb 12 3:00AM"
                    comment="I prefer the very popular vanilla js lib"
                    avatar={faker.image.avatar()}
                />
            </ApprovalCard>
        </div>
    );
};

ReactDOM.render(
    <App />,
    document.querySelector('#root')
);
