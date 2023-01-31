import React from 'react';
  
const Home = () => {
  return (
    <div>
      <h1>Home</h1>
      <p class="lead">Click this button to go to "store".</p>
      <p><a href="/store" class="btn btn-primary btn-lg">Store &raquo;</a></p>
    </div>
  );
};
  
export default Home;