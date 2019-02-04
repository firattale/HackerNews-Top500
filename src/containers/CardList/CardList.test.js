import React from "react";
import CardList from "./CardList";
import { shallow } from "enzyme";

const wrapper = shallow(<CardList />);

it("should render CardList component", () => {
  expect(wrapper.length).toBe(1);
});
