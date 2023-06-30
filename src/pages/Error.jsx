import React from 'react'
import Wrapper from '../assets/wrappers/ErrorPage';
import img from '../assets/not-found.svg'
import { Link, useRouteError } from 'react-router-dom';
const Error = () => {
  const error = useRouteError()
  console.log(error)
  if(error.status == 404){
    return <Wrapper>
      <div>
        <img src={img} alt="not found Page" />
        <h3>OhHH!!!</h3>
        <p>Can't find the page</p>
        <Link to='/'>Home</Link>
      </div>
      </Wrapper>
  }
  return (
    <Wrapper>
      <div>
        <h3>Somthing go wrong</h3>
      </div>
    </Wrapper>
  )
}

export default Error;
