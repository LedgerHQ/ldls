import React from 'react';
import { Box, Text } from '../../../src/lib/Components/Utility';

type DontBlockItemProps = {
  title?: string;
  description?: string;
  children: React.ReactNode;
};

export const DontBlockItem: React.FC<DontBlockItemProps> = ({
  title,
  description,
  children,
}) => {
  return (
    <Box lx={{ gap: 's12' }} {...{ 'data-type': 'dont-item' }}>
      {/* Header */}
      {(title || description) && (
        <Box lx={{ gap: 's4' }}>
          {title && (
            <Box lx={{ flexDirection: 'row', alignItems: 'center', gap: 's8' }}>
              <Text style={{ color: '#EF4444' }}>✕</Text>
              <Text typography='body2SemiBold' lx={{ color: 'base' }}>
                {title}
              </Text>
            </Box>
          )}
          {description && (
            <Text typography='body3' lx={{ color: 'muted' }}>
              {description}
            </Text>
          )}
        </Box>
      )}

      {/* Code Block */}
      <Box>{children}</Box>
    </Box>
  );
};
