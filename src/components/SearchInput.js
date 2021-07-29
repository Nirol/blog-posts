

import React from 'react';


class SearchInput extends React.Component {


  constructor(props) {
    super(props)
    this.state = { entry: '' }

    //one way to bind onFormSubmit:
    // this.onFormSubmit = this.onFormSubmit.bind(this)
  }

  // onFormSubmit(event) {
  //   event.preventDefault()
  //     console.log(this.state.entry)

  // }

  // another option is to move into arrow function that will automaticlly bind the method:
  onFormSubmit = (event) => {
    event.preventDefault()
    console.log(this.state.entry)
  }


  render() {

    return (
      <div className="ui segment">
        <form onSubmit={this.onFormSubmit} className="ui form" >
          <div className="field">
            <div className="ui massive icon input">

              <input type="text" placeholder="search" onChange={(event => this.setState({ entry: event.target.value }))} value={this.state.entry} />
              <i className="search icon"></i>

            </div>

          </div>



        </form>
      </div>
    )
  }
}


export default SearchInput;