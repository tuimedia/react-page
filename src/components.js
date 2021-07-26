import React from "react";
import styled from "styled-components";
import loadGlobalComponents from "./load-global-components";

const UnavailableComponent = styled.div `
  padding: 30px;
  text-align: center;
  font-family: "Courier New", Courier, monospace;
  background-color: rgb(240, 239, 239);
`;

const LoadComponents = loadGlobalComponents();

// eslint-disable-next-line import/no-anonymous-default-export
export default block => {
  if (typeof LoadComponents[block.component] !== "undefined") {
    return (<div id={`${block.id}`} key={block.id} className={`tui-page__block tui-page__block--${block.component}`}>
      {
        React.createElement(LoadComponents[block.component], {
          key: block._uid,
          block
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
