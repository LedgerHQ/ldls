import { Box, Divider, Text } from '@ledgerhq/lumen-ui-rnative';
import React from 'react';

type SandboxBlockProps = {
  title: string;
  children: React.ReactNode;
  hideDivider?: boolean;
};

export const SandboxBlock = ({
  title,
  children,
  hideDivider = false,
}: SandboxBlockProps) => {
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
      {!hideDivider && <Divider lx={{ marginTop: 's32' }} />}
    </Box>
  );
};
