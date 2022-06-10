import styled from 'styled-components';

import {AiFillBehanceCircle,AiFillTwitterCircle,AiFillInstagram,AiOutlineMail} from 'react-icons/ai';

export const AboutWrapper = styled.div`
    width:100%;
    height:100%;
    padding:90px 5px;
    display:flex;
    flex-direction:column;
    align-items:center;
    justify-content:space-evenly;
    background:rgba(22, 3, 3, 1);
    color:#fff;
    .about-info-section{
        width:100%;
        display:flex;
        margin-top:100px;
        justify-content:space-evenly;
        @media screen and (max-width:950px){
            flex-direction:column;
            align-items:center;
        }
    }
    .about-info{
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
    .about-info-line{
        background:rgba(153, 22, 22, 1);
        width:60px;
        height: 3px;
    }
    .about-description{
        width:100%;
        max-width:500px;
        height: 400px;
        display:flex;
        flex-direction:column;
        justify-content:space-evenly;
        p{
            font-family:RFDewi-Regular;
            font-size:1rem;
        }
        span{
            font-family:RFDewi-Regular;
            font-weight:700;
        }
        >div{
            display:flex;
            a{
                color:#fff;
                margin-right:20px;
            }
            font-size:2rem;

        }
    }
    .about-card-section{
        width:100%;
        display:flex;
        justify-content:space-evenly;
        margin-bottom:30px;
        @media screen and (max-width:950px){
            flex-direction:column;
            align-items:center;
        }
    }
`;

export function About(){
    return(
        <AboutWrapper id="about">
            <div className="about-info-section">
                <div className="about-info">
                    <h3>ABOUT ME</h3>
                    <pre>
                        I'M A FRONTEND & 
                        BACKEND DEVELOPER
                    </pre>
                    <div className="about-info-line"></div>
                </div>
                <div className="about-description">
                    <p>
                    projects with friends.
                    </p>
                    <span>
                        CONTACT ME
                    </span>
                    <div>
                        <a href="#">
                            <AiFillBehanceCircle/>
                        </a>
                        <a href="#">
                            <AiFillTwitterCircle/>
                        </a>
                        <a href="#">
                            <AiFillInstagram/>
                        </a>
                        <a href="#">
                            <AiOutlineMail/>
                        </a>
                    </div>
                </div>
            </div>
            {/* <div className="about-card-section">
                <AboutCard 
                    imageUrl={code}
                    title="Web Development"
                    text={["Frontend","Backend","Api Rest"]}
                />
                <AboutCard
                    imageUrl={security}
                    title="Web Security"
                    text={["Frontend","Backend","Api Rest"]}
                />
                <AboutCard
                    imageUrl={art}
                    title="Art Design"
                    text={["Frontend","Backend","Api Rest"]}
                />
    </div>*/}
        </AboutWrapper>
    )
}
