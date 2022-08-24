import React from 'react'
import './sidebar.css'
const Sidebar = ({name,
    capital,
    population,
    region,
    flags,settoggle}) => {

        console.log(name,
            capital,
            population,
            region,
            flags)

  return (
    <div className='sidebar_container'>
        <div className='sidebar_blank'>

        </div>
        <div className='sidebar_main'>
            <div className='header'>
                <div>
                    <h3>Information</h3>
                </div>
                <div className='close' onClick={()=>settoggle(false)}>
                    
                </div>
            </div>
            <div className='flag'>
                <img src={flags.svg} alt="flag" width="100%" height="100%"/>
            </div>
            <div className='country'>
                <h3>
                    {name}
                </h3>
            </div>
            <div className='body'>
                <h4>Capital:-  {capital}</h4>
                <h4>Region:-  {region}</h4>
                <h4>Population:-   {population}</h4>
                
            </div>
        </div>
      
    </div>
  )
}

export default Sidebar
