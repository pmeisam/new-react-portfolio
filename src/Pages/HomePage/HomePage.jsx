import React, { Component } from "react";
import styled, { keyframes } from "styled-components";
import { tada } from "react-animations";
// import Tada from 'react-reveal/Tada';
import "./HomePage.scss";
// import slideInLeft from 'react-animations/lib/slide-in-left';

class HomePage extends Component {
  state = {
    intro: null,
    bio: null,
    theText: "",
    cursor: null
  };

  componentWillMount() {
    let intro = "HI THERE, I'M MEISAM.";
    let bio =
      "I'm a full-stack software engineer with an education in computer science. Soccer fan and motivated self-starter with a persistent drive to succeed, and I am always looking for opportunities to learn and develop new skills. Passionate about development as the vehicle for making positive social-change through teaching others the love of technology. I’m focused on building intuitive, user-friendly applications, to ultimately improve the user experience.";
    bio = bio.toUpperCase();
    intro = intro.toUpperCase();
    this.setState({ intro });
    this.setState({ bio });
  }

  componentDidMount() {
    this.state.bio.split("").forEach((letter, idx) => {
      setTimeout(() => {
        this.setState(state => ({ theText: state.theText + letter }));
      }, 30 * idx);
    });
    // setInterval(() => {
    //     if (this.state.cursor) {
    //         this.setState({cursor: false});
    //     } else {
    //         this.setState({cursor: true});
    //     }
    // },300);
  }

  render() {
    const Tada = styled.div`
      animation: 3s ${keyframes`${tada}`} 1;
      animation-delay: 1s;
      width: 70%;
      & > h1 {
        font-family: "Saira Stencil One", cursive;
        font-size: 4vw;
      }
      @media screen and (max-width: 600px) {
        margin-top: 20%;
        & > h1 {
          font-size: 26px;
        }
      }
    `;
    const Intro = styled.div`
            width: 100%;
            height: 100vh;
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            & > h1 {
                font-family: 'Saira Stencil One', cursive;
                font-size: 2vw;
                width: 70%;
                height: 40vh;
                & > .blinking{
                    animation:blinkingText 0.8s infinite;
                }
                @keyframes blinkingText{
                    0%{	color: ${this.props.theme.fontColor};	}
                    49%{ color: transparent; }
                    50%{ color: transparent; }
                    99%{ color:transparent; }
                    100%{	color: ${this.props.theme.fontColor};	}
                }
            }
            @media screen and (max-width: 600px) {
                & > h1 {
                    font-size: 14px;
                }
            }

        }
        `;
    return (
      <Intro>
        <Tada>
          <h1>{this.state.intro}</h1>
        </Tada>
        <h1>
          {this.state.theText}
          {/* {this.state.cursor ? <span>__</span> : <p></p>} */}
          <span className="blinking">|</span>
        </h1>
      </Intro>
    );
  }
}

export default HomePage;
