import './App.css';
import React, { useState } from 'react';
import backgroundVideoOne from "./video/ekko.mp4";
import backgroundVideoTwo from "./video/garen.mp4"
import p1 from "./video/Ekko_0.jpg"
import p2 from "./video/Ekko_1.jpg"
import p3 from "./video/Ekko_2.jpg"
import p1G from "./video/Garen_0.jpg"
import p2G from "./video/Garen_1.jpg"
import p3G from "./video/Garen_2.jpg"
import ekkoAudio from "./video/ekkoAudio.mp3"
import useSound from "use-sound";
import {Howl, Howler} from 'howler';
import bloop from "./video/bloop.mp3"






function App() {

  Howler.volume(0.5)


  const initialIndex = 0;
  const [index, setIndex] = useState(initialIndex);

  const initialSound = 0
  const [indexx, setIndexx] = useState(initialSound)

  

  const sound = new Howl({
    src: [ekkoAudio]
  });
  

  //needs a bugfix, takes over everything
  sound.play();



  const profile2 = {
    headline:"Garen Champion Spotlight",
    headline2:"Hover GAREN SPINNING Basterd",
    vidSource:backgroundVideoTwo,
    picOne:p1G,
    picTwo:p2G,
    picThree:p3G,

  }

  const profile1 = {
    headline:"Ekko Champion Spotlight",
    headline2:"Hover Dose Icons Basterd",
    vidSource:backgroundVideoOne,
    picOne:p1,
    picTwo:p2,
    picThree:p3,
  }

  const database = [
    profile1,
    profile2
  ]
  const {headline,headline2,vidSource,picOne,picTwo,picThree} = database[index]



  const soundUrl = bloop;

  const [playbackRate, setPlaybackRate] = React.useState(0.75);

  const [play] = useSound(soundUrl, {
    playbackRate,
    volume: 0.5,
  });


  
  const handleClick = () => {
    setPlaybackRate(playbackRate + 0.1);
    play();
  };





  return (
    <div className="App">
      <video autoPlay loop muted
      style={{
        position: "absolute",
        width: "100%",
        left: "50%",
        top: "50%",
        height: "100%",
        objectFit: "cover",
        transform: "translate(-50%, -50%)",
        zIndex: "-1"
      }}
      > 
      
        <source src ={vidSource} type="video/mp4"/>
      </video>
    
      <h1 style={{ color: 'white' }}>{headline}</h1>
     <h2 style={{ color: 'white' }}>{headline2}</h2>
     <img class="picOne"
          style={ {width: "200px", height: "auto"}} 
          src = {picOne}
          ></img>
  
  <img class="picTwo"
        style={ {width: "200px", height: "auto"}} 
          src = {picTwo}
          ></img>

      <img 
      
       onClick = {()=>{setIndexx(sound)}} 
          class="picThree" 
          style={ {width: "200px", height: "auto"}} 
          src = {picThree}
          ></img>

      <button onClick = {()=>{setIndex(1)}} >IDEKLIKK</button>


      <button onClick = {()=>{setIndexx(sound)}} >LEGYENTANC</button>


      <button onClick={handleClick}>
      <span role="img" aria-label="Heart">
        💖
      </span>
    </button>

    



   </div>
  );
}

export default App;
