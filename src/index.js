import React from 'react';
import { useEffect} from 'react';
import ReactDOM from 'react-dom';
import ReactGA from 'react-ga';
import './index.css';
import App from './App';
import Bookshelf from './components/BookShelfPage/BookshelfPage';
import Hobbies from './components/HobbiesPage/HobbiesPage';
import Projects from './components/ProjectsPage/ProjectsPage';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import createHistory from 'history/createBrowserHistory'
import { Switch } from 'react-router-dom'
import * as serviceWorker from './serviceWorker';

ReactGA.initialize("UA-161444419-1");

const history = createHistory()
history.listen(location => {
	ReactGA.set({ page: location.pathname })
	ReactGA.pageview(location.pathname)
})



const RoutedApp = () => {
    useEffect(() => {
        ReactGA.pageview(window.location.pathname)
    });
    return(
        <Router history={history}> 
            <Switch>
                <Route path='/bookshelf' component={Bookshelf}/>
                <Route path='/hobbies' component={Hobbies}/>
                <Route path='/projects' component={Projects} /> 
                <Route path='/' component={App} />
            </Switch>
        </Router>)
};

ReactDOM.render(<RoutedApp/>, document.getElementById('root'));




// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
