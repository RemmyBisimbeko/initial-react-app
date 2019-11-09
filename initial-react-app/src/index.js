import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// import App from './App';
// import * as serviceWorker from './serviceWorker';
import Hello from './Hello';
import HelloWorld from './HelloWorld';
import Clock from './Clock';


function App() {
  
    return (  
        <div> 
            <Hello name="Kapere" age="20" />
            <Hello name="Mumanye"age="23" />
            <HelloWorld country="Uganda" />

            <br></br>
            <Clock />
        </div>
    );
  }

ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
// serviceWorker.unregister();
