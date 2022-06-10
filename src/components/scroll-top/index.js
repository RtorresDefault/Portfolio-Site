import styled from 'styled-components';

import {BsFillArrowUpCircleFill} from 'react-icons/bs';

export const ScrollWrapper = styled.div`
    position:fixed;
    bottom: 10px;
    right: 20px;
    a{
        font-size:2rem;
        color:rgba(153, 22, 22, 0.8);
        &:hover{
            color: rgba(153, 22, 22, 0.6);
        }
    }
`;

export default function ScrollTop(){
    return(
        <ScrollWrapper >
            <a href="#home">
                <BsFillArrowUpCircleFill/>
            </a>
        </ScrollWrapper>
    )
};