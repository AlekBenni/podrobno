import React from 'react';
import './App.css';

function App() {

  return (
    <div>
      <div className='alert bg-dark text-white text-center'>
      <h1>This is App header</h1>
      </div>
      <div className='container'>
    <Rating/>
    <Accordion/>       
      </div>

    </div>
  );

}

function Rating(){
  return (
    <div>
      <Star/>
      <Star/>
      <Star/>
    </div>
  )
}

function Star(){
  return (
      <div>star</div>
  )
}

function Accordion(){
  return(
    <div>
      <h3>Menu:</h3>
      <ul>
        <li>1</li>
        <li>2</li>
        <li>3</li>
      </ul>
    </div>
  )
}

export default App;
