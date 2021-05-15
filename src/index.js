import React, {useState, useEffect} from "react"
import ReactDOM from "react-dom"
import "react-mdl/extra/material.css"
import "react-mdl/extra/material.js"
import "./styles.css"
import { BrowserRouter} from "react-router-dom"
import styled from "styled-components"
import data from "../src/lib/data"
import theme from "../src/lib/theme"
import posed, { PoseGroup } from 'react-pose'
import Landing from "./components/Landing"
import 'bootstrap/dist/css/bootstrap.min.css';

const Image = posed.img({
  enter: { opacity: 1 },
  exit: { opacity: 0 }
})

function TimeoutImage({ id, imageIndex, deleteImage }) {
  const onClick = () => deleteImage(id);
  useEffect(() => {
    const timer = setTimeout(onClick, 3000);
    return () => clearTimeout(timer);
  }, []);
  const imagePlacement = {
    top: Math.floor(Math.random() * 40 + 5).toString().concat("vh"),
    right:  Math.floor(Math.random() * 80).toString().concat("vw")
  }

  return (
    <PoseGroup>
      <Image className="cat-image fade-in" style={imagePlacement} key="catImage" src={data.catPhotos[imageIndex]}/>
    </PoseGroup>
  );
}

let _ID = 0;
let colorTheme = theme.defaultTheme; 
let toggleText = data.darkMode;

function App() {
  const [images, setImages] = useState([]);
  const [isDefaultMode, setIsDefaultMode] = useState([]);
  const toggleDarkMode = () => {
    setIsDefaultMode(!isDefaultMode);
    if (colorTheme === theme.defaultTheme) {
      colorTheme = theme.darkTheme;
      toggleText = data.defaultMode;
    }
    else {
      colorTheme = theme.defaultTheme;
      toggleText = data.darkMode;
    }
  }
  const addImage = imageIndex => setImages([...images, { id: _ID++, imageIndex }]);
  const deleteImage = id => setImages(images => images.filter(m => m.id !== id));
  
  const MainButton = styled.a`
    font-family: ${colorTheme.font};
    &:hover {
      transform: scale(1.1);
      color: ${colorTheme.colorPrimary};
      background: #FFFFFF;
    }
    background: ${colorTheme.colorPrimary};
    border: 1px solid ${colorTheme.colorPrimary};
  `
  return (
    <React.Fragment>
      <Landing data={data} colorTheme={colorTheme}/>
      <MainButton className="cat-btn" onClick={() => addImage(Math.floor(Math.random() * data.catPhotos.length))}>{data.catBtnText}</MainButton>
      {images.map(m => (
        <TimeoutImage key={m.id} {...m} deleteImage={deleteImage} />
      ))}
      <MainButton className="cat-btn dark-btn" onClick={() => toggleDarkMode()}>{toggleText}</MainButton>
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
