import React from "react";
import Header from "./Header";
import Enzyme, { shallow } from "enzyme";
import Adapter from "enzyme-adapter-react-16";

Enzyme.configure({ adapter: new Adapter() });
const wrapper = shallow(<Header />);

it("should render Footer component", () => {
  expect(wrapper.length).toBe(1);
});
