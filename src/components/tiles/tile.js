import React from 'react'

 const Tile = (props) => {
   const { showTileValue, tileValue, id} = props
   const tileDisplay = showTileValue ? tileValue : ''
   return(
    <button className="tile" data-value={tileValue} data-id={id} >
      { tileDisplay }
    </button>
  )
}

Tile.propTypes = {
  showTileValue: React.PropTypes.bool.isRequired,
  tileValue: React.PropTypes.string.isRequired,
  id: React.PropTypes.number.isRequired
}

export default Tile
