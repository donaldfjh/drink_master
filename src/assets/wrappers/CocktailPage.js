import styled from 'styled-components';

const Wrapper = styled.div`
 header{
    text-align: center;
    margin-bottom:3rem ;
    .btn{
        margin-bottom: 1rem;
        transition: 0.3s ease-in-out all;
    }

 }

 .img{
        border-radius:0.25rem;
    }

.drink-info{
    padding-top:2rem ;
}

.drink p{
    font-size: 700;
    text-transform: capitalize;
    line-height: 2;
    margin-bottom: 1rem;
}

.drink-data{
    margin-right: 0.5rem;
    background: #10b981;
    padding: 0.25rem 0.5rem;
    border-radius: 0.25rem;
    color: #047857;
    letter-spacing:1px;
}

.ing{

}

@media (min-width: 990px) {
    .drink{
        display: grid;
        grid-template-columns: 2fr 3fr;
        gap: 3rem;
        align-items: center;

    }

    .drink-info{
    padding-top:0 ;
    }
}

`;

export default Wrapper;
