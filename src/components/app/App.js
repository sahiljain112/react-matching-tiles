import React, { Component } from 'react';
import Tile from '../tiles/tile'
import './App.css';

class App extends Component {

  constructor(props){
    super(props)
    this.state = {
      tiles: [],
      prevTileValue: null
    }
    this.handleTileClick = this.handleTileClick.bind(this)
    this.shuffle = this.shuffle.bind(this)
  }

  // handleTileClick(event) {
  //
  //   event.preventDefault()
  //   if(event.target && event.target.nodeName === "BUTTON"){
  //   //   console.log(this)
  //     const dataSet = event.target.dataset
  //     const { value, id } = dataSet
  //     const { prevTile, tiles } = this.state
  //     const { TILE_COUNT } = this.props
  //     let newTile;
  //     const tileID = parseInt(id, 10)
  //
  //     if(prevTile === null){
  //       console.log('prevTile is null now')
  //       const tileIndex = tiles.findIndex(tile => {
  //         return tile.props.id === tileID
  //       })
  //
  //       newTile = <Tile key={tileID} id={tileID} showTileValue={true} tileValue={value} />
  //       tiles[tileIndex] = newTile
  //     //  console.log(tileIndex, tiles.length)
  //     }
  //     else{
  //       if(prevTile.props.tileValue === value && prevTile !== event.target){
  //         console.log('Prev tile and new tile value matches')
  //         const tileIndex = tiles.findIndex(tile => tile.props.id === tileID)
  //         const lastIndex = tiles.findIndex(tile => tile.props.id === (tileID + TILE_COUNT))
  //         tiles[tileIndex] = <Tile key={tileID} id={tileID} showTileValue={true} tileValue={value} />
  //         tiles[lastIndex] = <Tile key={tileID + TILE_COUNT} id={tileID + TILE_COUNT} showTileValue={true} tileValue={value} />
  //       }
  //       else {
  //         console.log('Prev tile and new tile value does not match')
  //         const prevIndex = tiles.findIndex(tile => tile.props.id === prevTile.props.id)
  //         const tileIndex = tiles.findIndex(tile => tile.props.id === tileID)
  //         tiles[prevIndex] = <Tile key={prevTile.props.id} id={prevTile.props.id} showTileValue={false} tileValue={value} />
  //         tiles[tileIndex] = <Tile key={tileID} id={tileID} showTileValue={false} tileValue={value} />
  //       }
  //       newTile = null
  //     }
  //     this.setState({ prevTile: newTile, tiles})
  //   }
  // }

  handleTileClick(event) {
    event.preventDefault()
    if(event.target && event.target.nodeName === "BUTTON"){
      const dataSet = event.target.dataset
      const { value, id: myId } = dataSet
      const { prevTileValue , tiles } = this.state
      let newTileValue
      const id = parseInt(myId, 10)
      if(prevTileValue === null){
        const tileIndex = tiles.findIndex(tile => tile.id === id)
        newTileValue = Object.assign({}, tiles[tileIndex])
        tiles[tileIndex].showTileValue = true
      }
      else{
        if(prevTileValue.tileValue === value && prevTileValue.id !== id){
          const tileIndex1 = tiles.findIndex(tile => tile.id === id)
          const tileCloneIndex = tiles.findIndex(tile => tile.id === prevTileValue.id)

          tiles[tileIndex1].showTileValue = true
          tiles[tileCloneIndex].showTileValue = true

        }
        else {
          const tileIndex2 = tiles.findIndex(tile => tile.id === prevTileValue.id)
          tiles[tileIndex2].showTileValue = false
        }
        newTileValue = null
      }
      this.setState({ prevTileValue: newTileValue, tiles})
    }
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
      const tile = {
        key: i,
        id: i,
        showTileValue: false,
        tileValue
      }
      const tileClone = Object.assign({}, tile, { key: i + TILE_COUNT, id: i + TILE_COUNT })
      tiles.push(tile)
      tiles.push(tileClone)
      // tiles.push(<Tile key={i + TILE_COUNT} id={parseInt(i + TILE_COUNT, 10)} showTileValue={false} tileValue={tileValue} />)
    }
    this.shuffle(tiles)
    this.setState({ tiles })
  }

  render() {
    const { tiles } = this.state
    console.log(tiles, 'My state')
    return (
      <div className="tile-container" onClick={this.handleTileClick} >
        { tiles.map(tile => <Tile key={tile.key} id={tile.id} showTileValue={tile.showTileValue} tileValue={tile.tileValue} />) }
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
