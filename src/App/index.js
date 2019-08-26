import React from 'react';
import { Provider } from 'react-redux'
import {  Spinner } from 'react-bootstrap';
import '../App.css';
import store from '../redux/store';
import Routes from '../views/Routes';

function LoadingMessage() {
  return (
    <div className="splash-screen">
      <Spinner animation="border" variant="primary" />
    </div>
  );
}

class App extends React.Component {
  constructor() {
    super()
    this.state = {
      loading: true
    }
  }
  componentDidMount() {
    setTimeout(() => {
      this.setState({ loading: false })

    }, 2500);
  }

  render() {
    if (this.state.loading) return LoadingMessage();
    return (
      <Provider store={store}>
        <Routes />
      </Provider>
    );
  }
}

export default App;
