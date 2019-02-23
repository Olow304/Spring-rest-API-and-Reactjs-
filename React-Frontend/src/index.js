import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Edit from './components/EditContact';
import Create from './components/CreateContact';
import Show from './components/ViewContact';
import * as serviceWorker from './serviceWorker';
import { BrowserRouter as Router, Route } from 'react-router-dom';

//ReactDOM.render(<App />, document.getElementById('root'));

const element = document.getElementById('root');

const render = () => {
    ReactDOM.render(
        <Router>
            <div>
                <Route exact path='/' component={App} />
                <Route path='/edit/:id' component={Edit} />
                <Route path='/create' component={Create} />
                <Route path='/show/:id' component={Show} />
            </div>
        </Router>, element
    )
}

if(module.hot){
    module.hot.accept('./App', () => {
        setTimeout(render)
    })
}

render()
// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
