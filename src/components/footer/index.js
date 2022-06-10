import styled from 'styled-components';

import Background from '../../assets/images/Background.svg'

const FooterWrapper = styled.footer`
    padding:50px;
    background:url(${Background});
    text-align:center;
    p{
        color:#fff;
        font-family:RFDewiCondensed-Thin;
        font-weight:600;
    }
`

export function Footer(){
    return(
        <FooterWrapper>
            <p>Copyright RtorresDev - 2022</p>
        </FooterWrapper>
    )
}