import { Toaster } from 'react-hot-toast';
import { Success } from '../Icons/Sucess';
import { Error } from '../Icons/Error';

export const ToasterComponent = () => {
  return (
    <Toaster
      toastOptions={{
        style: {
          paddingBlock: '15px',
          paddingInline: '18px',
          borderRadius: '8px',
          fontWeight: 500,
          fontSize: '14px',
          lineHeight: '20px'
        },
        success: {
          duration: 3000,
          style: {
            background: '#DAF8E6',
            color: '#004434'
          },
          icon: <Success />
        },
        error: {
          duration: 3000,
          style: {
            background: '#FEF3F3',
            color: '#BC1C21'
          },
          icon: <Error />
        }
      }}
    />
  );
};
