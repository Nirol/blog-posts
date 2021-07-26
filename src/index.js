import React from 'react';
import ReactDOM from 'react-dom';


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

  constructor(props) {
    super(props)
    this.state = { latitude: null, errorMessage: '' }
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



    return (
      < div >
        {this.state.latitude}
        {this.state.errorMessage}-
      </div >

    )

  }
}


ReactDOM.render(
  <App />,
  document.getElementById('root')
);
