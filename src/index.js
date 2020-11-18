import React from 'react';
import ReactDOM from 'react-dom';
import 'semantic-ui-css/semantic.min.css';
import App from './components/App';
import Auth from './components/Auth'
import * as serviceWorker from './serviceWorker';
import {Route, BrowserRouter } from 'react-router-dom';
import { CookiesProvider } from 'react-cookie';

function Router(){
    return (
        <CookiesProvider>
            <BrowserRouter>
                <Route exact path="/" component= {Auth} />
                <Route exact path="/quiz" component= {App} />
            </BrowserRouter>  
        </CookiesProvider>
    )
}
ReactDOM.render(<Router />, document.getElementById('root'));

serviceWorker.register();
