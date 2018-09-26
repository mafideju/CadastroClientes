// REACT
import React from 'react';
import ReactDOM from 'react-dom';

// REDUX // REACT-REDUX
import configStore from './store/configStore';
import { Provider } from 'react-redux';

// COMPONENTS
import { login, logout } from './actions/auth';
import LoadingPage from './components/LoadingPage';

// FIREBASE
import { firebase } from './firebase/firebase';

// MAIN COMPONENT
import AppRouter, { history } from './routers/AppRouter';

// STYLES
import './styles/index.scss';
import 'react-dates/lib/css/_datepicker.css';

// Arquivos de Teste (pasta ZONA)
// import './ZONA/promises';

const store = configStore();

const jsx = (
  <Provider store={store}>
    <AppRouter />
  </Provider>
);

let hasRendered = false;
const renderApp = () => {
  if (!hasRendered) {
    ReactDOM.render(jsx, document.getElementById('root'));
    hasRendered = true;
  }
};

ReactDOM.render(<LoadingPage />, document.getElementById('root'));

// ReactDOM.render(jsx, document.getElementById('root'));

firebase.auth().onAuthStateChanged(user => {
  if (user) {
    store.dispatch(login(user.uid));
    renderApp();
    if (history.location.pathname === '/') {
      history.push('/dashboard');
    }
  } else {
    store.dispatch(logout());
    renderApp();
    history.push('/');
  }
});
