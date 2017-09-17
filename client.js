import React from 'react';
import { render } from 'react-dom';
import {Router, Route, IndexRoute, browserHistory} from 'react-router';

import App from './components/App/App';
import List from './components/List/List';

import Whoops404 from "./components/Whoops404/Whoops404";

render(
    <Router history={ browserHistory }>
        <Route path="/" component={App}>
            <IndexRoute component={List}/>

            <Route path="*" component = {Whoops404}/>
        </Route>
    </Router>,
    document.getElementById('root')
);
