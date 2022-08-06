import styled from 'styled-components'
import Background from '../../assets/background1.svg'

export const Container = styled.div`

    background: url("${Background}");
    background-size: cover;
    display:flex;
    flex-direction:column;
    align-items:center;
    gap: 40px;
    height: 100%;
    width: 100vw;


`;
export const Image = styled.img`
    margin-top: 30px;

`;

export const InputLabel = styled.p`
    letter-spacing: -0.408px;
    font-size: 18px;
    font-style: normal;
    font-weight:bold;
    line-height: 22px;
    color: #EEEEEE;
    margin-left: 25px;

`;
export const Input = styled.input`
    background: rgba(255, 255, 255, 0.25);
    border-radius:14px;
    box-shadow: opx 4px 4px rgba(0, 0, 0, 0.25);
    width: 342px;
    height: 58px;
    border:none;
    outline:none;
    padding-left:25px;
    margin-bottom: 34px;

    color: #ffffff;
    font-size: 20px;
    font-style: normal;
    font-weight: normal;
    line-height: 28px;


`;






