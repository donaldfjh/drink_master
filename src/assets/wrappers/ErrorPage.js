import styled from 'styled-components';

const Wrapper = styled.div`
  min-height: 100vh;
  text-align: center;
  display: flex;
  justify-content: center;
  align-items: center;
  img{
    max-width: 600px;
    width: 90vw;
    display: block;
    margin-bottom: 2rem;
    margin-top: -3rem;

  }
  h3{
    margin-bottom: 0.5rem;

  }
  p{
    line-height: 1.5rem;
    margin-top: 0.5rem;
    margin-bottom: 1rem;
    color: gray;
  }
  a{
    color: aquamarine;
    text-transform: capitalize;
  }
`;

export default Wrapper;
