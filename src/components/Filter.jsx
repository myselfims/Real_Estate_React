import React, { useState, useRef } from 'react'
import {IoIosArrowDropdown} from 'react-icons/io'
import {MdDateRange,MdOutlineCancel} from 'react-icons/md'


const Filter = ({}) => {

    const [location, setLocation] = useState('')
    const [date, setDate] = useState('')
    const [price, setPrice] = useState('')
    const [type, setType] = useState('House')
    const [typedropdown, setTypeDropdown] = useState(false)
    const inputDate = useRef();

    const handleDate = () => {
      inputDate.current.showPicker();
      console.log(inputDate.current)
    };

    const handleType = (type)=>{
        setType(type)
        setTypeDropdown(false)
    }

   

  return (
    <div className='w-full bg-white justify-between p-5 flex rounded-md'>

        <div className=" border-r w-fit flex px-4 flex-col ">
            <label className='text-slate-500 font-bold' htmlFor="">Location</label>
            <div className='flex w-full justify-between items-center cursor-pointer'>
                <input value={location} onChange={(e)=>setLocation(e.target.value)} className='bg-transparent w-40 outline-none font-bold' type="text" placeholder='New York, USA'/>
                {location!=''?
                <MdOutlineCancel className='text-red-500' onClick={()=>setLocation('')} />
                :null}
            </div>
        </div>

        <div className=" border-r w-fit flex px-4 flex-col ">
            <label className='text-slate-500 font-bold' htmlFor="">When</label>
            <div className='flex w-full justify-between items-center cursor-pointer'>
                <label onClick={handleDate} className='font-bold cursor-pointer' htmlFor="date">{date?date:"Select Move-in date"}</label>
                <input onChange={(e)=>{setDate(e.target.value)}} type='date' ref={inputDate} className='hidden'/>
                <MdDateRange onClick={handleDate} className='ml-16 cursor-pointer'/>
            </div>
        </div>

        <div className=" border-r relative px-4 w-fit flex flex-col ">
            <label className='text-slate-500 font-bold' htmlFor="">Price</label>
            <div className='flex w-full justify-between items-center cursor-pointer'>
                <label className='font-bold' htmlFor="priceRange">$500-$2000</label>
                <IoIosArrowDropdown className='ml-16'/>
            </div>
            {/* <div className="rangeSlider w-64 flex justify-center right-0 left-0 mx-auto mt-14 absolute ">
                <input onChange={(e)=>setPrice(e.target.value)} className='w-full cursor-pointer accent-purple-500' name='priceRange' type="range" />
            </div> */}
        </div>

        <div className="relative border-r w-40 flex px-4 flex-col ">
            <label className='text-slate-500 font-bold' htmlFor="">Property Type</label>
            <div onClick={()=>{typedropdown?setTypeDropdown(false):setTypeDropdown(true)}} className='flex w-full justify-between items-center cursor-pointer'>
                <label className='font-bold' >{type}</label>
                <IoIosArrowDropdown className=''/>
            </div>
            {typedropdown?
            <div className="absolute rounded-md top-14 bg-white w-11/12 p-3">
                <ul>
                    <li onClick={()=>handleType('House')} className='py-2 border-b hover:text-purple-500 cursor-pointer'>Houses</li>
                    <li onClick={()=>handleType('Apartment')} className='py-2 border-b hover:text-purple-500 cursor-pointer'>Apartment</li>
                </ul>
            </div>
            :
            null
            }
        </div>

        <button className='ml-6 hover:opacity-70 px-6 bg-purple-500 text-white rounded-md'>Search</button>
      
    </div>
  )
}

export default Filter
