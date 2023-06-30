import React from 'react'
import { useLoaderData } from 'react-router-dom'
import axios from 'axios'
import SearchForm from '../components/SearchForm'
import CockTailList from '../components/CockTailList'
const cockTailSearch = 'https://www.thecocktaildb.com/api/json/v1/1/search.php?s='
import {useQuery} from '@tanstack/react-query'

const searchCocktailsQuery = (searchTerm)=>{
    console.log('get data')
    return{
        queryKey:['search',searchTerm || 'all'],
        queryFn: async()=>{
            const res = await axios.get(`${cockTailSearch}${searchTerm}`)
            const data = res.data.drinks
            return data
        }
    }
}

export const loader = 
(queryClient)=>
async({request})=>{
    console.log('loader')
    const url = new URL(request.url)
    
    const searchTerm = url.searchParams.get('search')||''
    await queryClient.ensureQueryData(searchCocktailsQuery(searchTerm))
    // const res = await axios.get(`${cockTailSearch}${searchTerm}`)
    return {searchTerm}
}
const Landing = () => {
    console.log('landing');
    const {searchTerm} = useLoaderData()
    const {data} = useQuery(searchCocktailsQuery(searchTerm))
    console.log(data)
    
  return (
    <>
        <SearchForm searchTerm = {searchTerm}/>
        <CockTailList drinks={data}/>
        
    </>
  )
}

export default Landing;
