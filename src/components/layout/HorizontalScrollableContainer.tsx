import type { PropsWithChildren } from 'react';
import React from 'react';

const horizontalScrollerStyle = {
  padding: '10px',
  //display: 'flex',
  width: '100%', // or any specific width
  overflowX: 'auto',
  whiteSpace: 'nowrap',
  scrollbarWidth: 'none', // Firefox
  msOverflowStyle: 'none', // IE and Edge
  WebkitScrollbar: {
    display: 'none' // Chrome, Safari, and Opera
  }
} as React.CSSProperties;


interface HorizontalScrollableContainerProps extends PropsWithChildren {

}

const HorizontalScrollableContainer: React.FC<HorizontalScrollableContainerProps> = ({children}) => {
  return(
    <div style={horizontalScrollerStyle}>
      {children}
    </div>
  );
};

export default HorizontalScrollableContainer;
