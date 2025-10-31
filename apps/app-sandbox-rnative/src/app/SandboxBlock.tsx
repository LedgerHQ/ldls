import React from 'react';
import { Text, View } from 'react-native';

type SandboxBlockProps = {
  title: string;
  children: React.ReactNode;
};

export const SandboxBlock = ({ title, children }: SandboxBlockProps) => {
  return (
    <View className='flex flex-col gap-8 border-t border-muted-subtle pt-16'>
      <Text className='text-base heading-3-semi-bold'>{title}</Text>
      <View className='flex-row flex-wrap items-start gap-12'>{children}</View>
    </View>
  );
};
