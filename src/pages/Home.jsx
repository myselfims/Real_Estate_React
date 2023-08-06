import React, { useState } from 'react'
import Filter from '../components/Filter'
import Listing from './Listing'
import jsondata from '../data/data.json'
import {IoIosArrowDropdown} from 'react-icons/io'

const Home = () => {
  const [data, setData] = useState(jsondata)
  const [appliedfilters, setAppliedFilters] = useState([])


 

  return (
    <div className='home w-8/12 text-black'>
        <div className="flex justify-between mt-10 mb-7">
            <h1 className='font-bold text-4xl'>Search properties to rent</h1>

            <button className='p-2 bg-white border rounded-md '>
              Search with Search Bar
              <IoIosArrowDropdown className='inline ml-4' />
            </button>
        </div>
        <div className="filter">
            <Filter />
            {data?
              <Listing data={data} />
              :
            <div className='my-8'>
              <h1 className='font-bold text-red-400 text-2xl'>No records found!</h1>
            </div>
            }
        </div>
    </div>
  )
}

export default Home
