import React from 'react';
import { Text, View } from 'react-native';

type SandboxBlockProps = {
  title: string;
  children: React.ReactNode;
};

export const SandboxBlock = ({ title, children }: SandboxBlockProps) => {
  return (
    <View className='border-muted-subtle flex flex-col gap-8 border-t pt-16'>
      <Text className='heading-3-semi-bold text-base'>{title}</Text>
      <View className='flex-row flex-wrap gap-12'>{children}</View>
    </View>
  );
};
