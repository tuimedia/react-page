import React, {useState} from "react";
import styled from "styled-components";
import Components from "../components";

const Wrapper = styled.div ``;

const TuiPage = props => {
  const [language, setLanguage] = useState(props.language ?? 'en_GB') 
  const [layout] = useState(props.data.pageData.content.layout);
  const [blocks] = useState(props.data.pageData.content.blocks);

  console.log('layout', layout); 
  console.log('blocks', blocks); 

  const translatedBlock = id => {
    const content = props.data.pageData.content;
    const row = {
      ...blocks[id]
    };
    if (content.langData[props.data.pageData.defaultLanguage].hasOwnProperty(row.id)) {
      Object.assign(row, content.langData[props.data.pageData.defaultLanguage][row.id]);
    }

    // Falls back to en_GB
    if (content.langData[language]) {
        Object.assign(row, content.langData[language][row.id]);
    }
    return row;
  };

  const renderComponents = () => {
    const components = [];
    for (const block in blocks) {
        if(props.data.pageData.content.blocks.hasOwnProperty('l8wveVDB6cf9')){
            console.log("yes, i have that property");
        } else {
            console.log("yes, i have that property");
        }
        console.log('block', block, blocks[block])
        console.log('translatedBlock', translatedBlock(block));
        components.push(Components(blocks[block], translatedBlock(block)));
    }
    return components;
  };

  return <Wrapper class="tui-page">{renderComponents()}</Wrapper>;
};

export default TuiPage;
