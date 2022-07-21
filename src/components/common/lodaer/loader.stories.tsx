import { ComponentMeta, ComponentStory } from '@storybook/react';

import Loader from './lodaer';

export default {
  title: 'components/common/loader',
  component: Loader,
} as ComponentMeta<typeof Loader>;

const Template: ComponentStory<typeof Loader> = (args) => <Loader {...args} />;

export const Default = Template.bind({});
// Default.args = {
//   score: 10,
//   needClearLine: 20,
//   stage: 1,
// };
// export const Default = () => <Template>sdfasdfasdf</Template>;
