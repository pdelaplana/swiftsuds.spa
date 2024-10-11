import React from 'react';

import { PublicClientApplication } from '@azure/msal-browser';
import { render } from '@testing-library/react';
import { vi } from 'vitest';

import App from './App';

vi.mock('@azure/msal-browser', () => {
  const mockPublicClientApplication = {
    loginRedirect: vi.fn(),
    loginPopup: vi.fn(),
    acquireTokenSilent: vi.fn(() => Promise.resolve({ accessToken: 'mock_access_token' })),
    acquireTokenPopup: vi.fn(),
    acquireTokenRedirect: vi.fn(),
    logout: vi.fn(),
    getAllAccounts: vi.fn(() => [{ homeAccountId: 'test_account_id' }]),
    getAccountByHomeId: vi.fn(),
  };

  return {
    PublicClientApplication: vi.fn(() => mockPublicClientApplication),
  };
});

test('renders without crashing', () => {
  let msalInstance = new PublicClientApplication({
    auth: {
      clientId: 'your_client_id',
      authority: 'https://login.microsoftonline.com/your_tenant_id',
    },
  });
  const { baseElement } = render(<App msalInstance={msalInstance} />);
  expect(baseElement).toBeDefined();
});
