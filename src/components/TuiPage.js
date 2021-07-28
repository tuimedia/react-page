import React, {useState, useEffect} from "react";
import styled from "styled-components";
import Components from "../components";
import {useDispatch, useSelector} from "react-redux";
import {setLanguage, setPage, setPageState} from "../store/index";
import translatedRows from "../filters/translatedRows";
import translatedBlock from "../filters/translatedBlock";
import axios from 'axios'

const Wrapper = styled.div ``;
const Loading = styled.div `
  display: ${props => props.show == 'loading' ? 'block' : 'none'};
`;

const Error = styled.div `
  display: ${props => props.show == 'error' ? 'block' : 'none'};
`;

const TuiPage = props => {
  const dispatch = useDispatch();
  const language = useSelector(state => state.index.language);
  const pageState = useSelector(state => state.index.pageState);
  const [error, setError] = useState(null);

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
      dispatch(setPageState('loaded'));
    })
    .catch(function (error) {
      console.log(error);
      dispatch(setPageState('error'));
      setError(error);
    })
  }

  useEffect(() => {
    // Gets either the data or the URL tags
    if (!props.url) {
      dispatch(setPage(props.data));
      dispatch(setPageState('loaded'));
    } else {
      getUrl();
      dispatch(setPageState('loading'));
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

  return (
    <Wrapper className={props.class}>
      <Error show={pageState}>{props.error}</Error>
      <Loading show={pageState}>{props.loading}</Loading>
      {renderComponents()}
    </Wrapper>
  );
};

export default TuiPage;

