import { IonImg } from "@ionic/react";

const MainLogo: React.FC = () => {
  return (
    <IonImg
      style={{width: '350px', height: '250px'}}
      src="/resources/swift-suds-logo.png"
      alt="SwiftSuds"
      data-testid="the-logo"
    ></IonImg>
  );
};

export default MainLogo;
