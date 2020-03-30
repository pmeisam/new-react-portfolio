import React, { Component } from 'react';
import styled from 'styled-components';



class DevSpot extends Component {

    render () {
        const Project = styled.div`
            display: flex;
            width: 60%;
            margin: 0 auto;
            & > img {
                width: 870px;
                height: 480px;
            }
            & > div {
                
                width: 40%;
                
                & > .techs {
                    display: flex;
                    width: 50%;
                    // margin: 0 auto;
                    text-align: center;

                    & > div {
                        & > p {
                            background-color: ${this.props.theme.fontColor};
                            color: ${this.props.theme.backgroundColor};
                            padding: 5px 5px;
                            width: 140px;
                            margin 10px;
                            border-radius: 5px;
                        }
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

            @media screen and (max-width: 600px) {
                display: flex;
                flex-direction: column;
                margin-top: 150px;
                width: 100%;
                justify-content: center;
                
                & > img {
                    width: 90%;
                    height: 200px;
                    margin: 0 auto;
                }
                
                & > div {
                    text-align: center;
                    width: 80%;
                    margin: 0 auto;

                    & > .techs {
                        margin: 0 auto;
                        width: 90%;
                        & > div {
                            & > p {
                                width: 100px;
                                font-size: 11px;
                            }
                        }

                    }
                }
            }

        `;
        return (
            <Project>
                <img src="images/devspot.png" alt=""/>
                <div>
                    <h2>devSpot</h2>
                    <p>devSpot is a web app where developers can share their projects through iframes. In addition, users can chat with each other through the app. The posted projects are live, meaning users can interact with them as they would if they were to visit the project.</p>
                    <div className="techs">
                        <div>
                            <p>React.js</p>
                            <p>Node.js</p>
                            <p>Express.js</p>
                            <p>MongoDB</p>
                            <p>Heroku</p>
                        </div>
                        <div>
                            <p>Socket.io</p>
                            <p>Mongoose</p>
                            <p>Token Based Auth</p>
                            <p>Material UI</p>
                            <p>Bootstrap</p>
                        </div>
                        
                    </div>
                    <div className="links">
                        <a rel="noopener noreferrer" target="_blank" href="http://dev-spot.herokuapp.com/">
                            <i className="fas fa-link"></i>
                        </a>
                        <a rel="noopener noreferrer" target="_blank" href="http://dev-spot.herokuapp.com/">
                            <i className="fab fa-github"></i>
                        </a>
                    </div>
                </div>
            </Project>
        )
    }
}

export default DevSpot;