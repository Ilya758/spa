import type { Meta, StoryObj } from '@storybook/react';
import { List } from './List';

const meta: Meta<typeof List> = {
  title: 'Layout/List',
  component: List,
  tags: ['autodocs'],
  argTypes: {},
};

export default meta;
type Story = StoryObj<typeof List>;

export const Default: Story = {
  args: {
    items: [
      {
        picSrc: '',
        price: '200',
        text: 'some text',
      },
      {
        picSrc: '',
        price: '200',
        text: 'some text',
      },
      {
        picSrc: '',
        price: '200',
        text: 'some text',
      },
    ],
  },
};
