import React from "react";
import { Meta, StoryFn } from "@storybook/react";
import Button from "../components/Button";

export default {
  title: "Primary-Button",
  component: Button,
} as Meta<typeof Button>;

const Template: StoryFn<typeof Button> = (args) => <Button {...args} />;

export const ExtraLarge = Template.bind({});
ExtraLarge.args = {
  label: "Extra Large Button",
  variant: "extra-large",
  color: "primary",
  arrow: false,
};

export const Large = Template.bind({});
Large.args = {
  label: "Large Button",
  variant: "large",
  color: "primary",
  arrow: false,
};

export const Medium = Template.bind({});
Medium.args = {
  label: "Medium Button",
  variant: "medium",
  color: "primary",
  arrow: false,
};

export const Small = Template.bind({});
Small.args = {
  label: "Small Button",
  variant: "small",
  color: "primary",
  arrow: false,
};
