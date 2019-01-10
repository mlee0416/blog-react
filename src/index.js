import React from 'react';
import ReactDOM from 'react-dom';
import CommentDetail from './CommentDetail';

const App = () => {
    return (
      <div className="ui container comments">
        {/* comment 1 */}
        <CommentDetail author="Jack" timeAgo="Today at 4:45" comments="hi there"/>
        <CommentDetail author="Alex" timeAgo="Today at 2:45" comments="hi there you"/>
        <CommentDetail author="Janista" timeAgo="Today at 6:45" comments="hi there you sexy beasta"/>
      </div>  

    );
};

ReactDOM.render(<App/>,document.querySelector('#root'));