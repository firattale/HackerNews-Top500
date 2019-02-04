import React from "react";
import Card from "./Card";
import { shallow } from "enzyme";

const mockProps = {
  id: 1,
  author: "Firat",
  score: 150,
  title: "Hello World",
  url: "www.google.com"
};

const wrapper = shallow(<Card {...mockProps} />);
it("should render Card component", () => {
  expect(wrapper.length).toBe(1);
});
