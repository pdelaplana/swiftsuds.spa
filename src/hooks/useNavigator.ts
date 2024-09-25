import { useHistory } from 'react-router';

interface Navigator {
  getState: () => unknown;
  go: (pathname: string, state?: unknown, action?: 'PUSH'|'POP'|'REPLACE') => void
}

export const useNavigator = () : Navigator => {

  const history  = useHistory();

  return {
    go: (pathname: string, state?: unknown, action?: 'PUSH'|'POP'| 'REPLACE') => {
      if (action === 'REPLACE') {
        history.replace({
          pathname,
          state });
        return;
      }
      history.action = action ?? 'PUSH';
      history.push({
        pathname,
        state });

    },
    getState: () => history.location.state,
  };
};
