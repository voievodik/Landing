import ReactDOM from 'react-dom/client';
import App from './App.tsx';
import { GlobalUIProvider } from './context/globalUI.tsx';
import './style/index.scss';
import { UserProvider } from './context/users.tsx';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <GlobalUIProvider>
    <UserProvider>
      <App />
    </UserProvider>
  </GlobalUIProvider>
);
