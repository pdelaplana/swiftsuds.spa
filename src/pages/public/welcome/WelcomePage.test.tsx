import { IonApp } from '@ionic/react';
import { render, screen } from '@testing-library/react';

import WelcomePage from './WelcomePage';

test('Welcome page renders without crashing', () => {
  render(
    <IonApp>
      <WelcomePage/>
    </IonApp>
  );

  // check if the logo is available
  expect(screen.getByTestId('the-logo')).toBeInTheDocument();
});
