import { Box, Text } from '@ledgerhq/lumen-ui-rnative';
import React from 'react';

type SandboxBlockProps = {
  title: string;
  children: React.ReactNode;
};

export const SandboxBlock = ({ title, children }: SandboxBlockProps) => {
  return (
    <Box lx={{ gap: 's8' }}>
      <Text typography='heading4SemiBold' lx={{ color: 'base' }}>
        {title}
      </Text>
      <Box
        lx={{
          flexDirection: 'row',
          flexWrap: 'wrap',
          gap: 's12',
        }}
      >
        {children}
      </Box>
    </Box>
  );
};
