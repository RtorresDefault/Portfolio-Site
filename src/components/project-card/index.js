import styled from 'styled-components';

export const CardWrapper = styled.div`
    width:100%;
    max-width:500px;
    padding:15px 20px;
    margin:10px;
    color:#fff;
    span{
        font-family:RFDewi-Regular;
        font-size:1.2rem;
        font-weight:700;
    }
    p{
        font-family:RFDewi-Regular;
        font-size:1rem;
        margin:15px 0 10px 0;

    }
    div{
        display:flex;
        justify-content:flex-end;
        a{
            font-family:RFDewi-Regular;
            color:#fff;
            text-decoration:none; 
            cursor:pointer;
            &:hover{
                transition: ease-out 0.5s;
                opacity: 0.8;
            }
        }
    }
`;

export function ProjectCard(props){
    return(
        <CardWrapper>
            <span>{props.title}</span>
            <p>{props.description}</p>
            <div>
                <a href={props.url} target="_blank" rel="noreferrer">View</a>
            </div>
        </CardWrapper>
    )
}