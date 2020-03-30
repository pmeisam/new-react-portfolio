import React, { Component } from "react";
import { slideInUp } from "react-animations";
import styled, { keyframes } from "styled-components";
// import slideInUp from 'react-animations/lib/slide-in-up';

class ContactPage extends Component {
  render() {
    const Contact = styled.div`
      font-family: "Saira Stencil One", cursive;
      animation: 2s ${keyframes`${slideInUp}`} 1;
      display: flex;
      flex-direction: column;
      height: 100vh;
      width: 100vw;
      align-items: center;
      justify-content: center;
      & > .title {
        color: ${this.props.theme.fontColor};
        text-decoration: none;
        font-size: 6vh;
        & > h1 {
          margin: -70px 0;
        }
      }
      & > .email {
        color: ${this.props.theme.fontColor};
        text-decoration: none;
        font-size: 7.6vh;
      }
      .icon {
        color: ${this.props.theme.fontColor};
        font-size: 40px;
        margin-right: 40px;
      }

      @media screen and (max-width: 600px) {
        & > .title {
          font-size: 25px;
          & > h1 {
            margin: -30px 0;
          }
        }

        & > .email {
          font-size: 32px;
        }

        & > .icon {
        }
      }
    `;
    return (
      <Contact>
        <a className="title" href="https://www.meisam.org">
          <h1>MEISAM</h1>
          <h1>POORZAND</h1>
        </a>
        <a className="email" href="mailto: info@meisam.org">
          <h4>info@meisam.org</h4>
        </a>
        <div>
          <a _blank className="icon" href="https://www.linkedin.com/in/pmeisam">
            <i className="fab fa-linkedin"></i>
          </a>

          <a _blank className="icon" href="https://www.facebook.com/pmeisam">
            <i className="fab fa-facebook-square"></i>
          </a>

          <a _blank className="icon" href="https://www.twitter.com/pmeisam">
            <i className="fab fa-twitter-square"></i>
          </a>

          <a _blank className="icon" href="https://www.instagram.com/me.i.sam/">
            <i className="fab fa-instagram"></i>
          </a>

          <a _blank className="icon" href="https://www.github.com/pmeisam">
            <i className="fab fa-github"></i>
          </a>

          <a _blank className="icon" href="mailto: info@meisam.org">
            <i className="fas fa-envelope-open-text"></i>
          </a>
        </div>
      </Contact>
    );
  }
}

export default ContactPage;

// jacekjeznach.com/skills/
// caferati.me
