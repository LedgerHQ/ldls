import React from 'react';
import { Box } from '../../../src/lib/Components/Utility';

type DoVsDontRowProps = {
  children: React.ReactNode;
};

export const DoVsDontRow: React.FC<DoVsDontRowProps> = ({ children }) => {
  return (
    <Box lx={{ gap: 's16' }}>
      <Box lx={{ flexDirection: 'row', gap: 's16', flexWrap: 'wrap' }}>
        {children}
      </Box>
    </Box>
  );
};
