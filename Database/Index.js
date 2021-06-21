import Routes from '../Routes';
import * as React from 'react'
import { AuthProvider } from './Firebase';

const Providers = () => {
    return (
      <AuthProvider>
        <Routes />
      </AuthProvider>
    );
}

export default Providers;