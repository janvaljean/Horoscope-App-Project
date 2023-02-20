import React from 'react'
import data from "../../helper/data"
import Card from './Card'
import "./Main.scss"

const Main = () => {
  return (
    <div className='mainContainer'>
      <Card data= {data}/> 
    
    </div>
  )
}

export default Main
