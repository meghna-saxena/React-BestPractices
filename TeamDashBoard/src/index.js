import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, browserHistory } from 'react-router';
import { firebaseApp } from './firebase';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import App from './components/app';
import { logUser } from './actions';
import reducer from './reducers';
import SignIn from './components/signin';
import SignUp from './components/signup';

const store = createStore(reducer, {}, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

firebaseApp.auth().onAuthStateChanged(user => {
    if(user) {
        // console.log('User has signed in or signed up', user);
        const { email } = user;
        store.dispatch(logUser(email));
        browserHistory.push('/app');
    } else {
        // console.log('User has signed out or still needs to signin', user);
        browserHistory.replace('/signin');
    }
})

ReactDOM.render (
    <Provider store={store}>
        <Router path="/" history={browserHistory}>
        <Route path="/app" component={App} />
        <Route path="/signin" component={SignIn} />
        <Route path="/signup" component={SignUp} />
    </Router>
    </Provider>, document.querySelector('#root')
)