import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';
import Switch from '../Switch/Switch';
// import './Navbar.scss';


class Navbar extends Component {

    state = {home: null, skills: null, projects: null, contact: null};

    onMouseEnterHandler = (icon) => {
        switch(icon) {
            case "home":
                    this.setState({home: <h4>HOME</h4>});
                    break;
            case "skills":
                    this.setState({skills: <h4>SKILLS</h4>})
                    break;
            case "projects":
                    this.setState({projects: <h4>PROJECTS</h4>});
                    break;
            case "contact":
                    this.setState({contact: <h4>CONTACT ME</h4>});
                    break;
            default:
                break;
        }
    }

    onMouseLeaveHandler = (text) => {
        switch(text) {
            case "home":
                    this.setState({home: <i className="fas fa-home"></i>});
                    break;
            case "skills":
                    this.setState({skills: <i className="fas fa-code"></i>})
                    break;
            case "projects":
                    this.setState({projects: <i className="fas fa-project-diagram"></i>});
                    break;
            case "contact":
                    this.setState({contact: <i className="fas fa-user"></i>});
                    break;
            default: 
                    break;
        }
    }

    handleClick = () => {
        const nav = document.getElementById("myNav");
        if (nav.className === "links") {
            nav.className += " responsive";
        } else {
            nav.className = "links";
        }
    }

    componentDidMount() {
        let home = <i className="fas fa-home"></i>;
        let skills = <i className="fas fa-code"></i>;
        let projects = <i className="fas fa-project-diagram"></i>;
        let contact = <i className="fas fa-user"></i>;
        this.setState({home, skills, projects, contact});
    }

    render () {
        const NavWrapper = styled.nav`
            z-index: 999;
            i {
                font-size: 30px;
            } 
            .navWrapper {
                display: none;
            }
            .links {
                text-align: center;
                background-color: red;
                width: 90px;
                min-height: 100vh;
                position: fixed;
                background-color: ${this.props.theme.backgroundColor};
                display: flex;
                flex-direction: column;
                justify-content: space-around;
                align-items: center;
                height: 80vh;
                // margin: auto 0;
                &> .divLinks {

                    display: flex;
                    flex-direction: columnt;
                    align-items: center;
                    justify-content: center;

                    & > .link {
                        color: ${this.props.theme.linkColor};
                        font-size: 15px;
                        text-decoration: none;
                        position: absolute; 
                    }
                    & > .link:hover {
                        color: #f04;
                    }
                    & > .isActive {
                        color: #f04;
                        // border-bottom: 4px solid ${this.props.theme.borderColor};
                    }
                }
               
            }
           
            @media screen and (max-width: 600px) {
                & > .links {
                    position: fixed;
                    display: flex;
                    flex-direction: row;
                    width: 100%;
                    height: 50px;
                    min-height: 50px;
                    & > .divLinks {

                        & > .link {
                            & > i{
                                font-size: 21px;
                            }
                        }
                    }
                    & > .themes {
                        display: none;
                    }
                }
               
            }
        `;
        
        
        return (
            <NavWrapper >
                <div className="links" id="myNav">
                    <div className="divLinks">
                        <NavLink activeClassName="isActive" className="link" to="/" exact={true} onMouseEnter={() => this.onMouseEnterHandler("home")} onMouseLeave={() => this.onMouseLeaveHandler("home")} >{this.state.home}</NavLink>
                    </div>
                    <div  className="divLinks">
                        <NavLink activeClassName="isActive" className="link" to="/skills" exact={true} onMouseEnter={() => this.onMouseEnterHandler("skills")} onMouseLeave={() => this.onMouseLeaveHandler("skills")} >{this.state.skills}</NavLink>
                    </div>
                    <div  className="divLinks">
                        <NavLink activeClassName="isActive" className="link" to="/projects" exact={true} onMouseEnter={() => this.onMouseEnterHandler("projects")} onMouseLeave={() => this.onMouseLeaveHandler("projects")} >{this.state.projects}</NavLink>
                    </div>
                    <div  className="divLinks">
                        <NavLink activeClassName="isActive" className="link" to="/contact" exact={true} onMouseEnter={() => this.onMouseEnterHandler("contact")} onMouseLeave={() => this.onMouseLeaveHandler("contact")} >{this.state.contact}</NavLink>
                    </div>
                    <div className="themes">
                        <Switch className="themes" handleThemeChange={this.props.handleThemeChange} isDark={this.props.isDark} />
                    </div>
                </div>
            </NavWrapper>
        )
    }
}

export default Navbar;