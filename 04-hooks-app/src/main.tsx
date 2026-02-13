import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';

import { Toaster } from 'sonner';

//import { ScrambleWords } from './05-useReducer/ScrambleWords';
//import { MemoHook } from './06-memos/MemoHook';
//import { InstagromApp } from './07-useOptimistic/InstagromApp';
//import { ClientInformation } from './08-use-suspense/ClientInformation';
//import { getUserAction } from './08-use-suspense/api/get-user.action';
import { ProfessionalApp } from './09-useContext/ProfessionalApp';

import './index.css';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Toaster />
    {/*<Suspense
      fallback={
        <div className="bg-gradient flex flex-col">
          <h1 className="text-2xl">Cargando</h1>
        </div>
      }
    >
      <ClientInformation getUser={getUserAction(1001)} />
    </Suspense>*/}
    <ProfessionalApp />
  </StrictMode>,
);
