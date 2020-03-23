import React, { useEffect, useState }  from 'react';
import logo from './logo.svg';
import './App.css';
import { NONAME } from 'dns';
import dialogflowIcon from "./icons/dialogflowIcon.jpg"

const useStyles = {
  chatboxIcon:{
    position: "absolute",
    width: 60,
    height: 60,
    bottom: 30,
    right: 30,
    borderRadius: 60,
    backgroundColor: "white",
    backgroundImage: `url(${dialogflowIcon})`,
    backgroundPosition: "center",
    backgroundSize: "90% 90%",
    backgroundRepeat: "no-repeat", /* Do not repeat the image */
    display: "block",
    cursor: "pointer",
    /**Hover effect moved to App.css due to issue with CSS specificity*/
  },
  chatbox: {
    position: "absolute",
    width: "350",
    height: "470",
    bottom: 30,
    right: 30,
    display: "none",
    flexDirection: "column"
  },
  chatboxClose: {
    width: 88,
    height: 30,
    borderRadius: 20,
    color: "black",
    verticalAlign: "middle",
    backgroundColor: "white",
    marginBottom: 5,
    cursor: "pointer"
    /**Hover effect moved to App.css due to issue with CSS specificity*/
  }
}

function App() {
  const classes = useStyles;

  const [chatboxToggled, setChatboxToggled] = useState(false);

  function toggleChatbox(){
    if(chatboxToggled === false){
      document.getElementById("chatbox").style.display = "flex";
      document.getElementById("chatboxIcon").style.display = "none";
      setChatboxToggled(!chatboxToggled);
    }
    if(chatboxToggled === true){
      document.getElementById("chatbox").style.display = "none"
      document.getElementById("chatboxIcon").style.display = "block"
      setChatboxToggled(!chatboxToggled);
    }
  }

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React too
        </a>
      </header>
      <div id="chatboxIcon" style={classes.chatboxIcon} onClick={toggleChatbox}></div>
      <div id="chatbox" style={classes.chatbox}>
        <div id="chatboxClose" style={classes.chatboxClose} onClick={toggleChatbox}>Close X</div>
        <iframe
            title="dialogflowChatbox"
            allow="microphone;"
            width="350"
            height="430"
            src="https://console.dialogflow.com/api-client/demo/embedded/ff3f4667-d9c7-4592-86a1-9ed99c681a59">
        </iframe>
      </div>
    </div>
  );
}

export default App;
