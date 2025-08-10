import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.tsx';
import './index.css';
import { GoogleOAuthProvider } from '@react-oauth/google';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
<GoogleOAuthProvider clientId='231801922905-hnr681mp5q65c53452c7b87ogb6l3685.apps.googleusercontent.com'>
    <App />
  </GoogleOAuthProvider>
  </StrictMode>
);
