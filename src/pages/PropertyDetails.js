import React from 'react'

import { Link } from 'react-router-dom'

import { BiBed, BiBath, BiArea} from 'react-icons/bi'

import { useParams } from 'react-router-dom'

import { housesData } from '../data'

const PropertyDetails=()=> {

  //get the house id

  const { id } =useParams();
  //console.log(id)

  //getting the house based on the id

  const house=housesData.find((house) => {
    return house.id === parseInt(id)
  })

  


  return (
    <section>
      <div className='container mx-auto min-h[800px] mb-14'>
        <div className='flex flex-col lg:flex-row lg:items-center lg:justify-between'>
          <div>
           <h2 className='text-2xl font-semibold'>{house.name}</h2>
           <h3 className='text-lg mb-4'>{house.address}</h3>
          </div>

          <div className='mb-4 lg:mb-0 flex gap-x-2 text-sm'>
            <div className='bg-green-500 rounded-full text-white px-3 '>{house.type}</div>
            <div className='bg-violet-500 rounded-full text-white px-3 '>{house.country}</div>
          </div>

          <div className='text-3xl font-semibold text-violet-600'>$ {house.price}</div>

        </div>
        
        <div className='flex flex-col lg:flex-row lg:items-center lg:justify-between'>
          <div className='max-w-[768px]'>
            <div className='mb-8'>
              <img src={house.imageLg} alt='' />
            </div>

            <div className='flex gap-x-4 text-violet-600 mb-6  lg:flex-row lg:items-center '>
              <div className='flex gap-x-2'>
                <BiBed className='text-2xl inline-block'/>
                <div>{house.bedrooms}</div>
              </div>
              <div className='flex gap-x-2'>
                <BiBath className='text-2xl'/>
                <div>{house.bathrooms}</div>
              </div>
              <div className='flex gap-x-2'>
                <BiArea className='text-2xl'/>
                <div>{house.surface}</div>
              </div>
            </div>
            <div>{house.description}</div>
          </div>

          


        </div>    
      </div>
    </section>
  )
}

export default PropertyDetails