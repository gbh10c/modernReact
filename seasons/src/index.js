import React from 'react';
import ReactDOM from 'react-dom';

class App extends React.Component {
  constructor(props) {
    super(props);

    // THIS IS THE ONLY DIRECT ASSIGNMENT TO this.state
    // every other assignment should be with this.setState (see below)
    this.state = { lat: null };

    window.navigator.geolocation.getCurrentPosition(
      (position) => {
        // setState called to update!
        this.setState({ lat: position.coords.latitude });

        // THIS DOES NOT WORK:
          // this.state.lat = position.coords.latitude
        // NEVER CREATE A DIRECT ASSIGNMENT TO A STATE OBJECT!!!
      },
      (err) => console.log(err)
    );
  }

  // React says we have to define render!
  render() {
    return <div>Latitude: {this.state.lat}</div>;
  }
}

ReactDOM.render(<App />, document.querySelector('#root'));
