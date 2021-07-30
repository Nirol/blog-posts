

import React from 'react';
import SearchInput from './SearchInput';
import axios from 'axios';
import ImageList from './ImageLIst'

const PIXABAY_URL = "https://pixabay.com/api/"
const PIXABAY_API_KEY = "22708682-754444c59019b293b59d26b70"
class App extends React.Component {


  constructor(props) {
    super(props)
    this.onSearchSubmit = this.onSearchSubmit.bind(this)
    this.state = { images: [] }
  }

  async onSearchSubmit(entry) {
    const params = new URLSearchParams();
    params.append('key', PIXABAY_API_KEY);
    params.append('q', entry);
    params.append('image_type', "photo");
    params.append('pretty', "true");

    const response = await axios.get(PIXABAY_URL, {
      params: params
    })
    this.setState({ images: response.data.hits })
    console.log(response.data.hits)

  }

  render() {


    return (

      <div className="ui container" style={{ marginTop: '30px' }}>
        <SearchInput onSearchSubmit={this.onSearchSubmit} />
        <ImageList images={this.state.images} />
      </div>

    )
  }
}

export default App;