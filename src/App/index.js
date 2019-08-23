import React from 'react';
import { Provider } from 'react-redux'
import '../App.css';
import store from '../redux/store';
import Routes from '../views/Routes';

function App() {
  return (
    <Provider store={store}>
      <Routes />
    </Provider>
  );
}

export default App;
