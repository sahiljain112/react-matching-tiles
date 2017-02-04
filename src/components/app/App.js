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
  }

  handleTileClick() {
    console.log('Tile clicked')
  }

  componentDidMount() {
    const tiles = []
    const { TILE_COUNT } = this.props

    for(let i = 0 ; i < TILE_COUNT; i++){
      tiles.push(<Tile key={i} showTileValue={true} tileValue='A' />)
    }
    this.setState({ tiles })
  }

  render() {
    const { tiles } = this.state
    return (
    <div className="tile-container">
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
