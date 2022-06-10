import styled from 'styled-components';

import logo from '../../assets/images/logo512.png';

const NavbarWrapper = styled.header`
    width:100%;
    background:#100404;
    position:fixed;
    box-shadow: 0px 10px 20px #100404;
    nav{
        display:flex;
        justify-content:space-between;
        align-items:center;
        padding:30px;
        > img{
            max-width:50px;
        }
        > ul{
            width:300px;
            display:flex;
            justify-content:space-around;
            list-style:none;
            font-family:RFDewi-Regular;
            > li{
                > a{
                    color:#fff;
                    text-decoration:none;
                    cursor: pointer;
                    &:not(.active):hover{
                        opacity: 0.85;
                        transition:ease-in-out 0.25s;
                    }
                }
            }
            .active{
                font-weight:600;
            }
        }
    }
`

export function Navbar(){
    return(
        <NavbarWrapper>
            <nav>
                <img src={logo} alt="logo"/>
                <ul>
                    <li>
                        <a href="#home">Home</a>
                    </li>
                    <li>
                        <a href="#about">About</a>
                    </li>
                    <li>
                        <a href="#projects">Projects</a>
                    </li>
                    <li>
                        <a href="#skills">Skill</a>
                    </li>
                </ul>
            </nav>
        </NavbarWrapper>
    )
}