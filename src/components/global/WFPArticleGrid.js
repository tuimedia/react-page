import React, {useState} from "react";
import { useSelector } from "react-redux";
import styled from "styled-components";
import Components from "../../components";
import translatedBlock from "../../filters/translatedBlock";

const Wrapper = styled.div ``;

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

  return <Wrapper className="tui-page">{renderComponents()}</Wrapper>;
};

export default WFPArticleGrid;










