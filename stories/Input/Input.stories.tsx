import type { Meta, StoryObj } from '@storybook/react';
import { Input } from './Input';

const meta: Meta<typeof Input> = {
  title: 'Control/Input',
  component: Input,
  tags: ['autodocs'],
  argTypes: {
    type: {
      options: ['email', 'number', 'text'],
      control: 'radio',
    },
  },
};

export default meta;
type Story = StoryObj<typeof Input>;

export const Default: Story = {
  args: {
    value: 'Text value',
    type: 'text',
  },
};
