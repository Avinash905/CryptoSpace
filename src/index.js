import { ColorModeScript } from '@chakra-ui/react';
import React, { StrictMode } from 'react';
import * as ReactDOM from 'react-dom/client';
import App from './App';
import reportWebVitals from './reportWebVitals';
import * as serviceWorker from './serviceWorker';
import { ColorModeSwitcher } from './ColorModeSwitcher';
import { ChakraProvider, theme } from '@chakra-ui/react';
import { AppProvider } from './components/Context';

const container = document.getElementById('root');
const root = ReactDOM.createRoot(container);

root.render(
  <StrictMode>
    <ColorModeScript />
    <ChakraProvider theme={theme}>
      <ColorModeSwitcher
        justifySelf="flex-end"
        backgroundColor="white"
        color="black"
        _hover={{
          backgroundColor: 'white',
          color: 'black',
        }}
      />
      <AppProvider>
        <App />
      </AppProvider>
    </ChakraProvider>
  </StrictMode>
);
serviceWorker.unregister();
reportWebVitals();
