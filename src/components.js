import React from "react";
import { useSelector } from "react-redux";
import styled from "styled-components";
import loadGlobalComponents from "./load-global-components";
import store from '../src/store'

const UnavailableComponent = styled.div `
  padding: 30px;
  text-align: center;
  font-family: "Courier New", Courier, monospace;
  background-color: rgb(240, 239, 239);
`;

const LoadComponents = loadGlobalComponents();

// eslint-disable-next-line import/no-anonymous-default-export
export default block => {
  const langData = store.getState().index
    ?.page
      ?.pageData
        ?.content
          ?.langData;
  const language = store.getState().index
    ?.language;

  if (typeof LoadComponents[block.component] !== "undefined") {
    // page.pageData.content.langData[ page.pageData.defaultLanguage ][blockId]
    return (<div id={`${block.id}`} key={block.id} className={`tui-page__block tui-page__block--${block.component}`}>
      {
        React.createElement(LoadComponents[block.component], {
          key: block._uid,
          block,
          langData: langData[language][block.id]
        })
      }
    </div>);
  }
  return React.createElement(el => (<UnavailableComponent key={block.id}>
    The component
    <strong> {block.component} </strong>
    has not been created yet.
    <span> (ID: {block.id})</span>
  </UnavailableComponent>), {key: block._uid});
};
