import React from 'react'
import {IoIosHeartEmpty} from 'react-icons/io'
import {LuBedSingle} from 'react-icons/lu'
import {BiBath} from 'react-icons/bi'
import {BiSquare} from 'react-icons/bi'

const Card = ({data}) => {
  return (
    <div className='text-black mb-6 overflow-hidden bg-white w-80 rounded-md border'>
      <div className="poster">
        <img className='w-full h-48 transition-all cursor-pointer hover:scale-110' src={data?.image} alt="" />
      </div>
      <div className="info p-5">
        <div className='flex justify-between'>
            <p className='text-slate-400'><strong className='text-purple-600 text-2xl'>${data?.rent}</strong>/month</p>
            <button className='rounded-full border p-2 text-purple-500 font-bold'><IoIosHeartEmpty/></button>
        </div>
        <div>
            <h1 className='font-bold text-2xl'>{data?.title}</h1>
            <p className='text-slate-500 my-3'>{data?.address}</p>

        </div>

        <div className='flex items-center pt-3 justify-between text-slate-500 border-t-2'> 
            <p className='flex items-center text-center'><LuBedSingle className='inline mr-1 text-purple-500'/>{data?.beds} Beds</p>
            <p className='flex items-center text-center'><BiBath className='inline mr-1 text-purple-500'/>{data?.bathrooms} Bathrooms</p>
            <p className='flex items-center text-center'><BiSquare className='inline mr-1 text-purple-500'/> {data?.size}<sup>2</sup></p>
        </div>


      </div>

    </div>
  )
}

export default Card
