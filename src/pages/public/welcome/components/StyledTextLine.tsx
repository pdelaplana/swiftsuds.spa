import type { PropsWithChildren } from 'react';
import React from 'react';
import styled from 'styled-components';

// Define the styled-component
const TextWithLine = styled.div`
  position: relative;
  display: inline-block;
  font-size: 18px;
  font-weight: bold;
  padding: 10px;
`;

const Line = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 5px; /* Height of the line */
`;

const StyledTextLine: React.FC<PropsWithChildren> = ({children}) => {
  return (
    <TextWithLine>
      {children}
      <Line />
    </TextWithLine>
  );
};



export default StyledTextLine;
