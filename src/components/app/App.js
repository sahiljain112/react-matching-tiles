import React, { Component } from 'react';
import Tile from '../tiles/tile'
import './App.css';

class App extends Component {

  constructor(props){
    super(props)
    this.state = {
      tiles: ''
    }
    this.handleTileClick = this.handleTileClick.bind(this)
    this.shuffle = this.shuffle.bind(this)
  }

  handleTileClick() {
    console.log('Tile clicked')
  }

  shuffle(tiles) {
    let counter = tiles.length;
    while (counter > 0) {
        let index = Math.floor(Math.random() * counter);
        counter--;
        let temp = tiles[counter];
        tiles[counter] = tiles[index];
        tiles[index] = temp;
    }
  }

  componentDidMount() {
    let tiles = []
    const { TILE_COUNT } = this.props

    for(let i = 0 ; i < TILE_COUNT/2 ; i++){
      const tileValue = String.fromCharCode(65 + i)
      tiles.push(<Tile key={i} showTileValue={true} tileValue={tileValue} />)
      tiles.push(<Tile key={i + TILE_COUNT} showTileValue={true} tileValue={tileValue} />)
    }
    this.shuffle(tiles)
    this.setState({ tiles })
  }

  render() {
    const { tiles } = this.state
    return (
    <div className="tile-container" onClick={this.handleTileClick} >
      { tiles }
    </div>

    );
  }
}

App.defaultProps = {
  TILE_COUNT: 16
}

App.propTypes = {
  TILE_COUNT: React.PropTypes.number
}

export default App;
