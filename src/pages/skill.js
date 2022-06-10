import styled from 'styled-components';

import { IoLogoPython, IoLogoJavascript, IoLogoHtml5, IoLogoCss3, IoLogoReact, IoLogoNodejs, IoLogoWordpress, IoLogoDocker } from 'react-icons/io5';
import { SiNextdotjs, SiMysql, SiPostgresql, SiSqlite, SiMongodb, SiGhost } from 'react-icons/si';

export const SkillWrapper = styled.div`
    width:100%;
    height:100%;
    display:flex;
    flex-direction:column;
    align-items:center;
    justify-content:space-evenly;
    background:rgba(22, 3, 3, 1);
    color:#fff;
    padding:0 0 40px 0;
    .skill-info-section{
        width:100%;
        display:flex;
        margin-top:100px;
        justify-content:space-evenly;
        flex-wrap:wrap;
        @media screen and (max-width:1050px){
            justify-content:center;
        }
    }
    .skill-info{
        display:flex;
        flex-direction:column;
        justify-content:space-around;
        height: 100px;

        h3{
            font-family:RFDewi-Regular;
        }
        pre{
            font-family:RFDewi-Regular;
            font-size:1.5rem;
        }
        @media screen and (max-width:490px){
            pre{
                font-size:1rem;
            }
        }
    }
    .skill-info-line{
        background:rgba(153, 22, 22, 1);
        width:60px;
        height: 3px;
    }
    .skill-description{
        height: 550px;
        display:flex;
        flex-direction:column;
        justify-content:space-around;
        span{
            font-family:RFDewi-Regular;
            font-weight:700;
        }
        >div{
            display:flex;
            flex-direction:column;
            >div{
                display:flex;
                margin-top:10px;
                svg{
                    font-size:2rem;
                    &:not(:last-child){
                        margin-right:15px;
                    }
                }
            }
        }
    }
`;

export function Skill() {
    return (
        <SkillWrapper id="skills">
            <div className="skill-info-section">
                <div className="skill-info">
                    <h3>SKILL'S</h3>
                    <pre>
                        MY SKILLS IN
                        DEVELOPMENT
                    </pre>
                    <div className="skill-info-line"></div>
                </div>
                <div className="skill-description">
                    <div>
                        <span>Languages</span>
                        <div>
                            <IoLogoHtml5 />
                            <IoLogoCss3 />
                            <IoLogoJavascript />
                            <IoLogoPython />
                        </div>
                    </div>
                    <div>
                        <span>Application Plataform</span>
                        <div>
                            <IoLogoNodejs />
                        </div>
                    </div>
                    <div>
                        <span>Library</span>
                        <div>
                            <IoLogoReact />
                        </div>
                    </div>
                    <div>
                        <span>Frameworks</span>
                        <div>
                            <SiNextdotjs />
                        </div>
                    </div>
                    <div>
                        <span>Databases</span>
                        <div>
                            <SiMysql />
                            <SiMongodb />
                        </div>
                    </div>
                    <div>
                        <span>Cms</span>
                        <div>
                            <IoLogoWordpress />
                            <SiGhost />
                        </div>
                    </div>
                    <div>
                        <span>Tools</span>
                        <div>
                            <IoLogoDocker />
                        </div>
                    </div>
                </div>
            </div>
        </SkillWrapper>
    )
}
