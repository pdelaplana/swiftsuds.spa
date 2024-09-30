import React from 'react';

import { IonSpinner } from '@ionic/react';
import type { CSSProperties } from 'styled-components';

interface PageSpinnerProps {
  isSpinning: boolean;
}
const spinnerStyle:CSSProperties = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
};

const PageSpinner: React.FC<PageSpinnerProps> = ({isSpinning}) => {


  return (
     isSpinning && <IonSpinner style={spinnerStyle} name='dots'/>
  );
};

export default PageSpinner;
