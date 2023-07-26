import type { Meta, StoryObj } from '@storybook/react';
import { Article } from './Article';

const meta: Meta<typeof Article> = {
  title: 'Layout/Article',
  component: Article,
  tags: ['autodocs'],
  argTypes: {},
};

export default meta;
type Story = StoryObj<typeof Article>;

export const Primary: Story = {
  args: {
    heading: 'Heading of an article',
    items: [
      {
        imageSrc: '',
        text: 'First item',
      },
      {
        imageSrc: '',
        text: 'Second item',
      },
    ],
  },
};
