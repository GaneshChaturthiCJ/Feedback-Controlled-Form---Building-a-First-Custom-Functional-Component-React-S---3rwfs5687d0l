import React, { useState } from 'react'
import '../styles/App.css';

const App = () => {
  const [rating, setRating] = useState(5);
  const [comment, setComment] = useState(true);
  const [rangeVal, setRangeVal] = useState(5);
  
  
  const ratingUpdate = (event) =>{
      setRating(event.target.value);
      setRangeVal(event.target.value)
  }
  const validation = (event) =>{
    if(event.target.value.length < 5 ){
      setComment(false);
    } else {
      setComment(true)
    }
  }
  
  const preventDefault = (event) =>{
    event.preventDefault();
  }

  return (
    <div id="main">
      <form onSubmit={preventDefault}>
        <div>
          <label htmlFor='rating'>Rating: </label>
          <input 
            type="range"
            min="1"
            max="10"
            value={rangeVal}
            id="rating" 
            onChange={ratingUpdate}
          />
          <span className='rating'>{rating}</span>
        </div>
        <div>
          <label htmlFor='comment'>Comment: </label>
          <textarea 
            id='comment'
            onChange={validation}
          />
          {comment ? "" : <p style={{ color: 'red' }} className="comment-error">Comment must be atleast 5 characters.</p>}
        </div>
        <button type='submit' >Submit</button>
      </form>
    </div>
  )
}

export default App;
