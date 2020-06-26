import React from 'react';
import ReactDOM from 'react-dom';
import './App.css';
import Car from './App.js';

/* render: returns a description of what you want to see on the screen */


class MyHeader extends React.Component {
    render() {
        return(
            <div>
                
                <h1>Hello Style!</h1>
                <p>Add a little style!</p>

            </div>
        );
    }
}

ReactDOM.render(<MyHeader />, document.getElementById('root'));

ReactDOM.render(<Car />, document.getElementById('root'));

class App extends React.Component {
    render() {
        return (
            <div className="App">
                <h1> Hello World! </h1>
            </div>
        );
    }
}
export default App;

ReactDOM.render(<App />, document.getElementById('root'));