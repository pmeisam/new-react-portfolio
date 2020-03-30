import React from 'react';
import styled from 'styled-components';
// import slideOutDown from 'react-animations/lib/slide-out-down';


const ProjectComponent = props => {

 
    const Project = styled.div`
        display: flex;
        width: 70%;
        height: 100%;
        margin: 0 auto;
        flex-direction: row;
        justify-content: space-between;
        align-items: center;
        & > img {
            width: 520px;
            height: 280px;
        }
        & > div {
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            width: 40%;
            text-align: center;
            & > h1 {
                font-family: "Saira Stencil One", cursive;
            }
            & > .techs {
                display: grid;
                text-align: center;
                grid-template-columns: auto auto;

              
                    & > p {
                        background-color: ${props.theme.fontColor};
                        color: ${props.theme.backgroundColor};
                        padding: 5px 5px;
                        width: 120px;
                        font-size: 10px;
                        margin 10px 10px 10px 0;
                        border-radius: 5px;
                    }
                
            }

            & > .links {
                & > a {
                    & > i {
                        color: #f04;
                    }
                }
            }

        }
        i {
            font-size: 40px;
            padding: 30px;
        }

        @media screen and (max-width: 1000px) {
            flex-direction: column;
            width: 100%;
            height: 100vh;
            justify-content: center;
            align-items: center;
            & > img {
                width: 50%;
                height: 30%;
            }
            & > div {
                text-align: center;
                width: 70%;
                margin: 0 auto;
                & > h1 {
                    margin: -15px;
                }
                & > p {
                    font-size: 14px;
                }
                & > .techs {
                    margin: 0 auto;
                    width: 100px%;
                    text-align: center;
                    & > p {
                        width: 90px;
                        font-size: 9px;
                        margin: 3px;
                        padding: 2px;
                        text-align: center;
                    }
                } 
            }
            i {
                font-size: 30px;
            }
        }

        @media screen and (max-width: 600px) {
            display: flex;
            flex-direction: column;
            width: 100%;
            justify-content: center;
            align-items: center;
            height: 100vh;
            margin-top: 45px;
            & > img {
                width: 325px;
                height: 180px;
                margin: 0 auto;
            }
            
            & > div {
                text-align: center;
                width: 80%;
                margin: 0 auto;

                & > h1 {
                    margin: 5px;
                }

                & > .techs {
                    margin: 0 auto;
                    width: 60%;
                    & > p {
                        width: 90px;
                        font-size: 9px;
                        margin: 3px;
                    }
                } 
            }
        }
    `;

        
    return (
       
            props.project ? (
                <Project>
                    <img src={props.project.img} alt=""/>
            
                    <div>
                        <h1>{props.project.name}</h1>
                        <p>{props.project.description}</p>

                        <div className="techs">
                            {props.project.toolsUsed.map( t => <p>{t}</p>)}
                        </div>

                        <div className="links">
                            <a rel="noopener noreferrer" target="_blank" href={props.project.link}>
                                <i className="fas fa-link"></i>
                            </a>
                            <a rel="noopener noreferrer" target="_blank" href={props.project.gitHubLink}>
                                <i className="fab fa-github"></i>
                            </a>
                        </div>

                    </div>
                </Project>)
            : 
            <p>loading...</p>  
    )
}

export default ProjectComponent;

