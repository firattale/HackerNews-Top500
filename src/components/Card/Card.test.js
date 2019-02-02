import React from "react";
import Card from "./Card";
import Enzyme, { shallow } from "enzyme";
import Adapter from "enzyme-adapter-react-16";

Enzyme.configure({ adapter: new Adapter() });
const mockProps = {
  ids: [1],
  authors: ["Firat"],
  scores: [150],
  titles: ["Hello World"],
  urls: ["www.google.com"]
};

const wrapper = shallow(<Card {...mockProps} />);
it("should render Card component", () => {
  expect(wrapper.length).toBe(1);
});
