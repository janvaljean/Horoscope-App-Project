import React from 'react'
import "./Card.scss"
const Card = ({data}) => {
  return (
    <div className='cardContainer'>
      {data.map(({id, title, desc, image}) => {
        return(
          <div key={id} className='row'>
            <div className="column">
              <div key={id} className='card' style={{ backgroundImage: `url(${image})` ,
                  backgroundSize: 'cover',
                  width:'100%' }}>
                <h3>{title}</h3>
                <p className="card-text">{desc}</p>
               </div>
             </div>
            </div>
  
        )

      }   
      )}      
    </div>
  )
}

export default Card
