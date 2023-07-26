import type { Meta, StoryObj } from '@storybook/react';
import { IconButton } from './IconButton';
import Prev from '@/public/svg/prev.svg';

const meta: Meta<typeof IconButton> = {
  title: 'Control/IconButton',
  component: IconButton,
  tags: ['autodocs'],
  argTypes: {},
};

export default meta;
type Story = StoryObj<typeof IconButton>;

export const Primary: Story = {
  args: {
    width: 17,
    height: 17,
    icon: <Prev />,
  },
};
