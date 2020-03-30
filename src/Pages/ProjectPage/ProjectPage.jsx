import React, { useState, useEffect } from "react";
import Fade from "react-reveal/Zoom";
import styled from "styled-components";
import ProjectComponent from "../../Components/Project/Project";
import { FullPage, Slide } from "react-full-page";

const Project = styled.div`
  width: 100%;
  margin: 0 auto;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const ProjectPage = props => {
  const [devSpot] = useState({
    img: "images/devspot.png",
    name: "devSpot",
    description:
      "devSpot is a web app where developers can share their projects through iframes. In addition, users can chat with each other through the app. The posted projects are live, meaning users can interact with them as they would if they were to visit the project.",
    toolsUsed: [
      "React.js",
      "Node.js",
      "Express.js",
      "MongoDB",
      "Heroku",
      "Socket.io",
      "Mongoose",
      "Token Based Auth",
      "Material UI",
      "Bootstrap"
    ],
    link: "http://dev-spot.herokuapp.com/",
    gitHubLink: "https://github.com/pmeisam/devSpot"
  });

  const [memesagram] = useState({
    img: "images/memesagram.png",
    name: "MEMESAGRAM",
    description:
      "Memesagram is a social media platform where users can login with their Google account and upload photos, especially memes. Users can also comment, like, and update their profiles with photos and custom usernames. In addition, users can edit or delete their comments and captions.",
    toolsUsed: [
      "Node.js",
      "Express.js",
      "MongoDB",
      "Heroku",
      "Mongoose",
      "Passport",
      "Cloudinary",
      "Bootstrap"
    ],
    link: "http://memesagram.herokuapp.com/",
    gitHubLink: "https://github.com/pmeisam/instagram"
  });

  const [triplaner] = useState({
    img: "images/triplaner.png",
    name: "TRIPLANER",
    description:
      "A full-service travel planning app that matches you with flights and hotels based on your travel budget. Whethere you're planning a romantic getaway, a family vacation, or just need a weekend escape.",
    toolsUsed: [
      "Python",
      "django",
      "PostgreSQL",
      "IATA Codes API",
      "Amadeus API",
      "Bootstrap"
    ],
    link: "http://triplaner.herokuapp.com/",
    gitHubLink: "https://github.com/pmeisam/trip-planner"
  });

  const [minesweeper] = useState({
    img: "images/minesweeper.png",
    name: "MINESWEEPER",
    description:
      "The game is about finding the hidden mines. Each box you click on will either show a number of mines around each box or a mine. If there is no number it means that there is no mine around it. You can put a flag by right-clicking anywhere you think there is a mine. If you click all the boxes without clicking a mine, you will win.",
    toolsUsed: ["JavaScript", "jQuery", "HTML", "CSS"],
    link: "https://pmeisam.github.io/minesweeper/",
    gitHubLink: "https://github.com/pmeisam/minesweeper"
  });

  useEffect(() => {
    document.title = "Meisam Poorzand | Projects";
  });

  return (
    <FullPage>
      {/* <Wrapper> */}
      <Slide>
        <Project>
          <Fade center>
            <ProjectComponent theme={props.theme} project={devSpot} />
          </Fade>
        </Project>
      </Slide>

      <Slide>
        <Project>
          <Fade center>
            <ProjectComponent theme={props.theme} project={triplaner} />
          </Fade>
        </Project>
      </Slide>

      <Slide>
        <Project>
          <Fade center>
            <ProjectComponent theme={props.theme} project={memesagram} />
          </Fade>
        </Project>
      </Slide>

      <Slide>
        <Project>
          <Fade center>
            <ProjectComponent theme={props.theme} project={minesweeper} />
          </Fade>
        </Project>
      </Slide>

      {/* </Wrapper> */}
    </FullPage>
  );
};

export default ProjectPage;
