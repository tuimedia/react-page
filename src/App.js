import TuiPage from "./components/TuiPage";
import sample from "./sample/sample.json";
import React, {useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {setLanguage} from "./store/index";

function App() {
  const dispatch = useDispatch();
  const language = useSelector(state => state.index.language);

  return (<div className="App">
    <button onClick={() => {
        dispatch(setLanguage("es"));
      }}>
      Change to ES
    </button>
    <button onClick={() => {
        dispatch(setLanguage("en_GB"));
      }}>
      Change to EN_GB
    </button>
    <TuiPage 
      class="tui-page-class"
      data={sample} 
      language={language}/>
  </div>);
}

export default App;
