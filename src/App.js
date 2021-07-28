import TuiPage from "./components/TuiPage";
import sample from "./sample/sample.json";
import React, {useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {setLanguage} from "./store/index";
import useTranslatedMetadata from "./filters/useTranslatedMetadata";

function App() {
  const dispatch = useDispatch();
  const language = useSelector(state => state.index.language);

  //console.log('translatedMetadata', useTranslatedMetadata(sample, 'en_GB'));

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
      language={language}
      loading={<div>Loading...</div>}
      error={<div>This is an error</div>}>
    </TuiPage>
  </div>);
}

export default App;
