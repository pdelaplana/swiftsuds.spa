import { Route } from 'react-router';

import Page from './pages/Page';
import RegistrationPage from './pages/public/registration/RegistrationPage';

const Routes: React.FC = () => {
  return (
    <>
        {/*
         Use the render method to reduce the number of renders your component will have due to a route change.

        Use the component prop when your component depends on the RouterComponentProps passed in automatically.
        */}
        <Route path="/home" render={() => <Page />} exact={true} />
        <Route path="/orders" render={() => <Page />} exact={true} />
        <Route path="/profile" render={() => <Page />} exact={true} />
        <Route path="/notifications" render={() => <Page />} exact={true} />
        <Route path="/search" render={() => <Page />} exact={true} />
        <Route path="/register" render={() => <RegistrationPage />} exact={true} />
        
    </>
  );
};

export default Routes;
