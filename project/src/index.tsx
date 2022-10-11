import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './components/app/app';
import {promoMovie} from './mocks/promo-movie';
import {films} from './mocks/films';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement,
);

root.render(
  <React.StrictMode>
    <App promoMovie={promoMovie} films={films}/>
  </React.StrictMode>,
);
