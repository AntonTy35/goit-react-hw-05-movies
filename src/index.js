import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import ReactDOM from 'react-dom/client';
import { App } from 'components/App';
import 'modern-normalize';

import './index.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter basename="/goit-react-hw-05-movies">
      <App />
    </BrowserRouter>
  </React.StrictMode>
);

// basename = '/goit-react-hw-05-movies';

// Ключ API
// e5720262ef788a357c4847198d11621a

// Ключ доступа к API
// eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJlNTcyMDI2MmVmNzg4YTM1N2M0ODQ3MTk4ZDExNjIxYSIsInN1YiI6IjY0ZjQ0MzFkN2Q0MWFhMDBjNDg5YmJkYiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.GPLUjxxwylesj_PPO4VHcczKrGSXk4C1oXm56IP7TqU
