import type { Meta, StoryObj } from '@storybook/react';
import { Enumeration } from './Enumeration';

const meta: Meta<typeof Enumeration> = {
  title: 'Layout/Enumeration',
  component: Enumeration,
  tags: ['autodocs'],
  argTypes: {},
};

export default meta;
type Story = StoryObj<typeof Enumeration>;

export const Primary: Story = {
  args: {
    heading: 'Some',
  },
};
