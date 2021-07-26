import React, {useState, useEffect} from "react";
import styled from "styled-components";
import Components from "../components";
import {useDispatch, useSelector} from "react-redux";
import {setLanguage, setPage} from "../store/index";
import translatedRows from "../filters/translatedRows";
import translatedBlock from "../filters/translatedBlock";
import axios from 'axios'

const Wrapper = styled.div ``;

const TuiPage = props => {
  const dispatch = useDispatch();
  const language = useSelector(state => state.index.language);
  const content = useSelector(
    state => state.index
    ?.page
      ?.pageData
        ?.content);

  // Only gets executed if there's a URL instead of a data tag
  const getUrl = () => {
    axios.get(props.url, {
      headers: {
        'Authorization': `Bearer token`
      }
    })
    .then(function (response) {
      dispatch(setPage(response.data));
    })
    .catch(function (error) {
      console.log(error);
    })
  }

  useEffect(() => {
    // Gets either the data or the URL tags
    if (!props.url) {
      dispatch(setPage(props.data));
    } else {
      getUrl();
    }
    dispatch(setLanguage(props.language));
  }, [props.data]);

  // Gets all translated rows data
  const getTranslatedRows = useSelector(state => {
    return translatedRows(
      content,
    language);
  });

  // Renders all components
  const renderComponents = () => {
    const components = [];
    getTranslatedRows.forEach(block => {
        components.push(Components(block, translatedBlock(block.id, content, language)));
      });
    return components;
  };

  return <Wrapper className={props.class}>{renderComponents()}</Wrapper>;
};

export default TuiPage;

