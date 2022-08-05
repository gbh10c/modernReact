import React from 'react';
import ReactDOM from 'react-dom';
import { faker } from '@faker-js/faker';
import './style/App.css';
import CommentDetail from './CommentDetail';
import ApprovalCard from './ApprovalCard';

const App = () => {
  return (
    <div className='ui container comments'>
      <ApprovalCard>
        <div>
          <h4>WARNING!</h4>
        </div>
        Are you sure you want to do this?
      </ApprovalCard>
      <ApprovalCard>
        <CommentDetail
          author='Sam'
          timeAgo='Today at 4:45 PM'
          avatar={faker.image.avatar()}
          text='Nice post!'
        />
      </ApprovalCard>
      <ApprovalCard>
        <CommentDetail
          author='Pat'
          timeAgo='Today at 9:12 AM'
          avatar={faker.image.avatar()}
          text='Very cool!'
        />
      </ApprovalCard>
      <ApprovalCard>
        <CommentDetail
          author='Chris'
          timeAgo='Yesterday at 7:58 PM'
          avatar={faker.image.avatar()}
          text='No way!'
        />
      </ApprovalCard>
    </div>
  );
};

ReactDOM.render(<App />, document.querySelector('#root'));
