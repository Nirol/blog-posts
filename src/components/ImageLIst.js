
import React from 'react';

const ImageList = (props) => {

  const images = props.images.map((image) => <img key={image.id} src={image.webformatURL} alt={image.id} />)
  return (
    <div>
      {images}
    </div>
  )
}

export default ImageList