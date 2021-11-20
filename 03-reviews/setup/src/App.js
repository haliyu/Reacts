import React from 'react';
import Review from './Review';

function App() {
  return(
    <main>
      <section className='section'>
        <div className='title'>
          <h2>Our Reviews</h2>
          <div className='underline'></div>
        </div>
        <Review />
      </section>
    </main>
  );
}

export default App;
