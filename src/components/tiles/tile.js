import React from 'react'

 const Tile = (props) => {
  const tileValue = props.showTileValue ? props.tileValue : ''
  return(
    <div className="tile">
      {tileValue}
    </div>
  )
}

export default Tile
