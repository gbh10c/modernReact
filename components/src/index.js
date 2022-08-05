import React from 'react';
import ReactDOM from 'react-dom';
import { faker } from '@faker-js/faker';

import CommentDetail from './CommentDetail';

const App = () => {
  return (
    <div className='ui container comments'>
      <CommentDetail
        author='Sam'
        timeAgo='Today at 4:45 PM'
        avatar={faker.image.avatar()}
        text='Nice post!'
      />
      <CommentDetail
        author='Pat'
        timeAgo='Today at 9:12 AM'
        avatar={faker.image.avatar()}
        text='Very cool!'
      />
      <CommentDetail
        author='Chris'
        timeAgo='Yesterday at 7:58 PM'
        avatar={faker.image.avatar()}
        text='No way!'
      />
    </div>
  );
};

ReactDOM.render(<App />, document.querySelector('#root'));
