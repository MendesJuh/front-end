import styled from 'styled-components'
import Background from './../../assets/background2.svg'

export const Container = styled.div`

    background: url("${Background}");
    background-size: cover;
    display:flex;
    flex-direction:column;
    align-items:center;
    gap: 40px;
    height: 100%;
    min-height: 100vh;
   
`;
export const Image = styled.img`
    margin-top: 30px;

`;
export const ContainerItens = styled.div`
background: linear-gradient(
    157.44deg,

rgba(255, 255, 255, 0.6) 0.84%,
rgba(255, 255, 255, 0.6) 0.85%,
rgba(255, 255, 255, 0.15)  100%

);

height:100vh;
border-radius: 61px 61px 0px 0px;
padding: 50px 36px;
display: flex;
flex-direction: column;

`;

export const User = styled.li`

    display: flex;
    justify-content:space-around;
    align-items: center;
    background: rgba(255, 255, 255, 0.25);
    border-radius:14px;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    width: 342px;
    height: 58px;
    border:none;
    outline:none;
    margin-top: 20px;

    p{
    
    color: #ffffff;
    font-size: 20px;
    font-style: normal;
    font-weight: normal;
    line-height: 28px;
    }

    button{
        background: none;
        border:none;
        cursor: pointer;
    }

`;



