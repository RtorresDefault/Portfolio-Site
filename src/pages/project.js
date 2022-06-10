import styled from 'styled-components';

import { ProjectCard } from '../components/project-card/index';

import { GithubRepository } from '../repositories/Github';

import { useState, useEffect } from 'react';

import Background from '../assets/images/Background3.svg';

export const ProjectWrapper = styled.div`
    width:100%;
    display:flex;
    flex-direction:column;
    align-items:center;
    background:url(${Background});

    span{
        font-family:RFDewi-Regular;
        font-size:1.5rem;
        color:#fff;
        margin-top:30px;
    }

    .project-card-container{
        width:100%;
        max-width:1200px;
        margin-top:50px;
        display:flex;
        flex-wrap:wrap;
        justify-content:space-between;
        @media screen and (max-width:1050px){
            justify-content:center;
        }
    }
`;

export function Project(){
    const [repositories] = useState(new GithubRepository());
    const [data, setData] = useState([]);

    useEffect(() => {
        (async ()=>{
            const data = await repositories.getProjects()
            setData(data);
        })();
    }, [repositories])
    
    return(
        <ProjectWrapper id="projects">
            <span>MY PROJECTS</span>
            <div className="project-card-container">
                {data.map(e=>(
                    <ProjectCard title={e.name} description={e.description} url={e.html_url}/>
                ))}
            </div>
        </ProjectWrapper>
    )
}