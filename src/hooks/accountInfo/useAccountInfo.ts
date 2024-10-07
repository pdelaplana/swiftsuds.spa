import { useMemo } from 'react';

import type { AccountInfo } from '@azure/msal-browser';
import { useMsal } from '@azure/msal-react';

export interface AccountInfoResult {
  name: string,
  email: string,
  activeAccount: AccountInfo,
  handleLogout: () => void
};

export const useAccountInfo = (): AccountInfoResult => {
  const { instance } = useMsal();

  const { activeAccount, handleLogout } = useMemo(() => {
    return {
      activeAccount: instance.getActiveAccount() as AccountInfo,
      claims: instance.getActiveAccount()?.idTokenClaims,
      handleLogout: () => instance.logoutRedirect()
    };
  },[instance]);

  return {
    name: activeAccount.name,
    email: activeAccount.username,
    activeAccount,
    handleLogout
  };
};
