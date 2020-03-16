/* jshint esversion:9 */
import React from 'react';
import './card_list.css';
import {Card} from '../card/card_component';


export const CardList = props => (
  // console.log(props);
  <div className='card-list'>
    {
      props.monsters.map(
        monster => <Card key={monster.id} monster={monster} />
      )
    }
  </div>
);