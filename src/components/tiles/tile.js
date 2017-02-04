import React from 'react'

 const Tile = (props) => {
   const { showTileValue, tileValue} = props
   const tileDisplay = showTileValue ? tileValue : ''
  return(
    <div className="tile" data-value={tileValue}>
      { tileDisplay }
    </div>
  )
}

export default Tile
