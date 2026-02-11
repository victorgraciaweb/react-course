import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';

//import { ScrambleWords } from './05-useReducer/ScrambleWords';
//import { MemoHook } from './06-memos/MemoHook';
import { InstagromApp } from './07-useOptimistic/InstagromApp';

import './index.css';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <InstagromApp />
  </StrictMode>,
);
