import React from "react";
import Header from "./Header";
import { shallow } from "enzyme";
import "../../setupTests";

it("should render Header component", () => {
  const wrapper = shallow(<Header />);
  expect(wrapper.length).toBe(1);
});
