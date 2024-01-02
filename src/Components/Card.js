import React, { useState } from 'react'

const Card = ({id,name,image,info,price,removeTour}) => {
    const[readmore,setReadmore] = useState(false);


    const description = readmore ? info :`${info.substring(0,200)}....`
   
    function readmoreHndler()
    {
        setReadmore(!readmore);
    }
    

  return (
    <div className='card'>
        <img src={image} alt='good' className="image"></img>
       
        <div className='tour-info'>
        <div className='tour-details'>
            <h4 className='tour-price'>₹{price}</h4>
            <h4 className='tour-name'>{name}</h4>
        </div>
           
            <div className='description'>
                {description }
                <span className='read-more' onClick={readmoreHndler}>
                    {readmore ? `showless`:`read more`}
                </span>
            </div>
        </div>
            <button className='btn-red' onClick={()=>removeTour(id)}>
                NOT INTERESTED
            </button>
    </div>
  )
}

export default Card;