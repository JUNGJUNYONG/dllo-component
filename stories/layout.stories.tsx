import * as React from 'react';
import { Meta } from '@storybook/react/types-6-0';
import { Story } from '@storybook/react';
import dllo from '../dist/dllo.js';

export default ({
  title: 'DllO/Layout',
  component: dllo.layout,
} as unknown) as Meta;
eeeeee;

const panelTemplate: Story = (args) => <dllo.layout.Panel {...args} />;

// Reuse that template for creating different stories
export const panel = panelTemplate.bind({});
panel.args = { children: <h1> 테스트1 입니다.</h1> };

const containerTemplate: Story = (args) => <dllo.layout.Container {...args} />;
export const container = containerTemplate.bind({});
container.args = { children: <h1> 테스트2 입니다.</h1> };
