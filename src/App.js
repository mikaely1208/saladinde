
import './App.css';
import React, { useState } from 'react';
import Header from './header';
import {StyleSheet, Text, View, TextInpput} from 'react';

function App() {
  const [name, setName] = useState('');
  const [age, setAge] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    alert(`Bienvenu à Saladinde ${name}`)
  }
  return (
    <div className='info'>
      <form onSubmit={handleSubmit}>

        <label> <p>Tu t'appelles :</p>
          <input 
            type="text" 
            value={name} 
            onChange={(event) => setName(event.target.value)}
          />
        </label>
    
        <label> <p>et tu as :</p>
          <input
            type="text" 
            value={age} 
            onChange={(event) => setAge(event.target.value)}
          />
        </label>

        <input id='submit'
          type="submit" 
          value="OK" 
          />
      </form>

       tu es {name}, et tu as {age} ans

    </div>

     
    );
}



export default App;

