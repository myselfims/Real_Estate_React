import React from 'react'
import Card from '../components/Card'

const Listing = ({data}) => {
  return (
    <div className='listing w-full mt-8 flex flex-wrap justify-between'>
        {data.map((item)=>{
            return(
                <Card key={item.id} data={item}/>
            )
        })}
    </div>
  )
}

export default Listing
