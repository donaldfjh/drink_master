import styled from 'styled-components';

const Wrapper = styled.nav`
  background: #9ED4FA;
  .nav-center{
    width: 90vw;
    max-width:1200px;
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    padding: 1.5rem 2rem;
    
  }

  .logo{
    font-size: clamp(1rem, 3vw, 3rem );
    font-weight: 600;
    color: white;
    letter-spacing: 1.5px;
    transition-property: font-size;
    transition-duration: 0.5s;

  }
  
  .logo:hover{
    font-size: 2rem;
  }

  .nav-links{
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
    margin-top: 1rem;
  }

  

  .nav-link{
    color:white;
    font-size: 200;
    padding: 0.5rem 0.5rem 0.5rem 0;
    transition: 0.3s ease-in-out all;
    letter-spacing: 2px;
  }

  .nav-link:hover{
    text-decoration: green wavy underline;
  }


  /* active */
  .active{
    color: black;
  }

  @media (min-width: 790px){
    .nav-center{
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    
  }
  .nav-links{
    flex-direction: row;
    margin-top: 0;
  }
  }
`;

export default Wrapper;
