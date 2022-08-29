import { Route } from 'react-router-dom';
import { withAuthenticationRequired } from '@auth0/auth0-react';
import { ReactNode } from 'react';

const ProtectedRoute = ({ element, ...args }) => (
  <Route
    element={withAuthenticationRequired(element, {
      onRedirecting: () => <div>Loading!</div>,
    }) as unknown as ReactNode}
    {...args}
  /> 
);

export default ProtectedRoute;