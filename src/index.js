import React from 'react';
import ReactDOM from 'react-dom';
import HemisphereDisplay from './HemisphereDisplay'

// the old functional component, cannot use state ( not including hooks )

// const App = () => {
//   window.navigator.geolocation.getCurrentPosition(
//     // the sucess callback
//     (position) => console.log(position),

//     // the failure callback
//     (error) => console.log(error)

//   );
//   return (
//     <div>

//        You are in the north hemosphere
//     </div>
//   )
// }

class App extends React.Component {


  // avoid using the constructor for init class state
  state = { latitude: null, errorMessage: '' }

  // move loading geolocation into componentDidMount
  componentDidMount() {
    window.navigator.geolocation.getCurrentPosition(
      // the sucess callback
      (position) => {
        this.setState({ latitude: position.coords.latitude })
      },

      // the failure callback
      (error) => {
        this.setState({ errorMessage: error.message })
      },

    )
  }

  render() {

    if (!this.state.errorMessage && this.state.latitude) {
      return (
        <div>
          <HemisphereDisplay latitude={this.state.latitude} />

        </div>
      )
    }
    else if (this.state.errorMessage && !this.state.latitude) {
      return (
        <div>
          {this.state.errorMessage}
        </div>
      )
    }
    else {
      return (
        <div>
          Loading...
        </div>
      )
    }



  }
}


ReactDOM.render(
  <App />,
  document.getElementById('root')
);
