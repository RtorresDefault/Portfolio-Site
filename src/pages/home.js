import styled from 'styled-components';

import Background from '../assets/images/Background2.svg'

export const HomeWrapper = styled.div`
    background:url(${Background}) no-repeat;
    background-size:cover;
    width:100%;
    height: 100vh;
    display: flex;
    justify-content:center;
    color:#fff;
    >div{
        display: flex;
        flex-direction:column;
        justify-content:center;
        align-items:center;
        >h1{
            font-family:RFDewi-Ultrabold;
            font-size:9rem;
            font-weight:700;
            &::after{
                content:'|';
                animation: keybar 2s infinite ease-in-out;
            }
            
        }
        >h2{
            font-family:RFDewi-Ultrabold;
            font-size:2.6rem;
        }
        >div{
            width:100%;
            display:flex;
            justify-content:space-around;
        }
        @keyframes keybar{
            0%{
                opacity: 1;
            }
            100%{
                opacity: 0;
            }
        }
        @media screen and (max-width:540px){
            h1{
                font-size:6rem;
            }
            h2{
                font-size:1.8rem;
            }
            div{
                flex-direction:column;
            }
            .home-button{
                text-align:center;
            }
        }
    }

    .home-button{
        color: #fff;
        outline:none;
        background:rgba(153, 22, 22, 0.8);
        padding:15px 40px;
        font-family:RFDewiCondensed-Thin;
        font-size:1rem;
        border: none;
        border-radius:5px;
        margin-top:15px;
        cursor: pointer;
        text-decoration:none;
        transition:ease-in-out 0.5s;
        &:hover{
            background:rgba(153, 22, 22, 1);
        }
    }
`;

export function Home(){
    return(
        <HomeWrapper id="home">
            <div>
                <h1>HELLO</h1>
                <h2>I AM WEB DEVELOPER</h2>
                <div>
                    <a className="home-button" href="https://github.com/RtorresDefault" target="_blank" rel="noreferrer">VIEW MY GITHUB</a>
                    <a className="home-button" href="https://www.linkedin.com/in/renan-guimar%C3%A3es-4630b4161/" target="_blank" rel="noreferrer">VIEW MY LINKEDIN</a>
                </div>
            </div>
        </HomeWrapper>
    )
}
