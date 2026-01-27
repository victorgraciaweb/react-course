import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';

import { ScrambleWordsUseState } from './05-useReducer/ScrambleWordsUseState';

import './index.css';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <ScrambleWordsUseState />
  </StrictMode>,
);
