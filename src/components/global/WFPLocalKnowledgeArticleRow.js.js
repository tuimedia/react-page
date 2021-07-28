import React, {useState} from "react";
import { useSelector } from "react-redux";
import styled from "styled-components";
import Components from "../../components";
import translatedBlock from "../../filters/translatedBlock";

const Wrapper = styled.div `
  border: 1px solid red;
`;

const WFPArticleGrid = props => {
  const content = useSelector(state => state.index?.page?.pageData?.content);
  const language = useSelector(state => state.index.language);

  const renderComponents = () => {
    const components = [];
    props.block.blocks.forEach(block => {
        components.push(Components(translatedBlock(block, content, language)));
      });
    return components;
  };

  console.log('props from articlerow', props);

  return (
    <Wrapper className="wfp-article-grid">
      <div>{props.langData.title}</div>
      {renderComponents()}
    </Wrapper>
  );
};

export default WFPArticleGrid;










