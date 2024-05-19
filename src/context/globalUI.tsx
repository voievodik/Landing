import type { ReactNode } from 'react';
import { createContext, useContext } from 'react';
import toast from 'react-hot-toast';

interface Props {
  children: ReactNode;
}

interface GlobalUIContextType {
  toastSuccess: (title: string) => void;
  toastError: (title: string, isSetting?: boolean, action?: () => void) => void;
}

const GlobalUiContext = createContext<GlobalUIContextType>({
  toastSuccess: () => {},
  toastError: () => {}
});

function GlobalUIProvider({ children }: Props) {
  const toastSuccess = (message: string): void => {
    if (message) {
      toast.success(message);
    }
  };

  const toastError = (message: string): void => {
    if (message) {
      toast.error(message);
    }
  };
  const value = {
    toastSuccess,
    toastError
  };
  return (
    <GlobalUiContext.Provider value={value}>
      {children}
    </GlobalUiContext.Provider>
  );
}

const useGlobalUI = () => useContext(GlobalUiContext);

export { GlobalUIProvider, useGlobalUI };
