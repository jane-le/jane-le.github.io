import React, {useState, useEffect} from "react"
import ReactDOM from "react-dom"
import "react-mdl/extra/material.css"
import "react-mdl/extra/material.js"
import "./styles.css"
import { BrowserRouter} from "react-router-dom"
import Main from "./components/Main"
import styled from "styled-components"
import data from "../src/lib/data"
import theme from "../src/lib/theme"
import posed, { PoseGroup } from 'react-pose'

const MainButton = styled.a`
  font-family: ${theme.defaultTheme.font};
  &:hover {
    transform: scale(1.1);
    color: ${theme.defaultTheme.colorPrimary};
    background: #FFFFFF;
  }
  background: ${theme.defaultTheme.colorPrimary};
  border: 1px solid ${theme.defaultTheme.colorPrimary};
`

const Image = posed.img({
  enter: {
      opacity: 1,
      transition: { type: 'spring', stiffness: 10, duration: 1000, ease: 'linear'}

    },
    exit: {
      opacity: 0,
      transition: { type: 'spring', stiffness: 10, duration: 1000, ease: 'linear'}

    }
})

function TimeoutImage({ id, deleteAlert }) {
  const onClick = () => deleteAlert(id);
  useEffect(() => {
    const timer = setTimeout(onClick, 3000);
    return () => clearTimeout(timer);
  }, []);
  const imagePlacement = {
    top: Math.floor(Math.random() * 40 + 5).toString().concat("vh"),
    right:  Math.floor(Math.random() * 80).toString().concat("vw")
  }
  const imageIndex = Math.floor(Math.random() * data.catPhotos.length)

  return (
    <PoseGroup>
      <Image className="cat-image" style={imagePlacement} key="catImage" src={data.catPhotos[imageIndex]}/>
    </PoseGroup>
  );
}

let _ID = 0; 
function App() {
  const [images, setAlerts] = useState([]);
  const addAlert = () => setAlerts([...images, { id: _ID++ }]);
  const deleteAlert = id => setAlerts(images => images.filter(m => m.id !== id));
  return (
    <React.Fragment>
      <Main/>
      <MainButton className="cat-btn" onClick={() => addAlert()}>{data.catBtnText}</MainButton>
      {images.map(m => (
        <TimeoutImage key={m.id} {...m} deleteAlert={deleteAlert} />
      ))}
    </React.Fragment>

  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>,
  rootElement
);
