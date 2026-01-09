import type { Meta, StoryObj } from '@storybook/react-native';
import React from 'react';
import { View, Text } from 'react-native';
import { Information } from '../../Symbols';
import { InteractiveIcon } from '../InteractiveIcon';
import { Tooltip, TooltipTrigger, TooltipContent } from '../Tooltip';
import {
  Subheader,
  SubheaderRow,
  SubheaderTitle,
  SubheaderCount,
  SubheaderHint,
  SubheaderDescription,
  SubheaderAction,
} from './Subheader';

const Container = ({ children }: { children: React.ReactNode }) => (
  <View style={{ padding: 8, backgroundColor: '#ffffff', width: '100%' }}>
    {children}
  </View>
);

const InfoTooltip = (
  <Tooltip>
    <TooltipTrigger>
      <InteractiveIcon iconType='stroked'>
        <Information />
      </InteractiveIcon>
    </TooltipTrigger>
    <TooltipContent content={<Text>This is additional information</Text>} />
  </Tooltip>
);

const meta: Meta<typeof Subheader> = {
  component: Subheader,
  title: 'Communication/Subheader',
  subcomponents: {
    SubheaderRow,
    SubheaderTitle,
    SubheaderDescription,
    SubheaderCount,
    SubheaderHint,
    SubheaderAction,
  },
  decorators: [
    (Story) => (
      <Container>
        <Story />
      </Container>
    ),
  ],
};

export default meta;
type Story = StoryObj<typeof Subheader>;

export const Base: Story = {
  render: () => (
    <Subheader>
      <SubheaderRow>
        <SubheaderTitle>Subheader Title</SubheaderTitle>
      </SubheaderRow>
    </Subheader>
  ),
};

export const WithDescription: Story = {
  render: () => (
    <Subheader>
      <SubheaderRow>
        <SubheaderTitle>Section Title</SubheaderTitle>
      </SubheaderRow>
      <SubheaderDescription>
        This is a detailed description that provides additional context about
        this section.
      </SubheaderDescription>
    </Subheader>
  ),
};

export const Complete: Story = {
  render: () => (
    <Subheader>
      <SubheaderRow>
        <SubheaderTitle>Full Featured Subheader</SubheaderTitle>
        <SubheaderCount value={42} />
        <SubheaderHint content={InfoTooltip} />
        <SubheaderAction onPress={() => console.log('Action')}>
          Action
        </SubheaderAction>
      </SubheaderRow>
      <SubheaderDescription>
        This subheader demonstrates all available features including title,
        count, hint, description, and action.
      </SubheaderDescription>
    </Subheader>
  ),
};

export const Interactive: Story = {
  render: () => (
    <Subheader>
      <SubheaderRow onPress={() => console.log('Row clicked')}>
        <SubheaderTitle>Clickable Row</SubheaderTitle>
        <SubheaderCount value={12} />
      </SubheaderRow>
      <SubheaderDescription>
        The entire row is clickable when onPress is provided
      </SubheaderDescription>
    </Subheader>
  ),
};
