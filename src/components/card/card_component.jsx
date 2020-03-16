/* jshint esversion: 9 */

import React from 'react';
import './card.css'

export const Card = props => (
  <div className='card-container'>
    {/* {console.log(props.monster.name)} */}
    <img 
      alt='monster'
      src={`https://robohash.org/${props.monster.id}?set=set2&size=180x180`}
    />
    <h2> {props.monster.name} </h2>
    <p> {props.monster.email} </p>
  </div>
);

//* the same and it works

export default class Card2 extends React.Component {
  render() {
    return(
      <div className='card-container'>
        {console.log(this.props.monster.name)}
        <h2> {this.props.monster.name} </h2>
      </div>
    );
  }
}
