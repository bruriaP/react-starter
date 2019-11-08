import React from 'react';
import classes from './App.module.css';

function App() {
   return (
      <div className='App'>
         <header className={classes.header}>
            <p>Created By NahumMor</p>
            <p>React + Node.JS + MongoDB starter project</p>
            <p>
               Edit <code>src/App.js</code> and save to reload.
            </p>
            <a
               className={classes.AppLink}
               href='https://he.reactjs.org/'
               target='_blank'
               rel='noopener noreferrer'>
               Learn React
            </a>
         </header>
      </div>
   );
}

export default App;
