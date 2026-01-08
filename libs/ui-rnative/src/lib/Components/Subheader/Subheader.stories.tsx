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
  <View style={{ padding: 8, backgroundColor: '#ffffff' }}>{children}</View>
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

export const WithoutRow: Story = {
  render: () => (
    <Subheader>
      <SubheaderTitle>Simple Title</SubheaderTitle>
      <SubheaderDescription>
        You can use Subheader without Row for simpler layouts
      </SubheaderDescription>
    </Subheader>
  ),
};

export const WithCount: Story = {
  render: () => (
    <Subheader>
      <SubheaderRow>
        <SubheaderTitle>Accounts</SubheaderTitle>
        <SubheaderCount value={30} />
      </SubheaderRow>
    </Subheader>
  ),
};

export const WithCustomCountFormat: Story = {
  render: () => (
    <Subheader>
      <SubheaderRow>
        <SubheaderTitle>Notifications</SubheaderTitle>
        <SubheaderCount
          value={150}
          format={(n) => (n > 99 ? '(99+)' : `(${n})`)}
        />
      </SubheaderRow>
    </Subheader>
  ),
};

export const WithHint: Story = {
  render: () => (
    <Subheader>
      <SubheaderRow>
        <SubheaderTitle>Subheader with Hint</SubheaderTitle>
        <SubheaderHint content={InfoTooltip} />
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

export const WithActionInRow: Story = {
  render: () => (
    <Subheader>
      <SubheaderRow>
        <SubheaderTitle>Subheader with Action</SubheaderTitle>
        <SubheaderAction onPress={() => console.log('Action clicked')}>
          Manage
        </SubheaderAction>
      </SubheaderRow>
    </Subheader>
  ),
};

export const WithInteractiveRow: Story = {
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

export const WithFullFeatures: Story = {
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

export const ContentVariations: Story = {
  render: () => (
    <View style={{ gap: 16 }}>
      <Subheader>
        <SubheaderRow>
          <SubheaderTitle>Title Only</SubheaderTitle>
        </SubheaderRow>
      </Subheader>
      <Subheader>
        <SubheaderRow>
          <SubheaderTitle>With Count</SubheaderTitle>
          <SubheaderCount value={15} />
        </SubheaderRow>
      </Subheader>
      <Subheader>
        <SubheaderRow>
          <SubheaderTitle>With Hint</SubheaderTitle>
          <SubheaderHint content={InfoTooltip} />
        </SubheaderRow>
      </Subheader>
      <Subheader>
        <SubheaderRow>
          <SubheaderTitle>With Action</SubheaderTitle>
          <SubheaderAction onPress={() => console.log('Action')}>
            Action
          </SubheaderAction>
        </SubheaderRow>
      </Subheader>
      <Subheader>
        <SubheaderRow>
          <SubheaderTitle>Complete</SubheaderTitle>
          <SubheaderCount value={99} />
          <SubheaderHint content={InfoTooltip} />
          <SubheaderAction onPress={() => console.log('Action')}>
            Action
          </SubheaderAction>
        </SubheaderRow>
      </Subheader>
    </View>
  ),
};

export const ResponsiveLayout: Story = {
  render: () => (
    <View style={{ gap: 16 }}>
      <Subheader>
        <SubheaderRow>
          <SubheaderTitle>Title with Hint</SubheaderTitle>
          <SubheaderHint content={InfoTooltip} />
          <SubheaderAction onPress={() => console.log('Action')}>
            Action
          </SubheaderAction>
        </SubheaderRow>
      </Subheader>
      <Subheader>
        <SubheaderRow>
          <SubheaderTitle>
            Long Title That Should Truncate When Container Is Narrow
          </SubheaderTitle>
          <SubheaderCount value={123} />
          <SubheaderHint content={InfoTooltip} />
          <SubheaderAction onPress={() => console.log('Action')}>
            Action
          </SubheaderAction>
        </SubheaderRow>
      </Subheader>
    </View>
  ),
};
