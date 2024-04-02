import React from 'react';
import ReactMarkdown from 'react-markdown';
import styled from 'styled-components';

const MarkdownContainer = styled.div`
  h1, h2, h3, h4, h5, h6 {
    color: purple;
  }
  li {
    color: blue;
  }
`;

const MarkdownRender = ({ content }) => (
  <MarkdownContainer>
    <ReactMarkdown children={content} />
  </MarkdownContainer>
);

export default MarkdownRender;