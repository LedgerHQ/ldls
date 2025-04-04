import type { Meta, StoryObj } from "@storybook/react";

import { Button } from "./Button";

const meta: Meta<typeof Button> = {
  component: Button,
  title: "Design System/Button",
  args: {
    children: "Click me",
  },
};

type Story = StoryObj<typeof Button>;

export const Primary: Story = {};

export const Outline: Story = {
  args: {
    variant: "outline",
  },
};

export const Link: Story = {
  args: {
    variant: "link",
  },
};

export const Ghost: Story = {
  args: {
    variant: "ghost",
  },
};

export default meta;