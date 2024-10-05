import React from 'react';

import { IonImg } from '@ionic/react';
import type { CSSProperties } from 'styled-components';

interface ImageContainerProps {
  src: string;
  text: string;
};

const ImageContainer: React.FC<ImageContainerProps> = ({ src, text }) => {

  const imageContainer: CSSProperties = {
    position: 'relative',
    width: '100%', /* Full width */
    height: '200px' /* Adjust the height as necessary */
  };

  const stretchedImage: CSSProperties = {
    width: '100%',
    height: '100%',
    objectFit: 'cover'
  };

  const textOverlay: CSSProperties = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    color: 'white',
    fontSize: '24px',
    fontWeight: 'bold',
    textAlign: 'center',
    zIndex: 10
  };

  return(
    <div style={imageContainer}>
      <IonImg src={src} style={stretchedImage}></IonImg>
      <div style={textOverlay}>{text}</div>
    </div>

  );

};

export default ImageContainer;
