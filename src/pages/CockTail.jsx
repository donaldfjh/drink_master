import React from 'react'
import { useLoaderData,Link, useNavigate, redirect } from 'react-router-dom';
import axios from 'axios';
import Wrapper from '../assets/wrappers/CocktailPage';
import { useQuery } from '@tanstack/react-query';

const singleCocktailUrl =
  'https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=';

const singleQuery= (id)=>{
  console.log('get')
  return{
    queryKey: ['id',id],
    queryFn: async()=>{
      const res = await axios.get(`${singleCocktailUrl}${id}`)
      const data = res.data.drinks
      return data
    }
  }
}
// we cannot use hooks at loader 
export const loader = 
(queryClient)=>
async({params})=>{
  const {id} = params
  console.log('load')
  // const {data} = await axios.get(`${singleCocktailUrl}${id}`)
  // const paramId = url.searchParams.get('')||''
  await queryClient.ensureQueryData(singleQuery(id))
  return {id}
}
const CockTail = () => {
  console.log('render')
  const {id} = useLoaderData()
  const navigate = useNavigate()
  const {data} = useQuery(singleQuery(id))
  console.log(data)
  if(!data){
    setTimeout(()=>{navigate('/')},3000)
    return(
      <div>
        <h3>No data fetch,return to home page in 3s</h3>
      </div>
    
    )
  }
  const singleDrink = data[0]
  const {strDrink:name,
    strDrinkThumb:image, 
    strAlcoholic:info, 
    strCategory:category, 
    strGlass:glass,
    strInstructions:instruction} = singleDrink
  console.log(singleDrink);
  const validIngredients = Object.keys(singleDrink).filter((key)=>
    key.startsWith('strIngredient')&& singleDrink[key]!== null).map((key)=>singleDrink[key])
  
  console.log(validIngredients);
  // const test_1 = 
  return (
    <Wrapper>
      <header>
        <Link to='/' className='btn'>back home</Link>
        <h3>{name}</h3>
      </header>
      <div className="drink">
        <img src={image} alt={name} className = 'img' />
        <div className="drink-info">
          <p>
            <span className='drink-data'>name :</span>{name}
          </p>
          <p>
            <span className='drink-data'>category :</span>{category}
          </p>
          <p>
            <span className='drink-data'>Information :</span>{info}
          </p>
          <p>
            <span className='drink-data'>glass :</span>{glass}
          </p>
          <p>
            <span className='drink-data'>Ingredients :</span>
            {validIngredients.map((item,index)=>{
              return <span className='ing' key={item}>{item}{index < validIngredients.length - 1 ? ',':''}</span>
            })}
          </p>
          <p>
            <span className='drink-data'>Instructions :</span>{instruction}
          </p>

        </div>
      </div>
    </Wrapper>
  )
}

export default CockTail;

