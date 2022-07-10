import React,{useState, createContext, useEffect} from 'react'
import {housesData} from '../data'

//create context

export const HouseContext=createContext();

const HouseContextProvider = ({ children})=>{
    const [houses,setHouses]=useState(housesData)
    const [country,setCountry]=useState('Location (any)')
    const [countries,setCountries]=useState([])
    const [property,setProperty]=useState('Property type (any)')
    const [properties,setProperties]=useState([])
    const [price,setPrice]=useState('Price Range (any)')
    const [loading,setLoading]=useState(false)

    useEffect(()=>{
        const allCountries=houses.map((house)=>{
            return house.country
        })
        let uniqueArray = ['Location (any)',...new Set(allCountries)];

        setCountries(uniqueArray)
        
    },[])

    useEffect(()=>{
        const allProperties=houses.map((house)=>{
            return house.type
        })
        let uniqueHouse = ['Property type (any)',...new Set(allProperties)];

        setProperties(uniqueHouse)
        
    },[])

    const handleClick=()=>{
        
        setLoading(true)

        // is string default ?

        const isDefault =(str)=> {
            return str.split(' ').includes('(any)');
        }
  
      const minPrice=parseInt(price.split(' ')[0]);
      const maxPrice=parseInt(price.split(' ')[2]);
      
      const newHouses=housesData.filter((house)=>{
         const housePrice=parseInt(house.price)

         //if all values are selected 

         if(house.country === country &&
             house.type === property && 
             housePrice >= minPrice &&
              housePrice <= maxPrice){
                return house;
              }

         // all values are default
      if (isDefault(country) && isDefault(property) && isDefault(price)) {
        return house;
      }
      // country is not default
      if (!isDefault(country) && isDefault(property) && isDefault(price)) {
        return house.country === country;
      }
      // property is not default
      if (!isDefault(property) && isDefault(country) && isDefault(price)) {
        return house.type === property;
      }
      // price is not default
      if (!isDefault(price) && isDefault(country) && isDefault(property)) {
        if (housePrice >= minPrice && housePrice <= maxPrice) {
          return house;
        }
      }
      // country and property is not default
      if (!isDefault(country) && !isDefault(property) && isDefault(price)) {
        return house.country === country && house.type === property;
      }
      // country and price is not default
      if (!isDefault(country) && isDefault(property) && !isDefault(price)) {
        if (housePrice >= minPrice && housePrice <= maxPrice) {
          return house.country === country;
        }
      }
      // property and price is not default
      if (isDefault(country) && !isDefault(property) && !isDefault(price)) {
        if (housePrice >= minPrice && housePrice <= maxPrice) {
          return house.type === property;
        }
      }
      });

      setTimeout(()=>{
        return newHouses.length < 1 ? setHouses([]) : setHouses(newHouses),
        setLoading(false)
      },1000)
    }

  return (
    <HouseContext.Provider value={{
        houses,
        country,
        setCountry,
        countries,
        property,
        setProperty,
        properties,
        setProperties,
        price,
        setPrice,
        loading,
        setLoading,
        handleClick
    }}>{children}</HouseContext.Provider>
  )
}

export default HouseContextProvider