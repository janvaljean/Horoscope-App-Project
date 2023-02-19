import React from 'react'
import "./Card.scss"
const Card = ({data}) => {
  return (
    <div className='cardContainer'>
      {data.map(({id, title, desc, image}) => {
        return(
            
            <div key={id} className='card' style="width: 18rem;">
                <img src={image} className="card-img-top" alt="..."/>
                <div className="card-body">
                  <h3>{title}</h3>
                  <p className="card-text">{desc}</p>
                </div>
            </div>
        )

      }   
      )}      
    </div>
  )
}

export default Card
