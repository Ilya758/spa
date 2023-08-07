import type { Meta, StoryObj } from '@storybook/react';
import { Label } from './Label';
import { Text } from '../Text';
import { Checkbox } from '../Checkbox';

const meta: Meta<typeof Label> = {
  title: 'Control/Label',
  component: Label,
  tags: ['autodocs'],
  argTypes: {},
};

export default meta;
type Story = StoryObj<typeof Label>;

export const Default: Story = {
  args: {
    children: (
      <>
        <div style={{ marginRight: '8px' }}>
          <Text>Label text</Text>
        </div>
        <Checkbox />
      </>
    ),
  },
};
