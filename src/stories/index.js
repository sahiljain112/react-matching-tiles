import React from 'react';
import { storiesOf, action, linkTo } from '@kadira/storybook';
import App from '../components/app/App'
import Tile from '../components/tiles/tile'
// import Button from './Button';
// import Welcome from './Welcome';
//
// storiesOf('Welcome', module)
//   .add('to Storybook', () => (
//     <Welcome showApp={linkTo('Button')}/>
//   ));
//
// storiesOf('Button', module)
//   .add('with text', () => (
//     <Button onClick={action('clicked')}>Hello Button</Button>
//   ))
//   .add('with some emoji', () => (
//     <Button onClick={action('clicked')}>😀 😎 👍 💯</Button>
//   ));

const tileDisplay = {
    background: 'white',
    padding: '10rem'
  }

const tileHidden = {
  key: 1,
  id: 2,
  showTileValue: false,
  tileValue: 'A'
}

const tileVisible = Object.assign({}, tileHidden, { showTileValue: true})

storiesOf('The layout', module)
  .add('Default view', () => <App /> )

storiesOf('A tile in the layout', module)
  .add('Simple tile with hidden value', () => {
    return(
      <div style={tileDisplay}>
        <Tile key={tileHidden.key} id={tileHidden.id} showTileValue={tileHidden.showTileValue} tileValue={tileHidden.tileValue} />
      </div>
    )
  })
  .add('Simple tile with shown value', () => {
    return(
        <div style={tileDisplay}>
            <Tile key={tileVisible.key} id={tileVisible.id} showTileValue={tileVisible.showTileValue} tileValue={tileVisible.tileValue} />
        </div>
    )
  })
