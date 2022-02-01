import { ComponentMeta, ComponentStory } from "@storybook/react";
import { MyButton } from "../../components/MyButton";

export default {
  title: "UI/MyButton",
  component: MyButton,
  argTypes: {
    fontColor: {
      control: { type: "color" },
    },
  },
} as ComponentMeta<typeof MyButton>;

const Template: ComponentStory<typeof MyButton> = (args) => (
  <MyButton {...args} />
);

export const Primary = Template.bind({});
Primary.args = {
  color: "primary",
};

export const Secondary = Template.bind({});
Secondary.args = {
  color: "secondary",
};

export const Tertiary = Template.bind({});
Tertiary.args = {
  color: "tertiary",
};
