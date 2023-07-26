import type { Meta, StoryObj } from '@storybook/react';
import { Discount } from './Discount';

const meta: Meta<typeof Discount> = {
  title: 'Layout/Discount',
  component: Discount,
  tags: ['autodocs'],
  argTypes: {},
};

export default meta;
type Story = StoryObj<typeof Discount>;

export const Primary: Story = {
  args: {},
};
