import React from 'react';
import ReactDOM from 'react-dom';
import SeasonDisplay from './SeasonDisplay';
import Loader from './Loader';

class App extends React.Component {
  // constructor(props) {
  //   super(props);

  //   // THIS IS THE ONLY DIRECT ASSIGNMENT TO this.state
  //   // every other assignment should be with this.setState (see below)
  //   this.state = { lat: null, errorMessage: '' };
  // }

  // THIS IS THE SAME AS THE CONSTRUCTOR FUNCTION ABOVE
  state = { lat: null, errorMessage: '' };

  componentDidMount() {
    window.navigator.geolocation.getCurrentPosition(
      (position) => this.setState({ lat: position.coords.latitude }),
      (err) => this.setState({ errorMessage: err.message })
    );
  }

  renderContent() {
if (this.state.errorMessage && !this.state.lat) {
      return <div>Error: {this.state.errorMessage}</div>;
    }

    if (!this.state.errorMessage && this.state.lat) {
      return <SeasonDisplay lat={this.state.lat} />
    }

    return <Loader message='Please accept location request' />;
  }

  render() {

  }   
}

ReactDOM.render(<App />, document.querySelector('#root'));
