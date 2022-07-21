import { ComponentMeta, ComponentStory } from '@storybook/react';

import Error from './error';

export default {
  title: 'components/error',
  component: Error,
} as ComponentMeta<typeof Error>;

const Template: ComponentStory<typeof Error> = (args) => <Error {...args} />;

export const Default = Template.bind({});
