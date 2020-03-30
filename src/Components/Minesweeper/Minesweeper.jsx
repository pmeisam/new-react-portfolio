import React, { Component } from 'react';
import styled from 'styled-components';


class Minesweeper extends Component {

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
            <Project
                props={this.props.theme}
            >
                <img src="images/minesweeper.png" alt=""/>
                <div>
                    <h2>MINESWEEPER</h2>
                    <p>The game is about finding the hidden mines. Each box you click on will either show a number of mines around each box or a mine. If there is no number it means that there is no mine around it. You can put a flag by right-clicking anywhere you think there is a mine. If you click all the boxes without clicking a mine, you will win.</p>
                    <div className="techs">
                        <div>
                            <p>JavaScript</p>
                            <p>jQuery</p>
                            
                        </div>
                        <div>
                            <p>HTML</p>
                            <p>CSS</p>
                            
                        </div>
                        
                    </div>
                    <div className="links">
                        <a rel="noopener noreferrer" target="_blank" href="https://pmeisam.github.io/minesweeper/">
                            <i className="fas fa-link"></i>
                        </a>
                        <a rel="noopener noreferrer" target="_blank" href="https://github.com/pmeisam/minesweeper">
                            <i className="fab fa-github"></i>
                        </a>
                    </div>
                </div>
                
            </Project>
        )
    }
}

export default Minesweeper;