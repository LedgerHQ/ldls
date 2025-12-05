import { Button, ThemeProvider } from '@ledgerhq/ldls-ui-react';
import { Incognito } from '@ledgerhq/ldls-ui-react/symbols';
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';

import '../../src/global.css';

const root = document.getElementById('root');
if (root) {
  createRoot(root).render(
    <StrictMode>
      <ThemeProvider defaultMode='light'>
        <div className='flex h-screen w-screen flex-col items-center justify-center gap-16 bg-base'>
          <Incognito size={48} />
          <Button appearance='accent'>Tree Shaking Test</Button>
        </div>
      </ThemeProvider>
    </StrictMode>,
  );
}
