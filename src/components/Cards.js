import React from 'react'
import CardItem from './CardItem';
import './Cards.css';

function Cards() {
  return (
    <div className='cards'>
        <h1>Check out these EPIC Destinations</h1>
        <div className='cards__container'>
            <div className='cards__wrapper'>
                <ul className='cards__items'>
                    <CardItem 
                      src='images/img-9.jpg'
                      text='Explore the hideen waterfall deep inside the Amazon jungle'
                      label='Adventure'
                      path='/services'
                    />
                     <CardItem 
                      src='images/img-2.jpg'
                      text='Travel through the Islands of Bali in a private cruise'
                      label='Luxury'
                      path='/services'
                    />
                    <CardItem 
                      src='images/img-3.jpg'
                      text='Set Sail in the Atlantic Ocean visiting'
                      label='Luxury'
                      path='/services'
                    />
                </ul>
                <ul className='cards__items'>
                    <CardItem 
                      src='images/img-1.jpg'
                      text='Explore the hideen waterfall deep inside the Amazon jungle'
                      label='Adventure'
                      path='/services'
                    />
                     <CardItem 
                      src='images/img-6.jpg'
                      text='Experience nature and meeting new people'
                      label='Tourism'
                      path='/services'
                    />
                    <CardItem 
                      src='images/img-4.jpg'
                      text='Explore the hidden arena of sport'
                      label='Sport'
                      path='/services'
                    />
                </ul>
            </div>
        </div>
    </div>
  )
}

export default Cards