import { Route } from 'react-router-dom';
import { withAuthenticationRequired } from '@auth0/auth0-react';

const ProtectedRoute = ({ element, ...args }) => (
    <React.Fragment>
        <Route
            element={withAuthenticationRequired(element, {
                onRedirecting: () => (<div>Loading</div>),
              }) as unknown as React.ReactNode} // HOC returns FC which needs to be cast to ReactNode 
            {...args}
        />
    </React.Fragment>
  );

export default ProtectedRoute;