import React from "react";
import CardList from "./CardList";
import Enzyme, { shallow, mount } from "enzyme";
import Adapter from "enzyme-adapter-react-16";

Enzyme.configure({ adapter: new Adapter() });
const wrapper = shallow(<CardList />);

it("should render CardList component", () => {
  expect(wrapper.length).toBe(1);
});
