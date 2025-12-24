import React from 'react';
import { Box, Text } from '../../../src/lib/Components/Utility';

type DoBlockItemProps = {
  title?: string;
  description?: string;
  children: React.ReactNode;
};

export const DoBlockItem: React.FC<DoBlockItemProps> = ({
  title,
  description,
  children,
}) => {
  return (
    <Box lx={{ gap: 's12' }} {...{ 'data-type': 'do-item' }}>
      {/* Header */}
      {(title || description) && (
        <Box lx={{ gap: 's4' }}>
          {title && (
            <Box lx={{ flexDirection: 'row', alignItems: 'center', gap: 's8' }}>
              <Text style={{ color: '#10B981' }}>✓</Text>
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
