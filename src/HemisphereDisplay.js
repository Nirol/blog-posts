import React from 'react';
import north from './image/north.gif'
import south from './image/south.png'
import './hemisphere.css'

const HemisphereConfig = {

  north: {
    text: "You are in the Northen hemisphere",
    picture: north
  },

  south: {
    text: "You are in the Southern hemisphere",
    picture: south
  },

}

const HemisphereDisplay = ({ latitude }) => {

  const hemisphereConfig = latitude > 0 ? HemisphereConfig['north'] : HemisphereConfig['south']
  const { text, picture } = hemisphereConfig
  console.log(picture)
  return (
    <div className="Hemisphere">
      <div className="ui raised text container segment">

        <div className="image">
          <img src={picture} alt="hemisphere" />
        </div>

        <div className="ui teal bottom attached label">
          <h1>{text}</h1>
        </div>

      </div>

    </div>
  )

}


export default HemisphereDisplay;