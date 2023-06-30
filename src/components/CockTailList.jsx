import React from 'react'
import Wrapper from '../assets/wrappers/CocktailList'
import CockTailCard from './CockTailCard'
const CockTailList = ({drinks}) => {
    if(!drinks){
        return(
            <h4 style={{textAlign:'center'}}>
                No matching cocktail found 
            </h4>
        )
    }
    const formattedDrinks = drinks.map((item)=>{
        const {idDrink,strDrink,strDrinkThumb, strAlcoholic, strGlass} =item
        return {
            id:idDrink, 
            name:strDrink, 
            img:strDrinkThumb, 
            info: strAlcoholic, 
            glass:strGlass}
    })
  return (
    <Wrapper>
        {formattedDrinks.map((item)=>{
            return (
                <CockTailCard key = {item.id} {...item}/>
            )
        })}
    </Wrapper>
    
  )
}

export default CockTailList;
