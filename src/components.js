import React from "react";
import PageText from "./components/global/PageText";
import WFPArticleGrid from "./components/global/WFPArticleGrid";

const Components = {
  PageText,
  WFPArticleGrid
};

// eslint-disable-next-line import/no-anonymous-default-export
export default (block, data) => {
  if (typeof Components[block.component] !== "undefined") {
    return React.createElement(Components[block.component], {
      key: block._uid,
      block: block,
      data
    });
  }
  return React.createElement(
    (el) => <div>The component {block.component} has not been created yet.</div>,
    { key: block._uid }
  );
};
