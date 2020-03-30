import React from "react";
import { Switch, Route } from "react-router-dom";
import "./App.scss";
import HomePage from "../HomePage/HomePage";
import SkillsPage from "../SkillsPage/SkillsPage";
import ProjectPage from "../ProjectPage/ProjectPage";
import ContactPage from "../ContactPage/ContactPage";
import Navbar from "../../Components/Navbar/Navbar";
import Footer from "../../Components/Footer/Footer";

class App extends React.Component {
  state = {
    theme: null,
    isDark: null
  };

  handleThemeChange = isDark => {
    let newTheme = {};
    if (isDark) {
      newTheme = {
        backgroundColor: "#191A1C",
        fontColor: "#E2E2E2",
        borderColor: "#ff0044",
        linkColor: "#E2E2E2"
      };
    }
    if (!isDark) {
      newTheme = {
        backgroundColor: "#E2E2E2",
        fontColor: "#191A1C",
        borderColor: "#ff0044",
        linkColor: "#191A1C"
      };
    }

    localStorage.setItem("theme", isDark);
    document.body.style.backgroundColor = newTheme.backgroundColor;
    document.body.style.color = newTheme.fontColor;
    this.setState({ theme: newTheme, isDark });
  };

  componentWillMount() {
    console.log("1- Component Will Mount...");
    this.setState({
      theme: {
        backgroundColor: "#191A1C",
        fontColor: "#E2E2E2",
        borderColor: "#7A7979",
        linkColor: "#E2E2E2"
      }
    });
  }

  componentDidMount() {
    console.log("3- Component Did Mount...");

    let isDark = localStorage.getItem("theme");
    let savedTheme;
    if (isDark) {
      if (isDark.charAt(0) === '"' && isDark.charAt(isDark.length - 1) === '"')
        isDark = isDark.substr(1, isDark.length - 2);

      if (isDark === "true") {
        isDark = true;
        savedTheme = {
          backgroundColor: "#191A1C",
          fontColor: "#E2E2E2",
          borderColor: "#ff0044",
          linkColor: "#E2E2E2"
        };
      }
      if (isDark === "false") {
        isDark = false;
        savedTheme = {
          backgroundColor: "#E2E2E2",
          fontColor: "#191A1C",
          borderColor: "#ff0044",
          linkColor: "#191A1C"
        };
      }
    } else {
      savedTheme = {
        backgroundColor: "#191A1C",
        fontColor: "#E2E2E2",
        borderColor: "#ff0044",
        linkColor: "#E2E2E2"
      };
      isDark = true;
    }
    this.setState({ theme: savedTheme, isDark });
    document.body.style.backgroundColor = savedTheme.backgroundColor;
    document.body.style.color = savedTheme.fontColor;
  }

  componentDidCatch() {
    console.log("Component Did Catch...");
  }

  componentDidUpdate() {
    console.log("Component Did Update...");
  }

  componentWillUpdate() {
    console.log("Component Will Update...");
  }

  componentWillUnmount() {
    console.log("Component Will Unmount...");
  }

  render() {
    console.log("2- Render...");
    return (
      <div className="app">
        <Navbar
          className="nav"
          isDark={this.state.isDark}
          handleThemeChange={this.handleThemeChange}
          theme={this.state.theme}
        />
        <Switch className="App">
          <Route
            exact
            path="/"
            render={() => <HomePage theme={this.state.theme} />}
          />
          <Route path="/skills" render={() => <SkillsPage />} />
          <Route
            path="/projects"
            render={() => <ProjectPage theme={this.state.theme} />}
          />
          <Route
            path="/contact"
            render={() => <ContactPage theme={this.state.theme} />}
          />
        </Switch>
        <Footer theme={this.state.theme} />
      </div>
    );
  }
}

export default App;
