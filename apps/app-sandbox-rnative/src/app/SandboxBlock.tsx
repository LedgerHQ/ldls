import { Box, Text } from '@ledgerhq/lumen-ui-rnative';
import React from 'react';

type SandboxBlockProps = {
  title: string;
  children: React.ReactNode;
};

export const SandboxBlock = ({ title, children }: SandboxBlockProps) => {
  return (
    <Box
      lx={{
        flexDirection: 'column',
        gap: 's8',
        borderTopWidth: 's1',
        borderColor: 'muted',
        paddingTop: 's16',
      }}
    >
      <Text typography='heading3SemiBold' lx={{ color: 'base' }}>
        {title}
      </Text>
      <Box
        lx={{
          flexDirection: 'row',
          flexWrap: 'wrap',
          alignItems: 'flex-start',
          gap: 's12',
        }}
      >
        {children}
      </Box>
    </Box>
  );
};
