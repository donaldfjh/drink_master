import styled from 'styled-components';
const Wrapper = styled.article`
  background: white;
  box-shadow: var(--shadow-2);
  transition: 0.3s ease-in-out all;
  display: grid;
  transition-property:font-size;
  transition-duration: 0.5s ;
  grid-template-rows: auto 1fr;
  border-radius: 0.25rem;
   :hover{
    box-shadow:var(--shadow-4);
   }

   img{
      height: 15rem;
      border-top-left-radius:0.25rem;
      border-top-right-radius:0.25rem;
      transition: 0.3 ease-in-out all;

   }


   .footer{
    padding: 1.5rem;
    h4,
    h5{
      margin-bottom:0.5rem;
      
    }
    h4{
      font-weight: 700;
    }
    p{
      margin-bottom:1rem;
      color: var(--grey-500);
    }

   }
`;

export default Wrapper;
