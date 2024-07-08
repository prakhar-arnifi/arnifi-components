import React from "react";
import { Meta, StoryFn } from "@storybook/react";
import ButtonTert from "../components/ButtonTertiary";

export default {
  title: "Tertiary-Button",
  component: ButtonTert,
} as Meta<typeof ButtonTert>;

const Template: StoryFn<typeof ButtonTert> = (args) => <ButtonTert {...args} />;

export const Large = Template.bind({});
Large.args = {
  label: "Large Button",
  variant: "large",
};

export const Medium = Template.bind({});
Medium.args = {
  label: "Medium Button",
  variant: "medium",
};

export const Small = Template.bind({});
Small.args = {
  label: "Small Button",
  variant: "small",
};
