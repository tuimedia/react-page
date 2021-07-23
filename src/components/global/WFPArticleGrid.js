import React, {useState} from "react";
import styled from "styled-components";
import Components from "../../components";

const Wrapper = styled.div `
    border: 1px solid red;
`;

const WFPArticleGrid = props => {
  const [language, setLanguage] = useState('en_GB') 
  const [content] = useState(props.data.blocks);

  console.log('articlegrid', props);

  const translatedBlock = id => {
    const row = {
      ...content[id]
    };

    return row;
  };

  const renderComponents = () => {
    const components = [];
    for (const block in content) {
      components.push(Components(content[block], translatedBlock(block)));
    }
    return components;
  };

  return <Wrapper class="tui-page">{renderComponents()}</Wrapper>;
};

export default WFPArticleGrid;





