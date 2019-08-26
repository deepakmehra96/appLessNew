import React from 'react';
import { Provider } from 'react-redux'
import '../App.css';
import store from '../redux/store';
import Routes from '../views/Routes';
import Spinner from '../components/Spinner';

function LoadingMessage() {
  return (
  <Spinner/>
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

  LoadingMessage = () => {
        return (
            <Spinner />
        );
    }
   

  render() {
    let { loading } = this.state 
    if (loading) return this.LoadingMessage();
    return (
      <Provider store={store}>
        <Routes />
      </Provider>
    );
  }
}

export default App;
